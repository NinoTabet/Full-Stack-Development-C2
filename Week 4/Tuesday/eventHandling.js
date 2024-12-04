// Mouse event listener

    // on click
    document.getElementById('MyButton').addEventListener('click',function(){
        alert('Button Clicked');
    });

    // can use this.bla.bla or obj.bla.bla

    document.getElementById('MyDiv').addEventListener('dblclick',function(){
        alert('Button Clicked');
    });

    document.getElementById('MyDiv').addEventListener('mousedown',function(){
        alert('Button Clicked');
    });

    document.getElementById('MyDiv').addEventListener('mouseup',function(){
        alert('Button Clicked');
    });

    document.getElementById('MyDiv').addEventListener('mousemove',function(event){
        console.log(`Mouse moved to (${event.clientX}, ${event.clientY})`);
    });

    document.getElementById('MyDiv').addEventListener('mouseout',function(){
        alert('Button Clicked');
    });

    document.getElementById('MyDiv').addEventListener('mouseleave',function(){
        alert('Button Clicked');
    });

    document.getElementById('MyDiv').addEventListener('mouseOver',function(event){
        console.log(`Mouse moved to (${event.clientX}, ${event.clientY})`);
    });

    document.getElementById('MyDiv').addEventListener('mouseenter',function(){
        alert('Button Clicked');
    });


// Keyboard even listener

document.addEventListener('keydown', function(event){
    console.log(`Key pressed: ${event.key}`);
})

document.addEventListener('keyup', function(event){
    console.log(`Key pressed: ${event.key}`);
})

// deprecated. DO NOT USE THIS
document.addEventListener('keypress', function(event){
    console.log(`Key pressed: ${event.key}`);
})