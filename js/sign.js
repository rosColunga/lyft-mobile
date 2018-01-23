/* Al cargar la página iniciaremos... */
$(document).ready(function() {

/* Plug-in "select" de banderas con iniciación de lada:  https://intl-tel-input.com/ */
$('#phone').intlTelInput();
});


/* Botón para regresar */
var goBack = $('.go-back');
goBack.on('click', function() {
  /*Direcciona a vista previa "home" al evento click*/
  window.location.href = 'home.html';
});

/*Se guarad clase botón "next" en variable*/
var nextButton = $('.nextJs');

/* Validación, habilitación de nextButton*/
  $("#phone").keypress(function () {
    //console.log((this.value).length);
    if ((this.value).length === 9) {
      nextButton.removeClass('disabled');
    } else if ((this.value).length !== 10) {
      nextButton.addClass('disabled');
    }
  });

/*Generador de código aleatorio*/
function getRandomCode() {
  // Math.floor(( Math.random () * (max - min + 1)) + min))  ***https://teamtreehouse.com/community/mathfloor-mathrandom-max-min-1-min-explanation ***
  return Math.floor((Math.random() * (999 - 100 + 1) + 100));
}

/*Conservar valor de código aleatorio*/
var randomCode ;
function keepCode() {
  randomCode = getRandomCode();
  // con localStorage los datos persisten entre ventanas/tabs con el mismo origen. ***https://developer.mozilla.org/es/docs/Web/API/Window/localStorage***
  localStorage.saving = randomCode;
  console.log(randomCode);
}

/*Salida de código aleatorio en un alert
al evento "click" en botón "next"*/
nextButton.on("click", function(event) {
  event.preventDefault();
  keepCode();
  alert('Tu código es: ' + 'LAB-' + randomCode);
  //Direcciona a próxima vista "Sign in"
  window.location.href = 'signin.html';
});
