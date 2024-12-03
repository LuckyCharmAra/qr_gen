document.getElementById('generateBtn').addEventListener('click', async () => {
  // Get the form and check if it's valid
  const form = document.getElementById('qrForm');

  // Add the 'was-validated' class to show validation styles
  form.classList.add('was-validated');

  // Prevent submission if the form is invalid
  if (!form.checkValidity()) {
    return; // Do not proceed if the form is invalid
  }

  // Collect form data
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  // Send data to the backend for QR generation
  const response = await fetch('/generate_qr', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);

    // Display the QR code image
    const qrCodeImage = document.getElementById('qrCodeImage');
    qrCodeImage.src = url;
    qrCodeImage.classList.remove('d-none');

    // Enable the download button
    const downloadBtn = document.getElementById('downloadBtn');
    downloadBtn.classList.remove('d-none');
    downloadBtn.href = url;
  } else {
    alert('Failed to generate QR Code. Please try again.');
  }
});