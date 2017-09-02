var win = 0; 
$("#correct").html(win);
var loss = 0;
$("#incorrect").html(loss)
var keys = ["cor", "cor", "cor", "cor", "cor"];
var checked = [];
var un = keys.length;
$("#unanswered").html(0);
console.log("number of sets: " + un);
var timerStart;
var timeLeft = 30; 



$( "#start" ).on("click", function() {
    $("#page1").css("display","none");
    $("#page2").css("display","block");
    console.log('start is workinig');

    runTime ();

});


function runTime(){

    timerStart = setInterval(countDown,1000);
 
    function countDown() {
        if(timeLeft == 0) {
            filterLogic ();
            $("#page1").css("display","none");
            $("#page2").css("display","none");
            $("#page3").css("display","block");
            clearInterval(timerStart);
        }
        timeLeft--;
        $("#timer").html(timeLeft);
    };

};

$("#done").on("click", function() {
    $("#page1").css("display","none");
    $("#page2").css("display","none");
    $("#page3").css("display","block");
    console.log('done is workinig');

    // timeLeft = 0;
    clearInterval(timerStart);
    filterLogic();

});

function filterLogic(){

    var keyPush = $("input[name=one]:checked").val();
     checked.push(keyPush);

     var keyPush = $("input[name=two]:checked").val();
     checked.push(keyPush);

     var keyPush = $("input[name=three]:checked").val();
     checked.push(keyPush);

     var keyPush = $("input[name=four]:checked").val();
     checked.push(keyPush);

     var keyPush = $("input[name=five]:checked").val();
     checked.push(keyPush);

     console.log(checked);

    for( i = 0; i < keys.length; i++) { 

        if (checked[i] === "cor") {
        win = win + 1;
        $("#correct").html(win);
        console.log("Correct: " + win);
        
        }

        if (checked[i] === "not") {
        loss = loss + 1;
        $("#incorrect").html(loss);
        console.log("Incorrect: " + loss);
        }
    }
    var unanswered = un - (win + loss);
    $("#unanswered").html(unanswered);
    console.log("Unanswered: " +  unanswered);

};
    