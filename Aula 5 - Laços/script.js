console.log("Imprimindo de 1 a 5 com while");
var i = 1;

while (i <= 5){
    console.log(i);
    i++;
}

console.log("imprimindo de 1 a 5 com do while");
var j = 1;
do {
    console.log(j);
    j++;
} while (j <= 5);

console.log("imprimindo de 1 a 5 com for");
var k = 1;
for (; k <= 5; k++){ //no js não precisa declarar a variavel dentro do for se a variavel já exite, só adicionar o ";".
    console.log(k);
}

