console.log("This is planner.js");
var button = $(".saveBtn");
var userValue = $(".textarea");
var today = $(".currentDay");
var blockContainer = $(".container");
// this functions display's the current time.
function displayTime() {
  var todaysTime = dayjs().format("DD MMM YYYY [at] hh:mm:ss a");
  today.text(todaysTime);
}

setInterval(displayTime);

function userInput() {
    var buttons = document.querySelectorAll(".saveBtn");
    for(var button of buttons){
        button.addEventListener('click', function() {
            var content = button.parentElement.previousElementSibling
            console.log(content);
        })
    }
 
}
userInput()

// Figure out how to make a block for every hour from 9 am to 5 pm inclusive

//   each block should allow for text entry (perhaps the block is an input element/textarea)
//   based on hour of the day,
//      each block should be styled based on whether the
//          hour is in the past, present, or future
//      any block in the past should be locked such that
//          text cannot be edited (Nice to have)
//
//   each block should include an hour label
//   each block should include a save button
//      each save button should have a click handler that
//         writes to local storage - somehow, we need to associate each hour's tasks
//         with a separate key
//         Maybe save a single object for the page where the keys in the object are hour numbers and the values are the tasks
//             -OR-
//         Maybe save each task separately to local storage, e.g.
//               localStorage.setItem("9 am", "eat some pie");
//               localStorage.setItem("10 am", "pretend to work")
//   each block should load stored tasks for the given hour from local storage

// Nice to have: Include reminder functionality
//  As the current time approaches the next hour, trigger
//  an alert/dialog/modal that will say what is upcoming
// Nice to have: Some way to indicate a task has been completed (checkbox, button, etc.?)