from django.shortcuts import render
from .models import Event

# Create your views here.

def home_view(request):
    events = Event.objects.order_by('date')[:3]

    context = {
        'events': events
    }
    
    return render(request, 'home.dj', context)

def menu_view(request):
    return render(request, 'menu.dj')

def events_view(request):
    events = Event.objects.order_by('date')
    context = {
        'events': events}
    return render(request, 'events.dj', context)

def contact_view(request):
    return render(request, 'contact.dj')
