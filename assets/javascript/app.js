var win = 0; 
$("#correct").html(win);
var loss = 0;
$("#incorrect").html(loss)
var keys = ["cor", "cor", "cor", "cor", "cor"];
var checked = [];
var un = keys.length;
$("#unanswered").html(0);
console.log("number of sets: " + un);
var timeLeft = 20; 



$( "#start" ).on("click", function() {
$("#page1").css("display","none");
$("#page2").css("display","block");
console.log('start is workinig');

runTime ();

});


function runTime(){

var timerStart = setTimeout(countDown,1000);

    function countDown(){
    timeLeft--;
       if (timeLeft > 0){
          setTimeout(countDown,1000);
          $("#timer").html(timeLeft);
        }
       else {
        filterLogic ();
        $("#page1").css("display","none");
        $("#page2").css("display","none");
        $("#page3").css("display","block");
       }
    };

};



$("#done").on("click", function() {
$("#page1").css("display","none");
$("#page2").css("display","none");
$("#page3").css("display","block");
console.log('hi, done is workinig');

timeLeft = 0;

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
    // var valHolder = [];
    // var radios = $(":checked").val();
    // console.log(radios);
    // // valHolder.push(radios);
    // // console.log(valHolder);


     //  // radios.change(function(){
     //    var filtered = radios.filter(":checked");
     //     if (filtered.val() == "cor"){
     //        cor = cor + 1;
     //     }
     //     else {
     //        incor = incor + 1;
     //     }
     //     un = 3 - (cor + incor);
     //     console.log(cor, incor, un);
     // // });


