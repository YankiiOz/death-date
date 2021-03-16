
let buttons = document.getElementsByClassName("test-button");
let blockFirst = document.querySelector(".question-1");
let blockSecond = document.querySelector(".question-2");
let blockThird = document.querySelector(".question-3");
let blockFourth = document.querySelector(".question-4");
let blockFifth = document.querySelector(".question-5");
let question = document.querySelector(".question");
let message = document.querySelector(".recording-message");
let call = document.querySelector(".call-listen")


for(let i=0;i<buttons.length; i++) {
    buttons[i].onclick = function() {
        if(blockFirst.classList.contains("block")) {
            blockFirst.classList.remove("block");
            blockSecond.classList.add("block");
        } else if(blockSecond.classList.contains("block")) {
            blockSecond.classList.remove("block");
            blockThird.classList.add("block");
        } else if(blockThird.classList.contains("block")) {
            blockThird.classList.remove("block");
            blockFourth.classList.add("block");
        } else if(blockFourth.classList.contains("block")) {
            blockFourth.classList.remove("block");
            blockFifth.classList.add("block");
        } else if(blockFifth.classList.contains("block")) {
            blockFifth.classList.remove("block");
            message.classList.add("block");
        } 
        
    }
}

function progress () {
    let elem = document.getElementById("upper");
    let percent = document.querySelector(".recording-message__percent");
    width = 0;
    id = setInterval(progressStatus, 100)

    function progressStatus () {
        if(width>=100) {
            clearInterval(id);
            /* message.classList.remove("block");
            call.classList.add("block"); */
        } else {
            width++;
            elem.style.width = width +"%";
            percent.innerHTML = width * 1 + "%";
        }
    }
}

progress();



let date = document.querySelector(".date");
const dates = []
dates.forEach(function (date) {
dates.push(date);
})


function get_current_age() {
    let age = dates.split('.');
    if( typeof age[2] !== "undefined" ) {
        let dob = age[2]+'.'+age[1]+'.'+age[0];
        return ((new Date().getTime() - new Date(dob)) / (24 * 3600 * 365.25 * 1000)) | 0;
    }
    return dob;
} 