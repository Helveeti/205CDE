//console.log('page loaded');

console.log(document);

var email = function() {
	console.log('updating email');
	var email = document.querySelector('#userForm input[type="email"]').value;
	document.querySelector('#summary p').innerHTML = email;
};

var update = function() {
	var name = document.querySelector('#userform input[type="text"]');
	document.querySelector('#summary h1').innerHTML = name;
	var password = document.querySelector('#userForm input[type="password"]');
	document.querySelector('#summary p').innerHTML = password;
};

document.querySelector('#userForm input[type="text"]').onkeypress = update;
document.querySelector('#userForm input[type="password"]').onkeypress = update;
document.querySelector('#userForm input[type="email"]').onkeypress = email;

function save() {
	console.log('save');
	// get a DOM object representing a form field.
	var name = document.querySelector('#userForm input[type="text"]');
	console.log(name);
	document.querySelector('#summary h1').innerHTML = name.value;
	var data = document.querySelectorAll('#userForm input');
	console.log(data);
	var paragraphs = document.querySelectorAll('#summary p');
	console.log('found '+paragraphs.length+' p tags');
	paragraphs[1].innerHTML = 'Hello World!';
}