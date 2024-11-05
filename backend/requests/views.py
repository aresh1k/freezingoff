from rest_framework import viewsets
from rest_framework.parsers import JSONParser
from .models import Request, LessonDays
from requests.serializers import RequestSerializer, LessonDaysSerializer
from rest_framework.permissions import AllowAny


class RequestViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = Request.objects.all()
    serializer_class = RequestSerializer
    parser_classes = [JSONParser]
