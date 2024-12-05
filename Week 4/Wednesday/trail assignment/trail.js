const div = document.getElementById('trail');

div.addEventListener('mousemove', function (event) {
    // Create trail div element
    const trail = document.createElement('div');

    // css styling for my trail
    trail.style.position = 'fixed';
    trail.style.left = `${event.clientX}px`;
    trail.style.top = `${event.clientY}px`;
    trail.style.width = '10px';
    trail.style.height = '10px';
    trail.style.backgroundColor = 'red';
    trail.style.borderRadius = '50%';
    trail.style.pointerEvents = 'none';

    // adds trail dot to my div
    div.append(trail);

    // sets a timer to remove this trail element after 3 seconds
    setTimeout(() => {
        if (div) {
            div.removeChild(trail);
        }
    }, 3000); // 3000ms => 3 seconds
});
