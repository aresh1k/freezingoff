from rest_framework import serializers
from subscriptions.models import Subscription


class SubscriptionSerializer(serializers.Serializer):
    title = serializers.CharField(max_length=200)
    price = serializers.FloatField()


    def create(self, validated_data):
        return Subscription.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.title = validated_data.get('title', instance.title)
        instance.price = validated_data.get('price', instance.price)
        instance.save()
        return instance