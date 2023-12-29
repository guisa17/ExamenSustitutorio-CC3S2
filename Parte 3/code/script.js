document.addEventListener("DOMContentLoaded", function () {
    // Paso 1
    const form = document.getElementById('myform');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const userNameInput = document.getElementById('userName');

    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const userNameError = document.getElementById('userNameError');

    const submitButton = document.getElementById('submitButton');

    // Paso 2
    form.addEventListener('submit', function (event) {
      // Paso 3
      const errorElements = document.querySelectorAll('.error');
      errorElements.forEach(function (errorElement) {
        errorElement.classList.add('hide');
      });

      // Paso 4
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value)) {
        handleError(emailError, "Correo electrónico no válido");
        event.preventDefault();
      }

      // Paso 7
      const passwordRegex = /^[a-zA-Z0-9]{3,8}$/;
      if (!passwordRegex.test(passwordInput.value)) {
        handleError(passwordError, "Contraseña no válida (debe tener entre 3 y 8 caracteres alfanuméricos)");
        event.preventDefault();
      }

      // Paso 8
      const formData = {};
      const formInputs = form.querySelectorAll('input');
      formInputs.forEach(function (input) {
        formData[input.name] = input.value;
      });

      // Paso 9
      if (!emailError.classList.contains('hide') || !passwordError.classList.contains('hide')) {
        event.preventDefault();
      } else {
        console.log("Enviar datos:", formData);
      }
    });

    // Paso 5
    function handleError(errorElement, errorMessage) {
      errorElement.textContent = errorMessage;
      errorElement.classList.remove('hide');
    }
  });