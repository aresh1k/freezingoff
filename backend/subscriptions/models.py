from django.db import models


class Subscription(models.Model):
    title = models.CharField(max_length=200, unique=True, verbose_name='Название')
    description = models.CharField(max_length=200, null=True, blank=True, verbose_name='Описание')
    price = models.FloatField(null=False, blank=False, verbose_name='Цена')
    text = models.TextField(null=False, blank=False, verbose_name='Особенности')
    created = models.DateTimeField(auto_now_add=True, verbose_name='Дата создания')

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['-created']
        verbose_name = 'Тариф'
        verbose_name_plural = 'Тарифы'