# Parte 3

## Pregunta 1

**Crea varias funciones que te permitirán interactuar con las cookies de la página, incluida la lectura de un valor de cookie por nombre, la creación de una nueva cookie usando un nombre y su configuración para una cantidad determinada de días, y la eliminación de una cookie.**


Configuraremos este en un archivo html temporal:
![Alt text](image-2.png)


Haremos uso del código proporcionado mediante el botón que hemos implementado, abriremos nuestro archivo `cookie.html` en el navegador y abriremos la consola. Podemos apreciar como al dar el botón, las operaciones funcionan tal como se ha espearado.

![Alt text](image-3.png)


## Pregunta 2

**Este ejercicio es un ejemplo de una estructura de formulario típica en la que se verifican los valores ingresados en el formulario y se validan antes de enviar el contenido. Se devuelve una respuesta alusuario si los valores no cumplen con los criterios de validación en el código. Utiliza el siguiente HTML y CSS como plantilla inicial:**

Sea nuestro archivod dado:

![Alt text](image-4.png)
![Alt text](image-16.png)


Crearemos nuestro archivo `script.js` en donde iremos implementando lo siguiente:


1. Usando JavaScript, selecciona todos los elementos de la página y configúralos como objetos JavaScript para que sean más fáciles de seleccionar dentro del código. Selecciona también todos los elementos de la página que tengan la clase error como objeto.

![Alt text](image-8.png)

2. Agrega un detector de eventos para enviar y capturar el clic, evitando la acción del formulario predeterminado.

![Alt text](image-9.png)


3. Recorre todos los elementos de la página que tienen la clase error y agrega la clase ocultar, lo que los eliminará de la vista ya que se trata de un envío nuevo.

![Alt text](image-10.png)


4. Utilizando la expresión regular para correos electrónicos válidos, prueba los resultados con el valor de entrada del campo de correo electrónico.

![Alt text](image-11.png)


5. Crea una función para responder a errores, que elimine la clase oculta del elemento junto al elemento que desencadenó el evento.

![Alt text](image-12.png)


7. Verifica el valor de entrada del campo de contraseña para asegurarye de que solo se utilicen letras y números. También verifica la longitud para asegurarse de que tenga entre 3 y 8 caracteres. Si alguno de ellos es falso, agrega el error con la función error y crea un mensaje para el usuario. Establece el error booleano en verdadero.

![Alt text](image-13.png)


8. Agrega un objeto para realizar un seguimiento de la creación de datos del formulario y agrega valores al objeto recorriendo todas las entradas, configurando el nombre de la propiedad para que sea el mismo que el nombre de la entrada y el valor igual que el valor de la entrada.

![Alt text](image-14.png)


9. Antes de finalizar la función de validación, verifica si todavía hay un error y, si no es así, envía el
objeto de formulario.

![Alt text](image-15.png)


Luego de la implementación completa de script.js, pasaremos a probarlo:

![Alt text](image-17.png)

![Alt text](image-18.png)

![Alt text](image-19.png)

