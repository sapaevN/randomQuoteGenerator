'use strict';
 
const pencil = document.querySelector('#pencil');
const userInput = document.querySelector('.userInput');
const allItems = document.querySelector('.allItems');


pencil.addEventListener('click', () =>{
	allItems.innerHTML = ""

});

userInput.addEventListener('keydown', (event) =>{

	if(event.key == "Enter"){
		addItem();
	}
});

function addItem(){
	const h2 = document.createElement('h2');
	h2.innerHTML = `- ${userInput.value}` 
	h2.addEventListener('click',() =>{
		h2.classList.toggle('toggle')
	});

	allItems.insertAdjacentElement('beforeend',h2);

	userInput.value = ''
}