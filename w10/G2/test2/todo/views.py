# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from models import Product

def index(request):
  list = {
    "item1": 1,
    "item2": 2,
    "item3": 3,
  }
  products = Product.objects.all()
  return JsonResponse(products)

def show(request):
  product = Product.get(pk=request.body.id)
  return JsonResponse(product)

def create(request):
  p = Product.create(request.body)
