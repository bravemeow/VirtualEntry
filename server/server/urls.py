from django.contrib import admin
from django.urls import path

from . import views

app_name = 'backend'
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/hello', views.hello, name='hello')
]

