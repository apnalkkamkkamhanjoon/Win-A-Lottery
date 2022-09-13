const page = document.querySelector(".randomnum");
let time = 3;
let min = "";
let sec = "";

function lay (f, s) { 
    return f-s;
};

let x = setInterval(function(){
    min = time/60;
    sec = time % 60;
    page.innerText = "생성중...(" + sec + ")";
    time--;
    if(time < 0){
        clearInterval(x);
        page.innerHTML = randomIndex.sort(lay);
    }
},1000);