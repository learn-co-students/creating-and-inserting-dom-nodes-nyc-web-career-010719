//this file is optional
//you can use this to paste in js code and have it run when index.html is loaded

//create an element
var element = document.createElement('div');

//give it some properties
element.innerHTML = 'Hello, DOM!';
element.style.backgroundColor = '#f9f9f9';

//append it to the document's body
document.body.appendChild(element);

//center interval
element.style.textAlign = 'center';

//give the element some elements of its own
var ul = document.createElement('ul');

for (let i = 0; i < 3; i++) {
  let li = document.createElement('li');
  li.innerHTML = (i + 1).toString();
  ul.appendChild(li);
}

element.appendChild(ul);

//align them to the left
ul.style.textAlign = 'left';

//remove 2nd li
ul.removeChild(ul.querySelector('li:nth-child(2)'));

//remove list altogether
ul.remove();
