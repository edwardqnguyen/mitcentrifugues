# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_auto_20150503_0550'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='image',
            field=models.ImageField(null=True, upload_to=b'events/', blank=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='member',
            name='picture',
            field=models.ImageField(null=True, upload_to=b'members/', blank=True),
            preserve_default=True,
        ),
    ]
