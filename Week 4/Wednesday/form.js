// Used to handle form submission and perform validation or other actions

document.getElementById("myForm").addEventListener('submit', function(event){
    event.preventDefault(); // Prevents the form from being submitted to the server
});

// Fired when form is reset
document.getElementById("myForm").addEventListener('reset', function(event){
});

// Fired when the value of an <input>, <textarea>, or <select> element changes
document.getElementById("name").addEventListener('input', function(event){
});

// Fired when a field is in focus
document.getElementById("name").addEventListener('focus', function(event){
});

// Fired when a field is in unfocused
document.getElementById("name").addEventListener('blur', function(event){
});

// Fired when a field is in unfocused
document.getElementById("name").addEventListener('blur', function(event){
});

// Fired when a form submission fails
document.getElementById("name").addEventListener('invalid', function(event){
});