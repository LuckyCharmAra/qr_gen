from django.shortcuts import render

# Create your views here.
def main_gen (request):
    return render(request, 'main-page.html')