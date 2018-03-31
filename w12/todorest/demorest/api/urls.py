from django.urls import path

from api import views


urlpatterns = [
    path('tests/', views.test_list),
    path('tests/<int:test_id>/', views.test_detail),
]
