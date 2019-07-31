from django.db import models
from django.utils.datetime_safe import datetime


class MemberManager(models.Manager):

    def get_current_members(self):
        return self.filter(current=True).order_by('year')

    def get_alumni(self):
        return self.filter(current=False).order_by('year').reverse()

    def get_voicepart(self, part):
        return self.filter(voice_part=part)

class Member(models.Model):
    VOICE_PARTS = (
            ('', 'None'),
            ('bass', 'Bass'),
            ('bari', 'Baritone'),
            ('tenor', 'Tenor'),
            ('alto', 'Alto'),
            ('mezzo', 'Mezzo'),
            ('sop', 'Soprano'),
        )
    name = models.CharField('Name', max_length=100)
    year = models.IntegerField('Class year')
    voice_part = models.CharField('Voice part', 
            max_length=10, choices=VOICE_PARTS,
            default='')
    current = models.BooleanField(default=True)
    picture = models.ImageField(upload_to='members/', blank=True, null=True)
    link = models.URLField('Website', blank=True, null=True)

    objects = MemberManager()

    def __unicode__(self):
        return self.name
    

class EventManager(models.Manager):

    def get_upcoming_events(self):
        return self.filter(end__gte=datetime.now())

    def get_past_events(self):
        return self.filter(end__lt=datetime.now())


class Event(models.Model):
    start = models.DateTimeField('Start Time', blank=True, null=True)
    end = models.DateTimeField('End Time', blank=True, null=True)
    name = models.CharField('Name', max_length=100)
    location = models.CharField('Location', max_length=100)
    description = models.TextField('Description')
    image = models.ImageField(upload_to='events/', blank=True, null=True)
    link = models.URLField('Link', blank=True, null=True)
