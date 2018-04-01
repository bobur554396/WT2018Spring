from django.db import models

class Todo(models.Model):
  title = models.CharField(max_length=100)
  created_at = models.DateTimeField(auto_now=True)


  def __str__(self):
    return self.title

