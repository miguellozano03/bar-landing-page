from django.shortcuts import render
from .models import Event

# Create your views here.

def home_view(request):
    events = Event.objects.order_by('date')[:3]

    context = {
        'events': events
    }
    
    return render(request, 'home.html', context)

def menu_view(request):
    return render(request, 'menu.html')

def events_view(request):
    events = Event.objects.order_by('date')
    context = {
        'events': events}
    return render(request, 'events.html', context)

def contact_view(request):
    return render(request, 'contact.html')
