import os
import io
import qrcode
from flask import Flask, redirect, url_for, request, session
from flask import send_file
from google_auth_oauthlib.flow import Flow
from googleapiclient.discovery import build
from googleapiclient.http import MediaIoBaseUpload
import google.auth

# Initialize Flask app
app = Flask(__name__)

# Secret key to enable session management
app.secret_key = os.urandom(24)

# OAuth 2.0 configuration (credentials from Google Cloud Console)
CLIENT_SECRETS_FILE = "credentials.json"  # Your credentials.json file path
SCOPES = ['https://www.googleapis.com/auth/drive.file']  # Scopes for uploading files

# OAuth 2.0 flow
flow = Flow.from_client_secrets_file(
    CLIENT_SECRETS_FILE,
    scopes=SCOPES,
    redirect_uri='https://localhost:5000/qr_code'
)

# Route to start OAuth authorization flow
@app.route('/authorize')
def authorize():
    authorization_url, state = flow.authorization_url()
    session['state'] = state  # Store state in session to verify later
    return redirect(authorization_url)

# Callback route to handle the OAuth response
@app.route('/qr_code')
def qr_code():
    flow.fetch_token(authorization_response=request.url)
    if not flow.credentials:
        return 'Failed to get credentials from Google.', 400
    session['credentials'] = credentials_to_dict(flow.credentials)
    return redirect(url_for('upload_file'))

# Convert credentials to dictionary to store in session
def credentials_to_dict(credentials):
    return {
        'token': credentials.token,
        'refresh_token': credentials.refresh_token,
        'token_uri': credentials.token_uri,
        'client_id': credentials.client_id,
        'client_secret': credentials.client_secret,
        'scopes': credentials.scopes
    }

# Route to handle the file upload to Google Drive
@app.route('/upload_file')
def upload_file():
    credentials = session.get('credentials')

    if not credentials:
        return redirect(url_for('qr_code'))

    credentials = google.auth.credentials.Credentials(**credentials)
    drive_service = build('drive', 'v3', credentials=credentials)

    # Generate a QR code (you can replace this with dynamic data if needed)
    qr_data = "Sample data for QR Code"
    qr = qrcode.QRCode(version=1, error_correction=qrcode.constants.ERROR_CORRECT_L, box_size=10, border=4)
    qr.add_data(qr_data)
    qr.make(fit=True)
    img = qr.make_image(fill='black', back_color='white')

    # Save the image to a BytesIO object
    img_io = io.BytesIO()
    img.save(img_io, 'PNG')
    img_io.seek(0)

    # Prepare metadata for the file upload
    file_metadata = {
        'name': 'qr_code.png',
        'mimeType': 'image/png'
    }
    media = MediaIoBaseUpload(img_io, mimetype='image/png')

    # Upload file to Google Drive
    file = drive_service.files().create(
        body=file_metadata,
        media_body=media,
        fields='id'
    ).execute()

    return f'QR code uploaded successfully! File ID: {file["id"]}'

# Main route to display the form (optional if you want to generate QR codes dynamically)
@app.route('/')
def main():
    return '''
        <h1>QR Code Generator</h1>
        <a href="/authorize">Authorize and Upload QR Code to Google Drive</a>
    '''

# Run the Flask application
if __name__ == '__main__':
    app.run(debug=True)
