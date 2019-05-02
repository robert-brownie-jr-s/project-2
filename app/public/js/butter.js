$(document).ready(function () {
    var usernameInput = $("#usernameIn");
    var teamInput = $("#teamInput");
    var amountInput = $("#amountIn")
    var betterForm = $("#butter");

    $(betterForm).on("submit", function handleFormSubmit(event) {
        event.preventDefault();
        // Wont submit the bid if we are missing a body or a title
        if (!usernameInput.val().trim() || !teamInput.val().trim() || !amountInput.val().trim()) {
            return;
        }
        // Constructing a newBid object to hand to the database
        var newBid = {
            username: usernameInput.val().trim(),
            team: teamInput.val().trim(),
            betAmount: amountInput.val()
        };

        console.log(newBid);

        if (newBid) {
            submitBid(newBid);
        }
    });

    function submitBid(Bid) {
        $.post("/api/showbets", Bid, function () {
            window.location.href = "/showbets";
        });
    }
});