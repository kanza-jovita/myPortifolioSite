from django.forms import ModelForm
from .models import *

#create a new model here
class ContactForm(ModelForm):
    class Meta:
        model = Contact
        fields = '__all__'




