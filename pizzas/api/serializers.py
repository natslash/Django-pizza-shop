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

#    def create(self, validated_data):
#        user_data = validated_data.pop('user')
#        user = User.objects.create(**user_data)
#        user.set_password(user_data['password'])
#        user.save()
#        consumer = Consumer.objects.create(user=user, **validated_data)
#        return consumer

#    def create(self, request, *args, **kwargs):
#        serializer = self.get_serializer(data=request.data)
#        serializer.is_valid(raise_exception=True)
#        self.perform_create(serializer)
#        headers = self.get_success_headers(serializer.data)
#        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
    
    def create(self, **kwargs):
        """
        Creates a new object with the given kwargs, saving it to the database
        and returning the created object.
        """
        obj = self.model(**kwargs)
        self._for_write = True
        obj.save(force_insert=True, using=self.db) # calls the `save()` method here
        return obj

#    def create(self, validated_data):
#        user_data = validated_data.pop('user')
#        user = User.objects.create(**validated_data)
#        Profile.objects.create(user=user, **user_data)
#        return user



class CommentSerializer(serializers.ModelSerializer):
    pizza = PizzaSerializer()
    class Meta:
        model = Comment
        fields = "__all__"