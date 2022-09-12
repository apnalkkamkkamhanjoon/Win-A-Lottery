let num = prompt("몇매 출력 하시겠습니까", "");
alert(num);


let randomIndex = [];
for(i = 0; i <6; i++){
    const randomNumber = Math.floor(Math.random() * 45);
    if(randomIndex.indexOf(randomNumber) === -1){
        randomIndex.push(randomNumber);
    }
        else{
        i--;
    }
}
