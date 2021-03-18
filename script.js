
let buttons = document.getElementsByClassName("test-button");
let blockFirst = document.querySelector(".question-1");
let blockSecond = document.querySelector(".question-2");
let blockThird = document.querySelector(".question-3");
let blockFourth = document.querySelector(".question-4");
let blockFifth = document.querySelector(".question-5");
let question = document.querySelector(".question");
let message = document.querySelector(".recording-message");
let call = document.querySelector(".call-listen");




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

        

    function progress () {
    let elem = document.getElementById("upper");
    let percent = document.querySelector(".recording-message__percent");
    width = 0;
    id = setInterval(progressStatus, 100)

    function progressStatus () {
        if(width>=100) {
            clearInterval(id);
            message.classList.remove("block");
            call.classList.add("block"); 
        } else {
            width++;
            elem.style.width = width +"%";
            percent.innerHTML = width * 1 + "%";
        }
    }
}

progress();
    }
};

let field = document.querySelector("select");

field.onchange = function() {
let young = document.querySelector(".top-row-1");
let medium = document.querySelector(".top-row-2");
let old = document.querySelector(".top-row-3");
let day = document.querySelector(".date").value;
let month = document.querySelector(".month").value;
let year = document.querySelector(".year").value;
    
day = Number(day);
month = Number(month);
year = Number(year);

    function calculateAge(day, month, year) {
    let todayDate = new Date();
    let todayYear = todayDate.getFullYear();
    let todayMonth = todayDate.getMonth();
    let todayDay = todayDate.getDate();
    let age = todayYear - year;

    if ( todayMonth < (month - 1))
    {
        age--;
    }
    if (((month - 1) == todayMonth) && (todayDay < day))
    {
        age--;
    }
    return age;
}

calculateAge(day, month, year);

if(age >= 18 && age <= 35) {
        young.classList.add("block");
    } else if(age >= 36 && age <= 45) {
        young.classList.remove("block");
        medium.classList.add("block");
    } else if (age >46) {
        medium.classList.remove("block");
        old.classList.add("block");
    } 
}


