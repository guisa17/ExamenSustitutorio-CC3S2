# Parte 1: El ciclo de prueba de aceptación-prueba unitaria

Empezaremos nuestra tarea con escenario Cucumber que fallan, y, paso a paso, escribiremos el código para que dichos pasos puedan pasar las pruebas. De manera general, agregaremos la característica "buscar películas con el mismo director" a rottenpotatoes. 


## Corre y prepara rottenpotatoes

Cambiamos al directorio de rottenpotatoes que se ha entregado para esta actividad. E inmediatamente ejecutaremos `bundle install --without production` para asegurar que las gemas y dependencias necesarias estén instaladas.

![Alt text](img/image.png)
![Alt text](img/image-2.png)

Como se puede apreciar, no ha habido algún inconveniente respecto a versiones de Ruby o similares, por lo que se puede continuar con el trabajo sin problema alguno.


Seguidamente, crearemos el esquema de base de datos inicial. Dado nuestro proyecto, este será implementado en `db/migrate/20111119180638_create_movies.rb`, y tendrá la siguiente estructura:

![Alt text](img/image-3.png)

Luego, aunque de manera opcional, agregaremos algunos datos adicionales a nuestro archivo `db/seeds.rb`. Para nuestro caso, he agregado la película `tmpMovie`.

![Alt text](img/image-4.png)


A continuación, realizaremos la migración y la llenaremos con los datos proporcionados en `seeds.rb`.

![Alt text](img/image-5.png)
![Alt text](img/image-6.png)


Inmediatamente, tendremos los siguientes archivos creados:

![Alt text](img/image-7.png)


Verficamos el funcionamiento de RSpec ejecutando `rspec`:

![Alt text](img/image-8.png)


Y verificamos la configuración de cucumber ejecutando `cucumber`:

![Alt text](img/image-10.png)
![Alt text](img/image-11.png)


Asimismo se muestra el caso de error mencionado.

![Alt text](img/image-12.png)



## Agregar un campo Director a Movies

Crearemos y aplicaremos una migración que agregue el campo director a la tabla de películas, tal que este sea una cadena que contenga el nombre del director. Realizaremos ello por medio de `add_column` de `ActiveRecord::Migration`. Primero, generaremos la migración con el comando `rails g migration AddDirectorToMovies director:string`, en donde podemos notar que al elegir dicho nombre para la migración, se nos generará el siguiente archivo:

![Alt text](img/image-16.png)
![Alt text](img/image-17.png)


De este última migración que se ha generado podemos ver el uso de `add_column` hacia `:movies`, y el campo a agregar sera `:director` de tipo `:string`.

Realizamos la migración respectiva. Además podremos notar que en nuestro archivo `db/schema.rb` se verá incluido dicho nuevo campo para director `t.string "director"`.

![Alt text](img/image-18.png)
![Alt text](img/image-38.png)


Luego, preparamos para cargar el nuevo esquema posterior a la migración en la base de datos de prueba por medio de `bundle exec rake db:test:prepare`.

![Alt text](img/image-19.png)


Vemos que al ejecutar nuestra app, esta ser verá de la siguiente manera.

![Alt text](img/image-20.png)


Sin embargo, necesitamos modificar nuestras vistas y nuestro modelo para que se pueda apreciar el nuevo campo para los directores. Para ello, empezaremos modificando nuestra vista `index`, y en ella agregaremos el nuevo campo para director.

![Alt text](img/image-23.png)


Cuando volvamos a ejecutar nuestra aplicación, se podrá apreciar que ahora tenemos una columna en blanco para los directores.

![Alt text](img/image-21.png)


Sin embargo, esta no es la única vista que se ha de modificar, queda pendiente modificar la vista `new`, `edit` y `show`. Estas quedarán de la siguiente manera, respectivamente.

![Alt text](img/image-39.png)
![Alt text](img/image-40.png)
![Alt text](img/image-41.png)


Podremos apreciar estos cambiar al correr nuevamente nuestra aplicación. Se muestran los cambios en el orden respectivo de las modificaciones.

![Alt text](img/image-42.png)
![Alt text](img/image-43.png)
![Alt text](img/image-44.png)


Respecto a nuestro modelo, para lograr que este nuevo campo "se note", haremos uso de `validates :director, presence: true, allow_nil: true`; lo cual nos sirve para validar que nuestro campo `director` sea de presencia no vacía, pero que, a la vez, pueda aceptar valores nulos.

