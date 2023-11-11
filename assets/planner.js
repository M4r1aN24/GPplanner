console.log("This is planner.js");
var today = document.querySelector('#currentDay');
var blockContainer = document.querySelector('.container');

today.textContent = dayjs();
var startHour = "9 am";
var endHour = "5 pm";

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