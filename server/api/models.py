from django.contrib.auth.models import User
from django.db import models
from django.utils import timezone


class Post(models.Model):
    # an author could have multiple posts
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=30)
    content = models.TextField()
    date_posted = models.DateTimeField(default=timezone.now)