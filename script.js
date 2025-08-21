// script.js (caso queira adicionar algum comportamento extra com JS)
window.addEventListener('scroll', function() {
  let offset = window.pageYOffset;
  // Para adicionar um movimento mais sutil do fundo
  document.querySelectorAll('.parallax').forEach(function(parallax) {
    parallax.style.backgroundPositionY = (offset * 0.5) + "px";
  });
});
