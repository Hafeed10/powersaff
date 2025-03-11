from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.files.storage import default_storage
from .models import Product
import json

@csrf_exempt
def add_product(request):
    if request.method == "POST":
        try:
            name = request.POST.get("name")
            price = request.POST.get("price")
            discount = request.POST.get("discount", 0)  # Default to 0 if empty
            discountPoint = request.POST.get("discountPoint", 0)
            description = request.POST.get("description")
            image = request.FILES.get("image")

            # Validate required fields
            if not name or not price or not description:
                return JsonResponse({"error": "Missing required fields"}, status=400)

            # Save the product
            product = Product.objects.create(
                name=name,
                price=price,
                discount=discount,
                discountPoint=discountPoint,
                description=description,
                image=image
            )

            return JsonResponse(
                {
                    "message": "Product added successfully!",
                    "product": {
                        "id": product.id,
                        "name": product.name,
                        "price": product.price,
                        "discount": product.discount,
                        "discountPoint": product.discountPoint,
                        "description": product.description,
                        "image": product.image.url if product.image else None
                    }
                },
                status=201
            )
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)

    return JsonResponse({"error": "Invalid request method"}, status=405)
