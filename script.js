
let buttons = document.getElementsByClassName("test-button");
let blockFirst = document.querySelector(".question-1");
let blockSecond = document.querySelector(".question-2");
let blockThird = document.querySelector(".question-3");
let blockFourth = document.querySelector(".question-4");
let blockFifth = document.querySelector(".question-5")

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
        };
    }
}

function progress () {
    let elem = document.getElementById("upper");
    let percent = document.querySelector(".recording-message__percent");
    width = 0;
    id = setInterval(progressStatus, 100)

    function progressStatus () {
        if(width>=100) {
            clearInterval(id)
        } else {
            width++;
            elem.style.width = width +"%";
            percent.innerHTML = width * 1 + "%";
        }
    }
}

progress();
