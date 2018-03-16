from django.shortcuts import render
from django.http import HttpResponse


def books_list(request):
  return HttpResponse("book list page")

def details(request):
  return HttpResponse("details page")
