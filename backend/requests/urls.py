from django.urls import path
from .views import RequestViewSet

request_list = RequestViewSet.as_view({
    'post': 'create',
})

urlpatterns = [
    path('lesson-request/', request_list, name='request-list'),
]
