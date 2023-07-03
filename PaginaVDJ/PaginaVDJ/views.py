from django.shortcuts import render, HttpResponseRedirect

def PaginaVideojuego_view(request):
    return render(request, 'PaginaVideojuego.html')

def formulario_view(request):
    if request.method == 'POST':
        nombre = request.POST.get('nombre')
        usuario = request.POST.get('usuario')
        contraseña = request.POST.get('contraseña')

        if nombre and usuario and contraseña:

            return HttpResponseRedirect('PaginaVideojuego/')
        
        error_message = "Debes rellenar todos los campos antes de ingresar."
        return render(request, 'formulario.html', {'error_message': error_message})

    return render(request, 'formulario.html')

