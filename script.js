var datetime = null,
        date = null;

var update = function () {
    date = moment(new Date())
    datetime.html(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));
    
    var currentTime = moment().hour();


    $(".time-row").each(function(){
        var rowsTime = parseInt($(this).attr("id").split("-")[0]);

        if(rowsTime < currentTime){
            $(this).attr("style", "background-color : grey");
        }

        else if(rowsTime == currentTime){
            $(this).attr("style", "background-color : white");
        }

        else{
            $(this).attr("style", "background-color : green");
        }
    })
};

$(document).ready(function(){
    datetime = $('#time-display')
    update();
    setInterval(update, 10000);


});


$(".save").on("click", function(){
    var hourEvent = $(this).parent().parent().children(".rowData").children(".event").val();
    var saveHour = $(this).parent().parent().attr("id");

    console.log($(this).parent().parent().children(".rowData").children(".event").val());
    console.log(saveHour);

    localStorage.setItem(saveHour, hourEvent);
});

$("#9-row .event").val(localStorage.getItem("9-row"));
$("#10-row .event").val(localStorage.getItem("10-row"));
$("#11-row .event").val(localStorage.getItem("11-row"));
$("#12-row .event").val(localStorage.getItem("12-row"));
$("#13-row .event").val(localStorage.getItem("13-row"));
$("#14-row .event").val(localStorage.getItem("14-row"));
$("#15-row .event").val(localStorage.getItem("15-row"));
$("#16-row .event").val(localStorage.getItem("16-row"));
$("#17-row .event").val(localStorage.getItem("17-row"));







