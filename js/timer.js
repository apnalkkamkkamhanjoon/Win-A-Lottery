const page = document.querySelector("h1");
let time = 3;
let min = "";
let sec = "";

let x = setInterval(function(){
    min = time/60;
    sec = time % 60;

    page.innerText = "생성중...(" + sec + ")";
    time--;
    if(time < 0){
        clearInterval(x);
        page.innerHTML = randomIndex.sort(function (f, s) { return f-s; });
    }
},1000);