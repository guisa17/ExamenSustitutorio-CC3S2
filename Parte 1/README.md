# Parte 1

Cambiamos al directorio de rottenpotatoes que se ha entregado para esta actividad. E inmediatamente ejecutaremos bundle install --without production para asegurar que las gemas y dependencias necesarias estén instaladas.

![Alt text](image.png)
![Alt text](image-2.png)

Seguidamente, crearemos el esquema de base de datos inicial:
![Alt text](image-3.png)

Luego, agregaremos algunos datos adicionales a nuestro archivo db/seeds.rb:
![Alt text](image-4.png)

Seguidamente, realizaremos la migración y la llenaremos con los datos proporcionados en seeds.rb.
![Alt text](image-5.png)
![Alt text](image-6.png)

Tendremos los siguientes archivos creados:
![Alt text](image-7.png)

Verficamos el funcionamiento de rspec:
![Alt text](image-8.png)

Verificamos la configuración de cucumber:
![Alt text](image-10.png)
![Alt text](image-11.png)

Asimismo se muestra el caso de error mencionado:
![Alt text](image-12.png)


## Agregar un campo Director a Movies

