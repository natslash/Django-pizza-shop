# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.forms import ModelForm

from pizzas.models import Pizza, Comment


class PizzaForm(ModelForm):
    class Meta:
        model = Pizza
        fields = '__all__'


class CommentForm(ModelForm):
    class Meta:
        model = Comment
        fields = ('text', 'score')
