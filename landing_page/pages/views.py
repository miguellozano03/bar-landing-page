from django.http import request
from django.shortcuts import render

# Create your views here.

def home_view(request):
    return render(request, 'home.dj')

def menu_view(request):
    return render(request, 'menu.dj')

def events_view(request):
    return render(request, 'events.dj')

def contact_view(request):
    return render(request, 'contact.dj')
