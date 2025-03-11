from django.db import models

class Product(models.Model):
    image = models.ImageField(upload_to="products/")
    price = models.DecimalField(max_digits=10, decimal_places=2)
    discount = models.DecimalField(max_digits=5, decimal_places=2, blank=True, null=True)
    name = models.CharField(max_length=255)
    discountPoint = models.IntegerField(blank=True, null=True)
    description = models.TextField()

    def __str__(self):
        return self.name
