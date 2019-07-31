from django.shortcuts import render

from .models import Member, Event

def home(request):
    return render(request, 'home.html')

def members(request):
    members = Member.objects.get_current_members()
    alumni = Member.objects.get_alumni()
    context = {
            'members': members,
            'alumni': alumni,
    }
    return render(request, 'members.html', context)

def events(request):
    events = Event.objects.all()
    context = {
            'events': events,
    }
    return render(request, 'events.html', context)
