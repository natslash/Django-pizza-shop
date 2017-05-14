from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required, permission_required
from django.shortcuts import render, redirect, get_object_or_404
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt

# Create your views here.
from django.views.generic import DetailView

from pizzas.forms import PizzaForm, CommentForm
from pizzas.models import Pizza
from django.contrib.auth.forms import AuthenticationForm, UserCreationForm

@login_required()
def config(request):
    content = 'var config = {token: myToken};'
    response = HttpResponse(content, content_type='application/javascript')
    response['Content-Length'] = len(content)
    return response

#@login_required()
def pizza_list(request):
    return render(request, 'pizzashop/index.html')

def login_view(request):
    if request.user.is_authenticated():
        return redirect('pizza-list')

    if request.method == "POST":
        form = AuthenticationForm(data=request.POST)
        if form.is_valid():
            username = form.cleaned_data["username"]
            password = form.cleaned_data["password"]

            user = authenticate(username=username, password=password)
            if user is not None:
                login(request, user)
            return redirect('pizza-list')
    else:
        form = AuthenticationForm()
    return render(request, 'registration/login.html', {'form': form})


def register_view(request):
    if request.user.is_authenticated():
        return redirect('pizza-list')

    if request.method == "POST":
        form = UserCreationForm(data=request.POST)
        if form.is_valid():
            user = form.save()
            password = form.cleaned_data["password1"]
            user = authenticate(username=user.username, password=password)
            if user is not None:
                login(request, user)
            return redirect('pizza-list')
    else:
        form = UserCreationForm()
    return render(request, 'registration/register.html', {'form': form})

@csrf_exempt
def logout_view(request):
    if request.user.is_authenticated():
        logout(request)
    return redirect('login')
