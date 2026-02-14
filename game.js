console.log("Adivina el número del 1 al 10")

const RandomNum = Math.floor(Math.random()*10);
console.log(numeroRandom);

While(){
    let numUser = prompt('Adivina el numero');
    let rango = RandomNum/numUser;
    if(rango == RandomNum){
        console.log('!GANASTE¡');
        break;
    }
    else if(rango >= 0.1 && rango <= 1.25 ){
        console.log('Caliente');
        continue;
    }  
    else{
        console.log('Frio');
        continue;
    }
};