from rest_framework import viewsets
from rest_framework.parsers import JSONParser
from .models import Video
from .serializers import VideoSerializer


class VideoViewSet(viewsets.ModelViewSet):

    queryset = Video.objects.all()
    serializer = VideoSerializer
    parser_classes = [JSONParser]
