# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from rest_framework import serializers

from pizzas.models import Ingredient, Pizza, Comment


class IngredientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ingredient
        fields = "__all__"


class PizzaSerializer(serializers.ModelSerializer):
    ingredients = IngredientSerializer(many=True)
    class Meta:
        model = Pizza
        fields = "__all__"


class CommentSerializer(serializers.ModelSerializer):
    pizza = PizzaSerializer()
    class Meta:
        model = Comment
        fields = "__all__"