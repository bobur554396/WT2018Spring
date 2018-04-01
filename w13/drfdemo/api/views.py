from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt

from rest_framework.parsers import JSONParser

from api.models import Todo
from api.serializers import TodoSerializer2

@csrf_exempt
def todo_list(request):
  if request.method == "GET":
    todos = Todo.objects.all()
    ser = TodoSerializer2(todos, many=True)
    return JsonResponse(ser.data, safe=False)
  elif request.method == "POST":
    data = JSONParser().parse(request)
    ser = TodoSerializer2(data=data)
    if ser.is_valid():
      ser.save()
      return JsonResponse(ser.data, status=201)
    return JsonResponse(ser.errors, status=400)


@csrf_exempt
def todo_detail(request, todo_id):
  
  try:
    todo = Todo.objects.get(pk=todo_id)
  except Exception as e:
    return JsonResponse({"error": str(e)}, status=404)

  if request.method == "GET":
    ser = TodoSerializer2(todo)
    return JsonResponse(ser.data) 
  elif request.method == "PUT":
    data = JSONParser().parse(request)
    ser = TodoSerializer2(todo, data)
    if ser.is_valid():
      ser.save()
      return JsonResponse(ser.data)
  elif request.method == "DELETE":
    todo.delete()
    ser = TodoSerializer2(todo)
    return JsonResponse(ser.data)