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
    var hourEvent = $(this).siblings(".event").val();
    var saveHour = $(this).parent().attr("id");

    localStorage.setItem(saveHour, hourEvent);
});

//$("#9-row .event").val()








