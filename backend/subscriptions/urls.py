from django.urls import path
from subscriptions import views

urlpatterns = [
    path('api/subscription/', views.subscription_list),
    path('api/subscription/<int:pk>/', views.subscription_detail),
]