from django.db import models

class Test(models.Model):
  title = models.CharField(max_length=100)
  body = models.TextField()
  done = models.BooleanField(default=False)

  def to_json(self):
    return {
      'id': self.id,
      'title': self.title,
      'body': self.body,
      'done': self.done,
    }


  def __str__(self):
    return self.title