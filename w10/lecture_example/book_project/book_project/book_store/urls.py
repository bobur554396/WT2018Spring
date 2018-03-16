from django.urls import path
from . import views


urlpatterns = [
    path('books/', views.books_list, name="book_list"),
    path('books/details', views.details, name="book_details"),
]
