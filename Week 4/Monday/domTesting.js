const body = document.body;

// let div = document.querySelector('.btn-success');

// div.setAttribute('id','yes');

// console.log(div.getAttribute('id'));

let div = document.createElement('div');

div.style.color = 'red';

div.textContent = 'hello world'

body.append(div);