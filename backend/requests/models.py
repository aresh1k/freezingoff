from django.db import models


ENGLISH_LEVEL = {
    'A0': 'A0',
    'A1': 'A1',
    'A2': 'A2',
    'B1': 'B1',
    'B2': 'B2',
    'C1': 'C1',
}


EXPERIENCE_TIME = {
    '0': 'Отсутствует',
    'half_year': 'До полугода',
    'year': 'Около года',
    'over_year': 'Больше года',
}


DAYS = {
    'monday': 'Понедельник',
    'tuesday': 'Вторник',
    'wednesday': 'Среда',
    'thursday': 'Четверг',
    'friday': 'Пятницы',
    'saturday': 'Суббота',
    'sunday': 'Воскресенье',
}


class Request(models.Model):
    familyName = models.CharField(null=False, blank=False, max_length=200, verbose_name='Фамилия')
    firstName = models.CharField(null=False, blank=False, max_length=200, verbose_name='Имя')
    patronymic = models.CharField(null=True, blank=True, max_length=200, verbose_name='Отчество')
    age = models.IntegerField(null=False, blank=False, verbose_name='Возраст')
    englishLevel = models.CharField(null=False, blank=False, max_length=50, verbose_name='Уровень английского', choices=ENGLISH_LEVEL)
    experience = models.CharField(null=False, blank=False, max_length=50, verbose_name='Опыт изучения', choices=EXPERIENCE_TIME)
    phoneNumber = models.CharField(null=False, blank=False, max_length=200, verbose_name='Мобильный телефон')
    created = models.DateTimeField(auto_now_add=True, verbose_name='Дата создания')

    def __str__(self):
        return self.familyName + ' ' + self.firstName

    class Meta:
        ordering = ['-created']
        verbose_name = 'Заявка'
        verbose_name_plural = 'Заявки'


class LessonDays(models.Model):
    day = models.CharField(null=False, blank=False, max_length=50, verbose_name='Учебный день', choices=DAYS)
    user_request = models.ForeignKey(Request, on_delete=models.CASCADE, related_name='user_request_set')

    def __str__(self):
        return self.day
    
    class Meta:
        verbose_name = 'Учебный день'
        verbose_name_plural = 'Учебные дни'
