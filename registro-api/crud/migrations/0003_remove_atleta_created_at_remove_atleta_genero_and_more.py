# Generated by Django 4.0.2 on 2022-02-20 21:34

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('crud', '0002_alter_atleta_genero_alter_atleta_graduacao'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='atleta',
            name='created_at',
        ),
        migrations.RemoveField(
            model_name='atleta',
            name='genero',
        ),
        migrations.RemoveField(
            model_name='atleta',
            name='graduacao',
        ),
        migrations.RemoveField(
            model_name='atleta',
            name='idade',
        ),
        migrations.RemoveField(
            model_name='atleta',
            name='peso',
        ),
        migrations.RemoveField(
            model_name='atleta',
            name='updated_at',
        ),
    ]
