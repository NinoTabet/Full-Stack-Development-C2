/*

    Tasks:

    Copy and run the provided index.js file.

    create a component called Parent.js
    create another component called Child.js

    reference Parent.js inside of your app.js
    reference Child.js in your Parent.js

    Parent.js should have a button. When this button is clicked, a GET request should be made to the /search endpoint
        This get request should have a single parameter: 'number=5'
        Parent.js will collect index [0] from the returned array and save that into a useState object
        This useState object should be passed to Child.js as a prop

    Child.js should have a button. When this button is clicked, a POST request using the name found in the object in the prop 
        from Parent.js should be made to the /create end point.

    Once the POST request is sent successfully, display the contents of the prop in the Child.js in 4 p tags. 
        (you will need to use useState objects) 

        if (response.ok){} is used to check if the request was sent successfully (200 response)

*/