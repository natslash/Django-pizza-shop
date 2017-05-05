from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required, permission_required
from django.shortcuts import render, redirect, get_object_or_404

# Create your views here.
from django.views.generic import DetailView

from pizzas.forms import PizzaForm, CommentForm
from pizzas.models import Pizza
from django.contrib.auth.forms import AuthenticationForm, UserCreationForm


def pizza_list(request):
    pizzas = Pizza.objects.all()
    return render(request, 'pizzashop/index.html', {'pizzas': pizzas})


@login_required()
@permission_required('pizzashop.add_pizza')
def add_pizza(request):
    if request.method == "POST":
        form = PizzaForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
        return redirect('pizza-list')
    else:
        form = PizzaForm()
        return render(request, 'pizzashop/add.html', {'form': form})


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


def detail_view(request, pk):
    pizza = get_object_or_404(Pizza, pk=pk)
    data = {
        'object': pizza
    }
    if request.user.is_authenticated():
        if request.method == "POST":
            form = CommentForm(data=request.POST)
            if form.is_valid():
                comment = form.save(commit=False)
                comment.user = request.user
                comment.pizza = pizza
                comment.save()
                form = CommentForm()
        else:
            form = CommentForm()
        data['form'] = form
    return render(request, 'pizzashop/pizza_detail.html', data)


def logout_view(request):
    if request.user.is_authenticated():
        logout(request)
    return redirect('pizza-list')