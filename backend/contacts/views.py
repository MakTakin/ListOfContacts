import json
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from contacts.models import Contacts

@csrf_exempt
def save_contacts(request):
    params = json.loads(request.body)
    contacts = Contacts()
    contacts.name = params['name']
    contacts.tel = params['tel']
    contacts.save()
    return JsonResponse({}, status=201)

@csrf_exempt
def get_contacts(request):
    data = Contacts.objects.order_by('id').all()
    data_list = list(data.values())
    return JsonResponse(data_list, status=200, safe=False)

@csrf_exempt
def delete_contacts(request):
    params = json.loads(request.body)
    Contacts.objects.filter(id=params['id']).delete()
    return JsonResponse({}, status=200)

