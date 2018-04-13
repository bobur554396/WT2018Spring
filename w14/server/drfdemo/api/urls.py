from django.urls import path, include

from api import views


urlpatterns = [
   path('todos/', views.todo_list),
   path('todos/<int:todo_id>/', views.todo_detail)
]
