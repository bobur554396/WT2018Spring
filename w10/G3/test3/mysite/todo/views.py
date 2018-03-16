# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.http import HttpResponse, JsonResponse


def index(request):
  list = {
    "asd": 1,
    "asd2": 2,
    "asd3": 3,
  }
  return JsonResponse(list)

def listProducts(request):
  pass

def create(request):
  pass