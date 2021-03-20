from django.contrib import admin
from django.urls import path, include
from api.views import posts

app_name = 'backend'
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/posts', posts, name='posts')
]

