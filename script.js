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
        $("#row-9").setAttribute("background-color", "green")
    }

    if(moment().hour == 10){
        $("#row-9").setAttribute("background-color", "grey");
        $("#row-10").setAttribute("background-color", "green");
    }
    if(moment().hour == 11){
        $("#row-10").setAttribute("background-color", "grey");
        $("#row-11").setAttribute("background-color", "green");
    }
    if(moment().hour == 12){
        $("#row-11").setAttribute("background-color", "grey");
        $("#row-12").setAttribute("background-color", "green");
    }
    if(moment().hour == 13){
        $("#row-12").setAttribute("background-color", "grey");
        $("#row-1").setAttribute("background-color", "green");
    }
    if(moment().hour == 14){
        $("#row-1").setAttribute("background-color", "grey");
        $("#row-2").setAttribute("background-color", "green");
    }
    if(moment().hour == 15){
        $("#row-2").setAttribute("background-color", "grey");
        $("#row-3").setAttribute("background-color", "green");
    }
    if(moment().hour == 16){
        $("#row-3").setAttribute("background-color", "grey");
        $("#row-4").setAttribute("background-color", "green");
    }
    if(moment().hour == 17){
        $("#row-4").setAttribute("background-color", "grey");
        $("#row-5").setAttribute("background-color", "green");
    }
    if(moment().hour == 18){
        $("#row-5").setAttribute("background-color", "grey");
        
    }

});










