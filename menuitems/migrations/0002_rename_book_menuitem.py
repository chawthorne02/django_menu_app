# Generated by Django 4.1.2 on 2022-10-11 18:15

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('menuitems', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Book',
            new_name='Menuitem',
        ),
    ]