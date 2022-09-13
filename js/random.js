let randomIndex = [];
for(j = 0; j < 6; j++){
    const randomNumber = Math.floor(Math.random() * 45 + 1);
    if(randomIndex.indexOf(randomNumber) === -1){
            randomIndex.push(randomNumber);
    }
    else{
        j--;
    }
}
