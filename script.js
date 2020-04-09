function getTime() {
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
}

$(document).ready(function() {
    setInterval(getTime, 1000)
});

var hour= moment().hours()
var row = hour

$("textarea").each(function() {
    if (row === hour) {
        $(this).addClass("present");
    }
        else if (row < hour) {
        $(this).addClass("past");
    
    }

});
