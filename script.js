var datetime = null,
        date = null;

var update = function () {
    date = moment(new Date())
    datetime.html(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));
    var nowCurrent = date.format("H");
    console.log(moment().hour());
    
    if(moment().hour() == 9){
        $("#row-9").attr("background-color", "green")
    }

    if(moment().hour() == 10){
        $("#row-9").attr("background-color", "grey");
        $("#row-10").attr("background-color", "green");
        
    }
    if(moment().hour() == 11){
        $("#row-10").attr("background-color", "grey");
        $("#row-11").attr("background-color", "green");
    }
    if(moment().hour() == 12){
        $("#row-11").attr("background-color", "grey");
        $("#row-12").attr("background-color", "green");
    }
    if(moment().hour() == 13){
        $("#row-12").attr("background-color", "grey");
        $("#row-1").attr("background-color", "green");
    }

    if(moment().hour() == 14){
        $("#row-1").attr("background-color", "grey");
        $("#row-2").attr("background-color", "green");
    }

    if(moment().hour() >= 15){
        $("#row-2").attr("style", "background-color : grey");
        $("#row-3").attr("style", "background-color : green");
    }
    if(moment().hour() == 16){
        $("#row-3").attr("background-color", "grey");
        $("#row-4").attr("background-color", "green");
    }
    if(moment().hour() == 17){
        $("#row-4").attr("background-color", "grey");
        $("#row-5").attr("background-color", "green");
    }
    if(moment().hour() == 18){
        $("#row-5").attr("background-color", "grey");
        
    }
};

$(document).ready(function(){
    datetime = $('#time-display')
    update();
    setInterval(update, 1000);


});


$(".save").on("click", function(){
    var hourEvent = $(this).siblings(".event").val();
    var saveHour = $(this).parent().attr("id");

    localStorage.setItem(saveHour, hourEvent);
});








