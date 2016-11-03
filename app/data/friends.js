
 // In this code below we create the Front-end Javascript which "POSTS" our form data to our express server.
    // In essence, when the user hits submit, jQuery grabs all of the fields then sends a post request to our api
    // Our api recognizes the route (/api/tables)... and then runs the associated code (found in api-routes.js).
    // In this case the associated code "saves" the data to the table-data.js file or waitinglist-data.js file




var matchArray = [
    {
        name: "Joe",
        photo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Ducreux1.jpg",
        scores:[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
    },
    {
        name: "Tom",
        photo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Ducreux1.jpg",
        scores:[4, 3, 1, 3, 3, 1, 3, 1, 3, 2]
    }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = matchArray;