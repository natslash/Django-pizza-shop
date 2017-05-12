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

    def create(self, validated_data):
        ingredients_data = validated_data.pop('ingredients')
        pizza = Pizza.objects.create(**validated_data)
        for ingredient in ingredients_data:
            p = Ingredient.objects.get(name=ingredient["name"])
            pizza.ingredients.add(p)
        return pizza


class CommentSerializer(serializers.ModelSerializer):
    pizza = PizzaSerializer()
    class Meta:
        model = Comment
        fields = "__all__"