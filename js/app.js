'use strict';

document.addEventListener('DOMContentLoaded', function() {
//zad 1
var forDropdown = document.querySelector('.for-dropdown');
console.log(forDropdown);

var menu = document.querySelector('.dropdown');
console.log(menu);

// function changeDisplayToBlock() {

//	menu.style.display = 'block';
//}

forDropdown.addEventListener('mouseover', function() {
menu.style.display = 'block';

});

forDropdown.addEventListener('mouseout', function () {
menu.style.display = 'none';
	
});

//zad 2

var buttons = document.querySelectorAll('.read-more');



     // Poniższa linijka sprawdza, czy `style.display` jest ustawiony na `none` LUB jest pusty
     // Dwie kreski obok siebie, czyli || oznaczają LUB, więc aby wykonał się kod podany w nawiasie klamrowym
     // warunek po jednej albo po drugiej stronie kresek musi być spełniony

function showHide() {

	var textArea = this.previousElementSibling;
	
	if (textArea.style.display === 'none' || textArea.style.display === '') {
		textArea.style.display = 'block';
		this.innerHTML = 'MNIEJ <span class=glyphion-chevron-up></span>' ;
	} else {
		textArea.style.display = 'none' ;
		this.innerHTML = 'WIĘCEJ <span class="glyphion-chevron-down"></span>' ;
	}
}

for (var i=0; i < buttons.length; i++) {
	buttons[i].addEventListener('click', showHide);
	
}


















});
