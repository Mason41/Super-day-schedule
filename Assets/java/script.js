$(document).ready(function() {
    // display current day
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

    // assign saveBtn click listener for user input and time stamp
    $(".saveBtn").on("click", function() {
        // get nearby values
        console.log(this);
        var text = $(this).siblings(".discription").val();
        var time = $(this).parent().attr("id");

        // items to local storage
        localStorage.setItem(time, text);
    })
    // load saved data from local storage
    $("#9 .description").val(localStorage.getItem("hour9"));
    $("#10 .description").val(localStorage.getItem("hour10"));
    $("#11 .description").val(localStorage.getItem("hour11"));
    $("#12 .description").val(localStorage.getItem("hour12"));
    $("#13 .description").val(localStorage.getItem("hour13"));
    $("#14 .description").val(localStorage.getItem("hour14"));
    $("#15 .description").val(localStorage.getItem("hour15"));
    $("#16 .description").val(localStorage.getItem("hour16"));
    $("#17 .description").val(localStorage.getItem("hour17"));

    function hourtracker() {
        // get current number of hours
        var currentHour = moment().hour();

        // loop over time blocks
        $(".time-block").each(function() {
            var blockHour = parseInt($(this).attr("id").split("hour")[1]);
            console.log( blockHour, currentHour)

            // check to see if we moved over time 
            if (blockHour < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            } 
            else if (blockHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            } 
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }
    hourtracker();
})