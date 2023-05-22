eleParol = prompt('inserisci una parola')


function isPalindrom(parol){
let reverseWord = '';

for(let i = eleParol.length - 1; i >=0 ; i-- ){
reverseWord += eleParol[i];
}

if(parol == reverseWord){
    return true;
}
return false

}

if (isPalindrom(eleParol)){
    console.log('palindroma')
}else {
    console.log('non palindroma')
}