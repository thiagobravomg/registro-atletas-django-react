# Generated by Django 4.0.2 on 2022-02-20 21:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('crud', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='atleta',
            name='genero',
            field=models.CharField(max_length=50),
        ),
        migrations.AlterField(
            model_name='atleta',
            name='graduacao',
            field=models.CharField(max_length=50),
        ),
    ]