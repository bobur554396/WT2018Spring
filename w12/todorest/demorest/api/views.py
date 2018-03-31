from django.http import HttpResponse, JsonResponse, QueryDict
from django.views.decorators.csrf import csrf_exempt

from api.models import Test


@csrf_exempt
def test_list(request):
  if request.method == "GET":
    tests = Test.objects.all()
    tests_json = [t.to_json() for t in tests]
    return JsonResponse(tests_json, safe=False)
  elif request.method == "POST":
    data = request.POST
    test = Test()
    test.title = data.get('title', '')
    test.body = data.get('body', '')
    test.save()
    
    return JsonResponse(test.to_json(), status=201)


@csrf_exempt
def test_detail(request, test_id):

  try:
    test = Test.objects.get(pk=test_id)
  except Exception as e:
    return JsonResponse({"error": str(e)}, status=404)

  if request.method == "GET":
    return JsonResponse(test.to_json())
  elif request.method == "PUT":
    data = QueryDict(request.body)
    test.title = data.get('title', test.title)
    test.body = data.get('body', test.body)
    test.save()
    return JsonResponse(test.to_json())
  elif request.method == "DELETE":
    test.delete()
    return JsonResponse(test.to_json())
  
