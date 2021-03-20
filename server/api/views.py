from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import JsonResponse
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser

from .models import Post
from .serializers import PostSerializer


@api_view(['GET'])
def posts(request):
    serializer = PostSerializer(Post.objects.all(), many=True)
    serial_data = serializer.data
    return Response(serial_data)