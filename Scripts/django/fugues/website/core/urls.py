from django.conf.urls import url 

from . import views

urlpatterns = [
        url(r'^$', views.home, name='home'),
        url(r'^events', views.events, name='events'),
        url(r'^members', views.members, name='members'),
]
