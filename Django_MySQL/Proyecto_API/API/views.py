from django.shortcuts import render
from django.views import View
from .models import Company
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from django.http.response import JsonResponse
import json
# Create your views here.
class CompanyView(View):
    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)
    
    def get(self,request,id=0):
        if id>0:
            companies=list(Company.objects.filter(id=id).values())
            if len(companies)>0:
                company=companies[0]
                datos={'message':'Informacion encontrada','company':company}
            else:
                datos={'message':'Informacion no encontrado'}
            return JsonResponse(datos)

        else:
            companies=list(Company.objects.values())
            if len(companies)>0:
                datos={'message':'Informacion encontrada','companies':companies}
            else:
                datos={'message':'Informacion no encontrado'}
            return JsonResponse(datos)
    def post(self,request):
        jd=json.loads(request.body)
        Company.objects.create(nombre=jd['nombre'],raza=jd['raza'],edad=jd['edad'])
        datos={'message':'Informacion insertada'}
        return JsonResponse(datos)
    def put(self,request, id):
        jd=json.loads(request.body)
        companies=list(Company.objects.filter(id=id).values())
        if len(companies)>0:
            company=Company.objects.get(id=id)
            company.nombre=jd['nombre']
            company.raza=jd['raza']
            company.edad=jd['edad']
            company.save()
            datos={'message':'Informacion modificada'}
        else:
            datos={'message':'Informacion no encontrado'}
        return JsonResponse(datos)
    def delete(self,request,id):
        companies=list(Company.objects.filter(id=id).values())
        if len(companies)>0:
            Company.objects.filter(id=id).delete()
            datos={'message':'Informacion eliminada'}
        else:
            datos={'message':'Informacion no encontrado'}
        return JsonResponse(datos)
        