
 // In this code below we create the Front-end Javascript which "POSTS" our form data to our express server.
    // In essence, when the user hits submit, jQuery grabs all of the fields then sends a post request to our api
    // Our api recognizes the route (/api/tables)... and then runs the associated code (found in api-routes.js).
    // In this case the associated code "saves" the data to the table-data.js file or waitinglist-data.js file

//     $("#submit").on("click", function(){
//         function confirmForm(){
//             var valid = true;
//             $('.form-control').each(function(){
//                 if ($(this.val() === '')
//                     valid = false;
//             });

//             if($(this).val() === "")
//                 valid = false
//         })
//             return valid;
//         }

//         if (confirmForm() == true){
//             var playerInfo = {
//                 playerName: $('#player_name').val().trim(),
//                 playerPic: $('#player_pic').val().trim(),
//                 playerScores: [$("#q1").val(), $("#q2").val(), $("#q3").val(), $("#q4").val(), $("#q5").val(), $("#q6").val(), $("#q7").val(), $("#q8").val(), $("#q9").val(), $("#q10").val()]                
//             };    
//         var currentURL = window.location.origin;

//         $.post(currentURL + "/api/friends", playerInfo, function(data){
//             $("#matchName").text(data.name); //matchName is referring to an html element
//             $("#matchPic").attr("src", data.photo);
//             $("#resultsModal").modal('toggle');
//         });
//     }
//     else{
//         alert("Hold on there, you have to make sure to fill out EVERYTHING! You sure you did that? Try again.");
//     }

// return false;
// });

//function to run through results and compare differences

var player1 = ["0", "0", "0", "0", "0"];
var player2 = ["0", "0", "0", "0", "0"];
var compare = 0;

for (var i = 0; i < compare.length; i++){
    compare += Math.abs(player1[i] - player2[i]);
}


var matchArray = [
    {
        "name": "Joe",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/9/9a/Ducreux1.jpg",
        "scores":[
             5,
             1,
             4,
             4,
             5,
             1,
             2,
             5,
             4,
             1
           ]
    }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = matchArray;