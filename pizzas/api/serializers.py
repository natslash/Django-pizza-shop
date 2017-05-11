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
    print(ingredients)
    class Meta:
        model = Pizza
        fields = "__all__"

    def create(self, validated_data):
        array = []
        dict={}
        
        ingredients_data = validated_data.pop('ingredients')
        print(ingredients_data)
        for ingredient in ingredients_data:
            print("#########",ingredient["name"])
            p = Ingredient.objects.filter(name=ingredient["name"])[0]
            ##probar con get
            #print("%%%%%%%%%",p)
            array.append(p)
            
        pizza = Pizza.objects.create(**validated_data)
        #pizza.ingredients.add(array[0])
        for i in range(len(array)):
            #print("--------",array[i])
            pizza.ingredients.add(array[i])
        return pizza


class CommentSerializer(serializers.ModelSerializer):
    pizza = PizzaSerializer()
    class Meta:
        model = Comment
        fields = "__all__"