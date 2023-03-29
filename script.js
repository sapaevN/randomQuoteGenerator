'use strict';


function generate(){
	let quotes = {
		'― Candace Bushnell': " “Maybe some women aren't meant to be tamed. Maybe they just need to run free until they find someone just as wild to run with them.”",
		'― Pierce Brown, Red Rising': "“Man cannot be freed by the same injustice that enslaved it.”",
		'― Deepak Chopra': "“Bury us, and mark our names above. Let us be free.”",
		'― Erik Pevernagie': "“When some claim demarcation and “regulation”, others fancy “deregulation”, preferring foxes guarding the henhouse or chicken yards with free chickens and free foxes. Friend or foe, hen or fox, anyone can have a go. (“This far”)”",
		'― Lauren DeStefano, Fever': "“But there’s no such thing as free. There are only different and more horrible ways to be enslaved.”",
	}
	let authors = Object.keys(quotes);
	let author = authors[Math.floor(Math.random()*authors.length)];
	let quote = quotes[author];
	document.querySelector('#quote').textContent = quote
	document.querySelector('#author').textContent = author
	
}

document.querySelector('button.btn').addEventListener('click',generate)
