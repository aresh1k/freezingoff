from django.urls import path
from .views import VideoViewSet

video_list = VideoViewSet.as_view({
    'get': 'list',
})

video_detail = VideoViewSet.as_view({
    'get': 'retrieve',
})

urlpatterns = [
    path('video/', video_list, name='video-list'),
    path('video/<int:pk>/', video_detail, name='video-detail'),
]
