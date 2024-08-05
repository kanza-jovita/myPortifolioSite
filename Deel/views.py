from django.shortcuts import redirect, render, HttpResponse
from .forms import *

# Create your views here.

def home(request):
    form = ContactForm(request.POST)
    if request.method == 'POST':
    
        if form.is_valid():
            form.save()
            return HttpResponse('success')
    else:
        form=ContactForm()
    return render(request, 'Deel/index.html', {'form': form})

