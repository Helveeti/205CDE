
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

window.onload = function(){

	for(var tr of list){
		tr.cells[0].addEventListener("click", function(e){
			titleToSet.innerHTML = e.path[0].innerText;
		}, false);
	}

}
