


// Add event listeners to the submit and delete buttons


$(document).ready(function () {
    // Getting references to the name input and bid container, as well as the table body
    var nameInput = $("#bid-name");
    var bidList = $("tbody");
    var bidContainer = $(".bid-container");
    // Get references to page elements
    var $lonbid = $("teamLon");
    var $houbid = $("teamHou");
    var $atlbid = $("teamAtl");
    var $nyxlbid = $("teamNyxl");
    var $seoulbid = $("teamSeoul");
    var $vanbid = $("teamVan");
    var $labid = $("teamLA");
    var $cdbid = $("teamCD");
    // Adding event listeners to the form to create a new object, and the button to delete
    $lonbid.on("click", handleBidSubmit);
    $houbid.on("click", handleBidSubmit);
    $atlbid.on("click", handleBidSubmit);
    $nyxlbid.on("click", handleBidSubmit);
    $seoulbid.on("click", handleBidSubmit);
    $vanbid.on("click", handleBidSubmit);
    $labid.on("click", handleBidSubmit);
    $cdbid.on("click", handleBidSubmit);


    // Getting the initial list of bids
    getBids();

    // A function to handle what happens when the form is submitted to create a new bid
    function handleBidSubmit(event) {
        event.preventDefault();
        // Don't do anything if the name fields hasn't been filled out
        if (!nameInput.val().trim().trim()) {
            return;
        }
        // Calling the upsertBid function and passing in the value of the name input
        upsertBid({
            name: nameInput
                .val()
                .trim()
        });
    }

    // A function for creating an bid. Calls getBids upon completion
    function upsertBid(bidData) {
        $.post("/api/bidss", bidData)
            .then(getBids);
    }

    // Function for creating a new list row for bids
    function createBidRow(bidData) {
        console.log(bidData);
        var newTr = $("<tr>");
        newTr.data("bid", bidData);
        newTr.append("<td>" + bidData.name + "</td>");
        newTr.append("<td># of posts will display when we learn joins in the next activity!</td>");
        newTr.append("<td><a href='/blog?bid_id=" + bidData.id + "'>Go to Posts</a></td>");
        newTr.append("<td><a href='/cms?bid_id=" + bidData.id + "'>Create a Post</a></td>");

        return newTr;
    }

    // Function for retrieving bids and getting them ready to be rendered to the page
    function getBids() {
        $.get("/api/bids", function (data) {
            var rowsToAdd = [];
            for (var i = 0; i < data.length; i++) {
                rowsToAdd.push(createBidRow(data[i]));
            }
            renderbidList(rowsToAdd);
            nameInput.val("");
        });
    }

    // A function for rendering the list of bids to the page
    function renderBidList(rows) {
        bidList.children().not(":last").remove();
        bidContainer.children(".alert").remove();
        if (rows.length) {
            console.log(rows);
            bidList.prepend(rows);
        }
        else {
            renderEmpty();
        }
    }

    // Function for handling what to render when there are no bids
    function renderEmpty() {
        var alertDiv = $("<div>");
        alertDiv.addClass("alert alert-danger");
        alertDiv.text("You must create an bid before you can create a Post.");
        bidContainer.append(alertDiv);
    }

});






