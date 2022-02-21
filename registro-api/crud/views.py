from django.shortcuts import render
from .models import Atleta
from rest_framework import viewsets
from .serializers import AtletaSerializer


class AtletasViewset(viewsets.ModelViewSet):
    serializer_class=AtletaSerializer
    queryset=Atleta.objects.all()