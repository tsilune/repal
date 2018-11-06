var container = document.querySelector('.container');
var ripple = document.querySelector('.ripple');

// au clic sur le ripple, permuter la classe .visible sur le container
// l'enlever si elle est présente, l'ajouter sinon
ripple.addEventListener('click', function() {
	container.classList.toggle('visible');
});

menu.addEventListener('wheel', function(event) {