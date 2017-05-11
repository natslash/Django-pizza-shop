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
        array = []
        ingredients_data = validated_data.pop('ingredients');
        for ingredientes in ingredients_data:
            p = Ingredient.objects.create(**ingredientes)
            array.append(p)
        pizza = Pizza.objects.create(**validated_data)
        #pizza.ingredients.add(array[0])
        for i in range(len(array)):
            pizza.ingredients.add(array[i])
        return pizza


class CommentSerializer(serializers.ModelSerializer):
    pizza = PizzaSerializer()
    class Meta:
        model = Comment
        fields = "__all__"