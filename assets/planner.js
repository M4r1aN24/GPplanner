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