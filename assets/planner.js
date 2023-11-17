console.log("This is planner.js");
// var button = $(".saveBtn");
var userValue = $(".textarea");
var today = $("#currentDay");
var blockContainer = $(".container");
var hours = $(".hour");

function displayTime() {
  var todaysTime = dayjs().format("DD MMM YYYY [at] HH:mm:ss a");
  today.text(todaysTime);

  
}

setInterval(displayTime);

// var hourSlot= [
//     '9 AM',
//     '10 AM',
//     '11 AM',
//     '12 PM',
//     '1 PM',
//     '2 PM',
//     '3 PM',
//     '4 PM',
//     '5 PM'
//   ];
  
//   for (var i = 0; i < hourSlot.length; i++) {
//     // Create a new `<div>` for each ability and its text content
//     var hourSlotText = $('<p>');
  
//     // hourSlotText.textContent = hourSlot[i];
//     hourSlotText.text(hourSlot[i]);
  
//     // `my-3` class adds margin on top and bottom
//     hourSlotText.addClass('my-3');
  
//     // Alternatively
//     // var hourSlotText = $("<div>" + hourSlot[i] + "</div>");
  
//     // Add this new `<div>` to the hourSlot `<div>` container element.
//     hours.append(hourSlotText);
//   }


// function displayHours(){
//     var hour = $("<p>");
//     hour.text(dayjs('09')).format("hh");
//     hours.append(hours);
//  }
// displayHours();

function userInput() {
    var now = dayjs().format("HH");
    var buttons = $(".saveBtn");
    var contextTextArea = $(".textarea");
    for(const button of buttons){
        button.addEventListener('click', function() {
            var content = button.parentElement.previousElementSibling.value;
            var key = button.parentElement.parentElement.id;
            localStorage.setItem(key, content);
        })
    }
    for(const textArea of contextTextArea){
        
        let key = textArea.parentElement.id;
        textArea.value = localStorage.getItem(key);
       if(key < now){
        textArea.classList.add('past');
       } else if(key > now){
        textArea.classList.add('future');
       } else {
        textArea.classList.add('present');
       }
    }
}
userInput()

// why did var not work when const worked in the first for loop? 