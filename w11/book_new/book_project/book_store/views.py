from django.shortcuts import render

from book_store.models import Book, Author


def index(request):
  return render(request, 'index.html')


def books_list(request):
  books = Book.objects.all().order_by('-created_at')
  return render(request, 'book/book_list.html', {"book_list": books, "active_menu": "book"})


def books_details(request, book_id):
  book = Book.objects.get(pk=book_id)
  return render(request, 'book/book_details.html', {"book": book, "active_menu": "book"})


def authors_list(request):
  authors = Author.objects.all()
  return render(request, 'author/author_list.html', {"author_list": authors, "active_menu": "author"})


def authors_details(request, author_id):
  author = Author.objects.get(pk=author_id)
  return render(request, 'author/author_details.html', {"author": author, "active_menu": "author"})

