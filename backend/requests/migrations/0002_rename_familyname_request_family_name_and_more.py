# Generated by Django 5.0.6 on 2024-10-07 20:01

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('requests', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='request',
            old_name='familyName',
            new_name='family_name',
        ),
        migrations.RenameField(
            model_name='request',
            old_name='firstName',
            new_name='first_name',
        ),
    ]
