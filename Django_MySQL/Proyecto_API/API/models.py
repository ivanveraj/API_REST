from django.db import models

class Company(models.Model):
    nombre=models.CharField(max_length=20)
    raza=models.CharField(max_length=30)
    edad=models.PositiveIntegerField()
    
