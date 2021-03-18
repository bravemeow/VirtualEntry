from django.http import JsonResponse

def hello(request):
    return JsonResponse({'response_text': 'Hello World!'})