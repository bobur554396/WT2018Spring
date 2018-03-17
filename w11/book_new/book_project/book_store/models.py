from django.db import models


class Author(models.Model):
  name = models.CharField(max_length=200, blank=True)

  def __str__(self):
    return self.name


class Book(models.Model):
  autor = models.ForeignKey(Author, on_delete=models.CASCADE, default=1)
  title = models.CharField(max_length=200, blank=True)
  updated_at = models.DateTimeField(auto_now=True, blank=True, null=True)
  created_at = models.DateTimeField(auto_now_add=True, blank=True, null=True)

  def __str__(self):
    return self.title
