# Generated by Django 5.0.6 on 2024-10-22 20:43

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('requests', '0005_alter_lessondays_user_request'),
    ]

    operations = [
        migrations.AlterField(
            model_name='lessondays',
            name='user_request',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='user_request_set', to='requests.request'),
        ),
    ]
