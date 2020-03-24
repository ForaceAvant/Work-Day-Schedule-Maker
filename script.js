var datetime = null,
        date = null;

var update = function () {
    date = moment(new Date())
    datetime.html(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));
};

$(document).ready(function(){
    datetime = $('#time-display')
    update();
    setInterval(update, 1000);

    if(moment().hour == 9){
        $("#row-9").attr("background-color", "green")
    }

    if(moment().hour == 10){
        $("#row-9").attr("background-color", "grey");
        $("#row-10").attr("background-color", "green");
    }
    if(moment().hour == 11){
        $("#row-10").attr("background-color", "grey");
        $("#row-11").attr("background-color", "green");
    }
    if(moment().hour == 12){
        $("#row-11").attr("background-color", "grey");
        $("#row-12").attr("background-color", "green");
    }
    if(moment().hour == 13){
        $("#row-12").attr("background-color", "grey");
        $("#row-1").attr("background-color", "green");
    }
    if(moment().hour == 14){
        $("#row-1").attr("background-color", "grey");
        $("#row-2").attr("background-color", "green");
    }
    if(moment().hour == 15){
        $("#row-2").attr("background-color", "grey");
        $("#row-3").attr("background-color", "green");
    }
    if(moment().hour == 16){
        $("#row-3").attr("background-color", "grey");
        $("#row-4").attr("background-color", "green");
    }
    if(moment().hour == 17){
        $("#row-4").attr("background-color", "grey");
        $("#row-5").attr("background-color", "green");
    }
    if(moment().hour == 18){
        $("#row-5").attr("background-color", "grey");
        
    }

});


$("#button-9").on("click", function(){
    $("#9-content").attr("placeholder",  $("#9-content").val()); 
    $("#9-content").val("");
});

$("#button-10").on("click", function(){
    $("#10-content").attr("placeholder",  $("#10-content").val()); 
    $("#10-content").val("");
});

$("#button-11").on("click", function(){
    $("#11-content").attr("placeholder",  $("#11-content").val()); 
    $("#11-content").val("");
});

$("#button-12").on("click", function(){
    $("#12-content").attr("placeholder",  $("#12-content").val()); 
    $("#12-content").val("");
});

$("#button-1").on("click", function(){
    $("#1-content").attr("placeholder",  $("#1-content").val()); 
    $("#1-content").val("");
});

$("#button-2").on("click", function(){
    $("#2-content").attr("placeholder",  $("#2-content").val()); 
    $("#2-content").val("");
});

$("#button-3").on("click", function(){
    $("#3-content").attr("placeholder",  $("#3-content").val()); 
    $("#3-content").val("");
});

$("#button-4").on("click", function(){
    $("#4-content").attr("placeholder",  $("#4-content").val()); 
    $("#4-content").val("");
});

$("#button-5").on("click", function(){
    $("#5-content").attr("placeholder",  $("#5-content").val()); 
    $("#5-content").val("");
});







