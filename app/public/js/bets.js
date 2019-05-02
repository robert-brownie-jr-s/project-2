$(document).ready(function () {
    $bidContainer = $(".bid-container");
    $newBidcard = $(".bid-card")

    //storing bids in an array
    var bids = [];

    $(document).on('submit', ".submit-bid", insertBid)
    //retrieving all of the bids
    getBids();


    function initializeRows() {
        $bidContainer.empty();
        var rowsToAdd = [];

        for (var i = 0; i < bids.length; i++) {
            rowsToAdd.push(createNewRow(bids[i]));
        }
        $bidContainer.prepend(rowsToAdd[i])
    }

    function getBids() {
        $.get("/api/showbets", function (data) {
            bids = data;
            initializeRows();
        });
    }

    // creating new rows for each of the users bids
    function createNewRow(bids) {
        var $newBidcard = $(
            [
                '<div class="card" style="width: 18rem;">',
                '<div class="card-body">',
                '<h5 class="card-title">User Bid</h5>',
                '<p class="card-text">', bids.username, '</p>',
                '<p class="card-text">', bids.team, '</p>',
                '<p class="card-text">', bids.amount, '</p>',
                '</div>',
                '</div>',
                '</div>'
            ].join("")
        );
        $newBidcard.data('bids', bids);
    }
    return $newBidcard;

    function insertBid(event, req) {
        event.preventDefault();
        var bid = {
          text: $newBidCard.val().trim(),
        };
    
        $.post("/api/showbets", bid, getBids);
        $newBidCard.val("");
      }
})