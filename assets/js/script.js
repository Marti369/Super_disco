// create varibales 
var today = document.querySelector("#currentDay"); //variable that selects current day id
var dayCurrent = moment(); //new function moment
today.textContent = dayCurrent.format("dddd MMMM Do YYYY, h:mm A"); //gets id, assigns current day format

//to classify time slots depending on time and color

$('textarea').each(function() { //we use each to select each textareas
    getId = this.id
    newId = "#" + getId //creates a new class id

    currentTime = dayCurrent.format("H") //we use H for hours only
    if (currentTime === getId) {
        var section = $(newId) //function that categorizes time with present
        $(section).addClass("present")
    } else if (currentTime > getId) {
        var section = $(newId) //function that categorizes time with past
        $(section).addClass("past")
    } else if (currentTime < getId) {
        var section = $(newId) //function that categorizes time with future
        $(section).addClass("future")
    }

});

//function to save to local storge
var localSave = function(id, value) {
    localStorage.setItem(id, value);
};

//function to add text when click and then save
$(".divs").click(function() {
    var content = $(this).closest(".time").find("textarea");
    var text = $(this).closest(".time").find("textarea").val();
    var id = $(this).closest(".time").attr("id");
    content.append(text);
    localSave(id, text);
});

//function to retreive Local Storage to refill information

var refillInformation = function() {
    $(".time").each(function() {
        var id = this.id;
        value = localStorage.getItem(id);
        content = $("#" + id).find("textarea");
        content.append(value);
    });
}
refillInformation();