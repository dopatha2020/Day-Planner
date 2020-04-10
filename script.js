var hour= moment().hours()
// console.log(hour)
function getTime() {
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
}

$(document).ready(function() {
    setInterval(getTime, 1000)
});

$(".description").each(function() {
    var rowHour= $(this).parent().attr("id")
    var rowNumber= parseInt(rowHour);
    // console.log(rowNumber)
    if (rowNumber === hour) {
        $(this).addClass("present");
    }
        else if (rowNumber < hour) {
        $(this).addClass("past");
    
    }
        else {
            $(this).addClass("future");
        };

});

$(".saveBtn").click(function(){
    var message= $(this).siblings(".description").val();
    var locationId= $(this).parent().attr("id");
    localStorage.setItem(locationId, message);
    // console.log(locationId, message)
});

$(".description").each(function() {
    var id= $(this).parent().attr("id");
    $(this).val(localStorage.getItem(id));
});
