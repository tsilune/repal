var container = document.querySelector('.container');
var ripple = document.querySelector('.ripple');

// au clic sur le ripple, permuter la classe .visible sur le container
// l'enlever si elle est présente, l'ajouter sinon
container.addEventListener('click', function(e) {
	ripple.classList.toggle('active');

	var rect = e.target.getBoundingClientRect();
	var x = e.clientX - rect.left; //x position within the element.
	var y = e.clientY - rect.top;

	ripple.style.top = y + 'px';
	ripple.style.left = x + 'px';

	setTimeout(function() {
		ripple.classList.toggle('active');
	}, 500);
});




// e = Mouse click event.
// var rect = e.target.getBoundingClientRect();
// var x = e.clientX - rect.left; //x position within the element.
// var y = e.clientY - rect.top; //y position within the element.