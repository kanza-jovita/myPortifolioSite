from django.shortcuts import render, redirect
from .forms import ContactForm

# Create your views here.

def home(request):
    return render(request, 'Deel/index.html')


def contact(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('/index')
        else:
            print("Form is not valid:", form.errors)
    else:
        form = ContactForm()
    return render(request, 'Deel/index.html', {'form': form})
