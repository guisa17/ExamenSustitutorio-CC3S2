# Parte 1: El ciclo de prueba de aceptación-prueba unitaria

Empezaremos nuestra tarea con escenario Cucumber que fallan, y, paso a paso, escribiremos el código para que dichos pasos puedan pasar las pruebas. De manera general, agregaremos la característica "buscar películas con el mismo director" a rottenpotatoes. 


## Corre y prepara rottenpotatoes

Cambiamos al directorio de rottenpotatoes que se ha entregado para esta actividad. E inmediatamente ejecutaremos `bundle install --without production` para asegurar que las gemas y dependencias necesarias estén instaladas.

![Alt text](image.png)
![Alt text](image-2.png)

Como se puede apreciar, no ha habido algún inconveniente respecto a versiones de Ruby o similares, por lo que se puede continuar con el trabajo sin problema alguno.


Seguidamente, crearemos el esquema de base de datos inicial. Dado nuestro proyecto, este será implementado en `db/migrate/20111119180638_create_movies.rb`, y tendrá la siguiente estructura:

![Alt text](image-3.png)

Luego, aunque de manera opcional, agregaremos algunos datos adicionales a nuestro archivo `db/seeds.rb`. Para nuestro caso, he agregado la película `tmpMovie`.

![Alt text](image-4.png)


A continuación, realizaremos la migración y la llenaremos con los datos proporcionados en seeds.rb.

![Alt text](image-5.png)
![Alt text](image-6.png)


Inmediatamente, tendremos los siguientes archivos creados:

![Alt text](image-7.png)


Verficamos el funcionamiento de RSpec ejecutando `rspec`:

![Alt text](image-8.png)


Y verificamos la configuración de cucumber ejecutando `cucumber`:

![Alt text](image-10.png)
![Alt text](image-11.png)


Asimismo se muestra el caso de error mencionado.

![Alt text](image-12.png)



## Agregar un campo Director a Movies

Agregaremos la columna Director a nuestra migración por medio de add_column de ActiveRecord::Migration. Primero, generaremos la migración:
![Alt text](image-16.png)
![Alt text](image-17.png)

Realizamos la migración respectiva:
![Alt text](image-18.png)

Luego, preparamos para cargar el nuevo esquema posterior a la migración:
![Alt text](image-19.png)

Vemos que al ejecutar nuestra app, esta ser verá de la siguiente manera:
![Alt text](image-20.png)

Sin embargo, necesitamos modificar nuestras vistas y nuestro modelo para que se pueda apreciar el campo para los directores.

Modificando nuestra vista tendremos el nuevo campo para director:
![Alt text](image-23.png)
![Alt text](image-21.png)

Luego, nuestro modelo agregaremos la siguiente línea:
![Alt text](image-22.png)

Ejecutando ahora cucumber, vemos como algunos escenarios pasan:
![Alt text](image-26.png)
![Alt text](image-25.png)

Estos escenarios son aprobados porque ya se encuentra implementado director en nuestra base de datos, y dichos escenarios muestran que si me dirijo a movies, voy a ser capaz de encontrar a los directores correspondientes.

Vemos que los pasas background ahora pasan, pero el primer paso de cada escenario falla porque no hemos proporcionado the edit page.
![Alt text](image-27.png)

Dado la prueba de cucumber, vemos que tenemos que dirigirnos a features/support/paths.rb, que es de donde se está generando el error. Agregaremos los siguientes mapeos de edit y details que son dados por las pruebas de cucumber:
![Alt text](image-28.png)
![Alt text](image-29.png)

Luego, respecto a las modificaciones que se tendrán que realizar en el controlador tenemos el siguiente método al cual agregaremos el campo de director:
![Alt text](image-30.png)

De no realizar este cambio, las acciones de create y update no funcinarían correctamente dado que se debería de manejar el campo director.


## Utiliza pruebas de aceptación para aprobar nuevos escenarios

Para el primer escenario tenemos:
![Alt text](image-31.png)

Realizamos la siguiente moficación:
![Alt text](image-32.png)

Ahora tendremos:
![Alt text](image-33.png)

Para solucionar los siguiente errores, nos dirigiremos a nuestra vista edit, en donde tendremos que agregar los campos de director:
![Alt text](image-34.png)



## Cobertura de código

Para este apartado de utilzará SimpleCov para la medición de cobertura de pruebas, para nuestro caso, volveremos a ejecutar las pruebas de cucumnber, y SimpleCov nos dará un informe en coverage/.
![Alt text](image-35.png)
![Alt text](image-36.png)

Cuyo informe obtenido será:
![Alt text](image-37.png)

Podemos notar que aún será necesario realizar pruebas específicamente en el archivo movies_controller.rb.
