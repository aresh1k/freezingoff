from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from subscriptions.models import Subscription
from subscriptions.serializers import SubscriptionSerializer


def subscription_list(request):
    if request.method == 'GET':
        subscriptions = Subscription.objects.all()
        serializer = SubscriptionSerializer(subscriptions, many=True)
        return JsonResponse(serializer.data)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = SubscriptionSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)


def subscription_detail(request, pk):
    try:
        subscription = Subscription.objects.get(pk=pk)
    except Subscription.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        serializer = SubscriptionSerializer(subscription)
        return JsonResponse(serializer.data)

    # elif request.method == 'PUT':
    #     data = JSONParser().parse(request)
    #     serializer = SubscriptionSerializer(subscription, data=data)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return JsonResponse(serializer.data)
    #     return JsonResponse(serializer.errors, status=400)

    # elif request.method == 'DELETE':
    #     subscription.delete()
    #     return HttpResponse(status=204)