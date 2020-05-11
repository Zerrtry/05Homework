// inner data from the local storage
$("#9amTask").text(localStorage.getItem("9amTask"));
$("#10amTask").text(localStorage.getItem("10amTask"));
$("#11amTask").text(localStorage.getItem("11amTask"));
$("#12amTask").text(localStorage.getItem("12amTask"));
$("#1pmTask").text(localStorage.getItem("1pmTask"));
$("#2pmTask").text(localStorage.getItem("2pmTask"));
$("#3pmTask").text(localStorage.getItem("3pmTask"));
$("#4pmTask").text(localStorage.getItem("4pmTask"));
$("#5pmTask").text(localStorage.getItem("5pmTask"));
// print current data in the header
$("#currentDay").html(moment().format('MMMM Do YYYY'));

$(document).ready(function(){
    
    var task9am = $("#9amTask");
    var task10am = $("#10amTask");
    var task11am = $("#11amTask");
    var task12am = $("#12amTask");
    var task1pm = $("#1pmTask");
    var task2pm = $("#2pmTask");
    var task3pm = $("#3pmTask");
    var task4pm = $("#4pmTask");
    var task5pm = $("#5pmTask");
    var taskId = [task9am,task10am,task11am,task12am,task1pm,task2pm,task3pm,task4pm,task5pm];

    toggleBGColor();
    // switching background-color
    function toggleBGColor (){
        console.log("toggle run")
        if (moment().format("H") < 9){
            taskId.forEach(element => {
                changeBGColortoFuture(element)
            });
        } else if (moment().format("H") == 9){
            changeBGColortoPresent(task9am);
            for (var i=1; i < taskId.length; i++){
                changeBGColortoFuture(taskId[i]);
            };
        } else if (moment().format("H") == 10){
            changeBGColortoPresent(task10am);
            changeBGColortoPast(task9am);
            for (var i=2; i < taskId.length; i++){
                changeBGColortoFuture(taskId[i]);
            };
        } else if (moment().format("H") == 11){
            changeBGColortoPresent(task11am);
            for (var i=0; i < 2; i++) {
                changeBGColortoPast(taskId[i]);
            };
            for (var i=3; i < taskId.length; i++){
                changeBGColortoFuture(taskId[i]);
            };
        } else if (moment().format("H") == 12){
            changeBGColortoPresent(task12am);
            for (var i=0; i < 3; i++) {
                changeBGColortoPast(taskId[i]);
            };
            for (var i=4; i < taskId.length; i++){
                changeBGColortoFuture(taskId[i]);
            };
        } else if (moment().format("H") == 13){
            changeBGColortoPresent(task1pm);
            for (var i=0; i < 4; i++) {
                changeBGColortoPast(taskId[i]);
            };
            for (var i=5; i < taskId.length; i++){
                changeBGColortoFuture(taskId[i]);
            };
        } else if (moment().format("H") == 14){
            changeBGColortoPresent(task2pm);
            for (var i=0; i < 5; i++) {
                changeBGColortoPast(taskId[i]);
            };
            for (var i=6; i < taskId.length; i++){
                changeBGColortoFuture(taskId[i]);
            };
        } else if (moment().format("H") == 15){
            changeBGColortoPresent(task3pm);
            for (var i=0; i < 6; i++){
                changeBGColortoPast(taskId[i]);
            };
            for (var i=7; i < taskId.length; i++){
                changeBGColortoFuture(taskId[i]);
            };
        } else if (moment().format("H") == 16){
            changeBGColortoPresent(task4pm);
            for (var i=0; i < 7; i++) {
                changeBGColortoPast(taskId[i]);
            };
            changeBGColortoFuture(task5pm);
        } else if (moment().format("H") == 17){
            changeBGColortoPresent(task5pm);
            for (var i=0; i < 8; i++) {
                changeBGColortoPast(taskId[i]);
            };
        } else if (moment().format("H") > 17){
            taskId.forEach(element => {
                changeBGColortoPast(element)
            });
        };
    };

    // update current date in the header
    setInterval(() => {
        $("#currentDay").html(moment().format('MMMM Do YYYY'));
        // call function changing background-color
        if (moment().format("H") > 8 && moment().format("H") < 19 && moment().format("m")==0){
            toggleBGColor ();
        };
    }, 60000);

    // in process
    var tasksStorage = [];
    function pushToStorage(inputUnit){
        tasksStorage.push(inputUnit);
    };

    // store user input to the local storage or update input once user click the button
    $(".saveBtn").click(function(){
        var userInput = $(this).prev().val();
        console.log(userInput);
        var userInputId  = $(this).prev().attr("id");
        console.log(userInputId);
        localStorage.setItem(userInputId, userInput)
        // the part below is in process
        var inputUnit = {
            key: userInputId,
            value: userInput,
        };
        pushToStorage(inputUnit);
    });
    
    // functions for switching classes between past present and future
    function changeBGColortoFuture(element){
        console.log("change to future", element)
        element.removeClass("past").removeClass("present").addClass("future");
    };
    function changeBGColortoPresent(element){
        console.log("change to present", element)
        element.removeClass("future").removeClass("past").addClass("present");
    };
    function changeBGColortoPast(element){
        console.log("change to past", element)
        element.removeClass("present").removeClass("future").addClass("past");
    };

});