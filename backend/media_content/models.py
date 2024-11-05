from django.db import models

class Video(models.Model):
    name = models.CharField(null=False, blank=False, max_length=200, verbose_name='Название')
    description = models.TextField(null=False, blank=True, verbose_name='Возраст')
    url = models.URLField(null=True, blank=False, max_length=200, verbose_name='Ссылка')
    created = models.DateTimeField(auto_now_add=True, verbose_name='Дата создания')

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['-created']
        verbose_name = 'Видео'
        verbose_name_plural = 'Видео'
