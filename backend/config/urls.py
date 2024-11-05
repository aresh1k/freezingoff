from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('subscriptions.urls')),
    path('', include('requests.urls')),
    path('', include('media_content.urls')),
]
