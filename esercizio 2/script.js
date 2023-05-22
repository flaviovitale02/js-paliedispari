const divisibility = prompt('pari o dispari?');
const number = parseInt(prompt('dammi un numero da 1 a 5'));
const computer = numberPc(1,5);
const sum = number + computer ;
console.log(number , computer , divisibility)



if(divisibility == pariodispari(sum)){
    console.log('hai vinto')
}else{
    console.log('hai perso')
}


function numberPc(min,max){
   return Math.floor(Math.random() * 5) + 1
    
}

    function pariodispari(number){
        if(number % 2 == 0){
            return 'pari';
        }
        return 'dispari'
    }