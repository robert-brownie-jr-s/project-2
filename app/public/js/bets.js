$(document).ready(function () {
    const $tOne = $(".team-1");
    const $tTwo = $(".team-2");
    var bid = $("#enter-bid").val();
    var bidArr = [];

    // $(document).on($tOne, "#author-form", handleAuthorFormSubmit);
    $(".team-1").click(function () {
        document.location.reload()
        bidArr.push(bid)
        console.log(bidArr)
    })

    $tTwo.click(function () {
        bidArr.push(bid)
        console.log(bidArr)
    })

    app.post('/stack',function(req,res){
        var tmp = req.body.stack0;
        var tmp1 = req.body.stack1;
   
        console.log(tmp)  // stackoverflow0
        console.log(tmp1)  // stackoverflow1
   });
});
