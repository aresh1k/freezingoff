from django.contrib import admin
from django import forms
from .models import Request, LessonDays, DAYS


class LessonDaysAdminForm(forms.ModelForm):
    field = forms.MultipleChoiceField(choices=DAYS, widget=forms.CheckboxSelectMultiple())

    def clean_field(self):
        if len(self.cleaned_data['field']):
            raise forms.ValidationError('Выбери хотя бы один вариант.')
        return self.cleaned_data['field']
    
    class Meta:
        model = LessonDays
        fields = '__all__'
        

class LessonDaysAdmin(admin.ModelAdmin):
    form = LessonDaysAdminForm


admin.site.register((Request, LessonDays))
