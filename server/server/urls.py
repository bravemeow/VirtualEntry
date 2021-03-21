from django.contrib import admin
from django.urls import path, include, re_path
from api.views import posts

app_name = 'backend'
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/posts', posts, name='posts'),
    re_path(r'^rest-auth/', include('rest_auth.urls')),
    re_path(r'^rest-auth/registration/', include('rest_auth.registration.urls'))
]

