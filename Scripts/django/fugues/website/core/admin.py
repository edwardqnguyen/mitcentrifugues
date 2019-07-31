from django.contrib import admin

from .models import Event
from .models import Member 

admin.site.register(Event)
admin.site.register(Member)
