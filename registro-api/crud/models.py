from django.db import models

class Atleta(models.Model):
    '''
    generos = (
        ('feminino','Feminino'),
        ('masculino','Masculino')
    )
    graduacoes = (
        ('faixabranca','Faixa Branca'),
        ('faixaazul','Faixa Azul'),
        ('faixaroxa','Faixa Roxa'),
        ('faixamarrom','Faixa Marrom'),
        ('faixapreta','Faixa Preta')
    )
    '''
    nome = models.CharField(max_length=100)
    equipe = models.CharField(max_length=100)
    #genero = models.CharField(max_length = 50,choices = generos,default=generos[0][0])
    #idade = models.IntegerField(default=0)
    #graduacao = models.CharField(max_length = 50,choices = graduacoes,default=graduacoes[0][0])
    #created_at = models.DateTimeField(auto_now_add=True)
    #updated_at = models.DateTimeField(auto_now=True)
    def __str__(self) -> str:
        return f"<Atleta {self.nome}, Equipe {self.equipe}"