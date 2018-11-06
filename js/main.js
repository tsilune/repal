var container = document.querySelector('.container');
var ripple = document.querySelector('.ripple');

// au clic sur le ripple, permuter la classe .visible sur le container
// l'enlever si elle est présente, l'ajouter sinon
container.addEventListener('click', function() {
	ripple.classList.toggle('active');
});




// e = Mouse click event.
var rect = e.target.getBoundingClientRect();
var x = e.clientX - rect.left; //x position within the element.
var y = e.clientY - rect.top; //y position within the element.