$(document).ready(function() {

  /*Se guarad clase botón "next" en variable*/
  var nextButton = $('.nextJs');
  nextButton.on("click", function(event) {
    window.location.href = 'end.html';
  });

  /* Botón para regresar */
  var goBack = $('.go-back');
  goBack.on('click', function() {
    /*Direcciona a vista previa "sign" al evento click*/
    window.location.href = 'sign.html';
  });

});
