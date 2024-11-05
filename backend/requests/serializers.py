from rest_framework import serializers
from .models import Request, LessonDays


class LessonDaysSerializer(serializers.ModelSerializer):
    class Meta:
        model = LessonDays
        fields = ('day',)


class RequestSerializer(serializers.ModelSerializer):
    lessonDays = LessonDaysSerializer(many=True, source='user_request_set')
    class Meta:
        model = Request
        fields = ('id', 'familyName', 'firstName', 'patronymic', 'age', 'englishLevel', 'experience', 'phoneNumber', 'lessonDays')


    def create(self, validated_data):
        print(validated_data)
        lesson_days_data = validated_data.pop('user_request_set')
        lesson_request = Request.objects.create(**validated_data)
        for lesson_day in lesson_days_data:
            LessonDays.objects.create(user_request=lesson_request, day=lesson_day['day'])
        return lesson_request
