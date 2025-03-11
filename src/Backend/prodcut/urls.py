from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('producted/', include('prodcuts.urls')),  # Include the correct app's URLs
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
