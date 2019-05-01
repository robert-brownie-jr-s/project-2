// Get references to page elements
var $teamOne = $("#team-1");

// The API object contains methods for each kind of request we'll make
var API = {
    saveBet: function (bet) {
        return $.ajax({
            headers: {
                "Content-Type": "application/json"
            },
            type: "Get",
            url: "api/examples",
            data: JSON.stringify(bet)
        });
    }
};

// Add event listeners to the submit and delete buttons
$teamOne.on("click", saveBet);

