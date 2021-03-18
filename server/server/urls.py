from django.contrib import admin
from django.urls import path

urlpatterns = [
    path('admin/', admin.site.urls),
]

from . import views

app_name = 'backend'
urlpatterns = [
    path('api/hello', views.hello, name='hello'),
]
