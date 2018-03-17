from django.urls import path
from . import views



urlpatterns = [
    path('', views.index, name="index"),
    path('books/', views.books_list, name="book_list"),
    path('books/<int:book_id>', views.books_details, name="book_details"),
    
    path('authors/', views.authors_list, name="author_list"),
    path('authors/<int:author_id>', views.authors_details, name="author_details"),
    
]
