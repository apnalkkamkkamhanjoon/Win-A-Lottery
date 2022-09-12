const page = document.querySelector("h1");
let time = 3;
let min = "";
let sec = "";

let x = setInterval(function(){
    min = time/60;
    sec = time % 60;

    page.innerText = sec + "";
    time--;
    if(time < 0){
        clearInterval(x);
        page.innerHTML = randomIndex;
    }
},1000);