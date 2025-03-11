from django.urls import path
from .views import add_product

urlpatterns = [
    path('products/', add_product, name="add_product"),
]
