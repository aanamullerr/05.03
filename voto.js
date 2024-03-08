//Desenvolva um algoritmo que valide a idade da pessoa conforme as leis brasileiras de votação, retornando uma mensagem com condições

//1. Não possui idade para votar 
//2. Voto facultativo 
//2. Voto obrigatório

//const idade = ?;

const idade = 20;

if (idade < 16){
    console.log("não pode votar");
}
else if (idade >= 18 && idade <= 70){
    console.log("voto obrigatório");
}
else {
    console.log("voto facultativo");
}