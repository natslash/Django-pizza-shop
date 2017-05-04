# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.conf.urls import url, include

from pizzas import views


#Register the views of the app, 
urlpatterns = [
    url(r'^pizza/(?P<pk>\d+)', views.detail_view, name='pizza-detail'),
    url(r'^login/$', views.login_view, name="login"),
    url(r'^register/$', views.register_view, name="register"),
    url(r'^logout/$', views.logout_view, name="logout"),
    url(r'^add/$', views.add_pizza, name='add-pizza'),
    url(r'^$', views.pizza_list, name='pizza-list')
]