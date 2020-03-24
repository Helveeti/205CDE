
var request = new XMLHttpRequest();
request.open('GET', 'data/books.json', false);
request.send(null);
var data = JSON.parse(request.responseText);
console.log(data);

var books = data.books;

var list = document.createElement("table");

for (var i=0; i < books.length; i++) {
	console.log(books[i].title);
	var item = document.createElement('td');
	item.innerHTML = books[i].title + " " + books[i].year;
	list.appendChild(item);
}

document.body.appendChild(list);

/*window.onload = function(){
	var td = document.getElementsByClassName('td');
	if(td.addEventListener){
		td.addEventListener("click", handleClick(), false);
	}
}

function handleClick(e) {
	var evt = e || window.event;
	var target;
	if (evt.target) {
		target = evt.target;
	} else {
		target = evt.srcElement;
	}
	alert("You clicked on " + target.id);
}*/
