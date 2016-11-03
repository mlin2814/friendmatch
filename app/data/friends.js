 var config = {
    '.chosen-select': {},
    '.chosen-select-deselect': {allow_single_deselect: true},
    '.chosen-select-no-single': {disable_search_threshold: 10},
    '.chosen-select-no-results': {no_results_text: 'Sorry, nothing here'},
    '.chosen-select-width': {width: "95%"}
 }
 for (var selector in config){
    $(selector).chosen(config[selector]);
 }


 // In this code below we create the Front-end Javascript which "POSTS" our form data to our express server.
    // In essence, when the user hits submit, jQuery grabs all of the fields then sends a post request to our api
    // Our api recognizes the route (/api/tables)... and then runs the associated code (found in api-routes.js).
    // In this case the associated code "saves" the data to the table-data.js file or waitinglist-data.js file

    $("#submit").on("click", function(){
        function confirmForm(){
            var valid = true;
            $('.form-control').each(function(){
                if ($(this.val() === '')
                    valid = false;
            });

            if($(this).val() === "")
                valid = false
        })
            return valid;
        }

        if (confirmForm() == true){
            var playerInfo = {
                playerName: $('#player_name').val().trim(),
                playerPic: $('#player_pic').val().trim(),
                playerScores: [$("#q1").val(), $("#q2").val(), $("#q3").val(), $("#q4").val(), $("#q5").val(), $("#q6").val(), $("#q7").val(), $("#q8").val(), $("#q9").val(), $("#q10").val()]                
            };    
        var currentURL = window.location.origin;

        $.post(currentURL + "/api/friends", playerInfo, function(data){
            $("#matchName").text(data.name); //matchName is referring to an html element
            $("#matchPic").attr("src", data.photo);
            $("#resultsModal").modal('toggle');
        });
    }
    else{
        alert("Hold on there, you have to make sure to fill out EVERYTHING! You sure you did that? Try again.");
    }

return false;
});

//function to run through results and compare differences

var player1 = ["0", "0", "0", "0", "0"];
var player2 = ["0", "0", "0", "0", "0"];
var compare = 0;

for (var i = 0; i < compare.length; i++){
    compare += Math.abs(player1[i] - player2[i]);
}

function(){
    if ((player1 - player2) == -i)
        Math.abs(x);
}
else{
    console.log(compare);
}