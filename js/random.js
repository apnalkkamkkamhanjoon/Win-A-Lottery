let randomIndex = [];
for(i = 0; i < 6; i++){
    const randomNumber = Math.floor(Math.random() * 45 + 1);
    if(randomIndex.indexOf(randomNumber) === -1){
            randomIndex.push(randomNumber);
    }
    else{
        i--;
    }
}
