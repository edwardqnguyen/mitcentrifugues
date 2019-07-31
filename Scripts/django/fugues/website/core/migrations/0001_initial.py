# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Event',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('start', models.DateTimeField(null=True, verbose_name=b'Start Time', blank=True)),
                ('end', models.DateTimeField(null=True, verbose_name=b'End Time', blank=True)),
                ('name', models.CharField(max_length=100, verbose_name=b'Name')),
                ('location', models.CharField(max_length=100, verbose_name=b'Location')),
                ('description', models.TextField(verbose_name=b'Description')),
                ('image', models.ImageField(null=True, upload_to=b'media/', blank=True)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='Member',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(max_length=100, verbose_name=b'Name')),
                ('year', models.IntegerField(verbose_name=b'Class year')),
                ('voice_part', models.CharField(default=b'', max_length=10, verbose_name=b'Voice part', choices=[(b'', b'None'), (b'bass', b'Bass'), (b'bari', b'Baritone'), (b'tenor', b'Tenor'), (b'alto', b'Alto'), (b'mezzo', b'Mezzo'), (b'sop', b'Soprano')])),
                ('current', models.BooleanField(default=True)),
                ('picture', models.ImageField(null=True, upload_to=b'media/', blank=True)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
    ]
