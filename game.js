console.log("Adivina el número del 1 al 10");

let randomNum = Math.floor(Math.random() * 10) + 1;

while(true){
    let numUser = Number(prompt("Adivina el número"));

    if(numUser === randomNum){
        console.log("¡GANASTE!");
        break;
    }
    else if(numUser > randomNum){
        console.log("Frio");
    }
    else{
        console.log("Caliente");
    }
}