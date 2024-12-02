const body = document.body;

body.append('hello, world!'); // can append text and/or node
body.appendChild(); // cannot append raw text directly, REQUIRES A NODE OBJECT

let div = document.createElement('div');

div.innerText = 'Hello World!'
div.textContent = 'Hello World!'

div.innerHTML = '<p>Hello World<p>' // be very careful when you use this.

document.getElementById(); // collects element by id name
document.getElementsByClassName(); // collects all tags with a certain css class
document.querySelector(); // collects the first element by css selector
document.querySelectorAll(); // collects ALL elements by css selector

div.remove(); // removes div
div.removeChild('span'); // removes specific child from div

div.getAttribute('id'); // will collect attribute data

div.setAttribute('id','yes');

div.classList.add('new-class');

div.style.color = 'red';

div.style.backgroundColor = 'green';