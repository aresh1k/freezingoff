# Generated by Django 5.0.6 on 2024-10-07 20:02

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('requests', '0003_rename_family_name_request_familname_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='request',
            old_name='familName',
            new_name='familyName',
        ),
    ]
