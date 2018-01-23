/***Interactividad con jQuery de index.html***/

$(document).ready(function() {
  // Tiempo para cambiar localización 4.5s
  setTimeout(function() {
    // Direccionamiento a view: "home"
    window.location.href = 'views/home.html';}, 4500);
});
