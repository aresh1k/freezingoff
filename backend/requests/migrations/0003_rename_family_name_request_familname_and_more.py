# Generated by Django 5.0.6 on 2024-10-07 20:02

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('requests', '0002_rename_familyname_request_family_name_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='request',
            old_name='family_name',
            new_name='familName',
        ),
        migrations.RenameField(
            model_name='request',
            old_name='first_name',
            new_name='firstName',
        ),
    ]
