from django.urls import path
from . import views


urlpatterns = [
    path('', views.home, name='index'),
    #  path('contact/', views.home, name='contact_page'),
]