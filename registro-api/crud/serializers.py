from .models import Atleta
from rest_framework import serializers

class AtletaSerializer(serializers.ModelSerializer):
    class Meta:
        model=Atleta
        fields='__all__'