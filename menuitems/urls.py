from django.urls import path

from .views import MenuitemListAPIView

urlpatterns = [
    path('Menuitem/', MenuitemListAPIView.as_view()),
    # path('books/', BookListAPIView.as_view()),
]