from django.urls import path
from . import views

app_name = 'qr'

urlpatterns = [
    path('', views.main_gen, name='main_gen'),
]