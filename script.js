
let button = document.querySelector(".test-button");
let blockFirst = document.querySelector(".question-1");
let blockSecond = document.querySelector(".question-2");
let blockThird = document.querySelector(".question-3");
let blockFourth = document.querySelector(".question-4");

button.onclick = function() {
    if(blockFirst.classList.contains('.block')) {
        blockFirst.classList.remove('.block');
        blockSecond.classList.add('.block');
    }

};