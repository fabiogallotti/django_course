from django.shortcuts import render
from django.http import HttpResponse
from AppTwo.models import User
# Create your views here.

def index(response):
    return HttpResponse(
    """<em>My Second App</em>
    <h2>Go to /users to see the list of users</h2>
    """)

def help(request):
    help_dict = {'help_insert': 'Help Page'}
    return render(request, 'AppTwo/help.html', context=help_dict)

def users(request):
    user_list = User.objects.order_by("last_name")
    users_dict = {'users': user_list}
    return render(request, 'AppTwo/users.html', context=users_dict)
