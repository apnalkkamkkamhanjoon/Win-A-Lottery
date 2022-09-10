const page = document.querySelector("h1");
let time = 6;
let sec = "";
let x = setInterval(function(){
    sec = time % 60;

    page.innerText = sec + "초 후 공개";
    time--;
})