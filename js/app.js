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





















});
