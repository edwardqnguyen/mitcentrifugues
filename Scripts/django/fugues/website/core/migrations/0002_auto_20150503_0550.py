# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='event',
            name='link',
            field=models.URLField(null=True, verbose_name=b'Link', blank=True),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='member',
            name='link',
            field=models.URLField(null=True, verbose_name=b'Website', blank=True),
            preserve_default=True,
        ),
    ]
