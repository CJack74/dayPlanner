//Array for time of day
var workHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
var currentHour = moment().hour();

//function for creating creating time blocks, input areas, and save buttons
function Planner() {

    for(let i = 0; i < workHours.length; i++) {

        var row = $("<div class = 'row'>");
        var col1 = $("<div class = 'col-sm-2'>");
        var getHour = workHours[i] + " AM";

        if (workHours[i] >= 12) {
            getHour = workHours[i] + " PM";

            if (workHours[i] >= 13) {
                getHour = workHours[i] -12 + " PM";
            }
        }

        col1.append(getHour);
        var col2 = $("<div class = 'col-sm-8'>");

        var textarea = $("<textarea>");
        textarea.attr("id", "textarea" + i);
        textarea.addClass("form-control");

        //stores input in textarea
        var getTextArea = localStorage.getItem("textarea" + i);
        textarea.text(getTextArea);
        col2.append(textarea)
        
        //creates save button
        var col3 = $("<div class = 'col-sm-2'>");
        var button = $("<button>");
        button.addClass("saveBtn");
        button.text("Save");
        col3.append(button);

        row.append(col1, col2, col3);
        $("#planner").append(row);
        $("#currentHour").text()
    }
}

Planner();

$(".saveBtn").on("click", function () {
    for( let i = 0; i < workHours.length; i++) {
        var getTextArea = $("#textarea" + i).val();
        localStorage.setItem("textarea" + i, getTextArea);
    }

})