![Alt text](img/image-49.png)


Continuando, ahora ejecutaremos `cucumber` para poder visualizar los pasos fallidos de los escenarios. Dichas definiciones podremos encontrarlas en `features/movies_by_director.feature`.

![Alt text](img/image-46.png)


Dado lo implementado previamente, respecto a director, se espera que los pasos respecto a la creación de la tabla con la columna director puedan ser creadas. Esto debido a que ya hemos implementado nuestra base de datos con la nueva columna director.


![Alt text](img/image-47.png)
![Alt text](img/image-26.png)
![Alt text](img/image-25.png)


Estos escenarios son aprobados porque ya se encuentra implementado director en nuestra base de datos, y dichos escenarios muestran que si me dirijo a movies, voy a ser capaz de encontrar a los directores correspondientes.


Ahora veremos que los pasos background ahora pasan, pero el primer paso de cada escenario falla porque no hemos proporcionado las páginas para los *when I visit the edit page* o similares. Por ejemplo, para *the edit page for "Aliens"*.

![Alt text](img/image-27.png)


Dado la prueba de cucumber, vemos que tenemos que dirigirnos a `features/support/paths.rb`, que es de donde se está generando el error. Agregaremos los siguientes mapeos de `edit` y `details` que son dados por las pruebas de cucumber:

![Alt text](img/image-48.png)
![Alt text](img/image-29.png)


Luego, respecto a las modificaciones que se tendrán que realizar en el controlador tenemos el siguiente método al cual agregaremos el campo de director:

![Alt text](img/image-30.png)


De no realizar este cambio, las acciones de `create` y `update` no funcinarían correctamente dado que se debería de manejar el campo director.

Una vez implementado lo de las vistas, el controlador y el `paths.rb`, tendremos el siguiente resultado para nuestras pruebas:

![Alt text](img/image-50.png)



## Utiliza pruebas de aceptación para aprobar nuevos escenarios

Se nos ha proporcionado tres escenarios de Cucumber, en `feateures/movies_by_director.feature` para impulsar la creación de 2 caminos felices y un camino triste.

Para nuestro primer escenario, agregar información del director a una película existente. Ya hemos implementado lo necesario en cuanto a vistas, controlador y `paths.rb`, no osbtante, nos falta definir un paso, como se menciona en el mensaje de Cucumber, para ello, en `web_steps.rb` incluiremos lo siguiente, para verificar si coincide el nombre del director con la película dada.

![Alt text](img/image-51.png)

Luego volviendo a correr las pruebas:

![Alt text](img/image-52.png)


Para el segundo escenario, primero, deberemos incluir la vista hacia "the Similar Movies Page" a la que llegamos al hacer click en "Find Movies With Same Director" en la página de detalles (vista `show`). De manera temporal, he hecho que se referencia hacia `edit`, pues, este ya está implementado.

![Alt text](img/image-53.png)
![Alt text](img/image-54.png)


Seguidamente, agregaremos la ruta para `show_by_director` en `config/routes.rb`:

![Alt text](img/image-55.png)


Luego, creamos una nueva acción `show_by_director` en nuestro controlador `controllers/movies_controller.rb`.

![Alt text](img/image-56.png)


Seguidamente, como habíamos visto en nuestro modelo, había un método pendiente `others_by_same_director` el cual devuelve películas con el mismo director, excluyendo a la película actual.

![Alt text](img/image-57.png)

Finalmente, ya podemos quitar de nuestra vista `show` el que redireccionaba a `edit` temporalmente, y la cambiaremos por `show_by_director_movie_path`.

![Alt text](img/image-58.png)


No obstante, aún faltaría definir el paso que se muestra de nuestra prueba de Cucumber, y agregaremos lo siguiente en `paths.rb`.

![Alt text](img/image-62.png)


Sin embargo, surge un error
![Alt text](img/image-61.png)



## Cobertura de código

Para este apartado de utilzará SimpleCov para la medición de cobertura de pruebas, para nuestro caso, volveremos a ejecutar las pruebas de cucumnber, y SimpleCov nos dará un informe en `coverage/`.

![Alt text](img/image-35.png)
![Alt text](img/image-36.png)


Cuyo informe obtenido será:
![Alt text](img/image-63.png)


Podemos notar que aún será necesario realizar pruebas específicamente en el archivo `movies_controller.rb`.
