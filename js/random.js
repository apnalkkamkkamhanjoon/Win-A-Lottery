const page = document.querySelector("h1");
let randomIndex = [];
let time = 3;
let min = "";
let sec = "";
for(i = 0; i <6; i++){
    const randomNumber = Math.floor(Math.random() * 45);
    if(randomIndex.indexOf(randomNumber) === -1){
        randomIndex.push(randomNumber);
    }
    else{
        i--;
    }
}
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
