var n1 = prompt("Enter First Number: ");
var n2 = prompt("Enter Second Number: ");
var n3 = prompt("Enter Third Numder:" );

n1 = parseInt(n1);
n2 = parseInt(n2);
n3 = parseInt(n3);

// if(n1 >= n2 && n1 >= n3){
//     console.log(n1 + " n1 is the largest number!");
// } else if( n2 >= n1 && n2 >= n3){
//     console.log(n2 + " n2 is the largest number!");
// }else{console.log(n3 + " n3 is the larget numder!");}

if(n1 >= n2){
    if(n1 >= n3){
        console.log(n1 + " n1 is the largest number!");
    } else{ console.log(n3 + " n3 is the largest number!");}
}else{
    if(n2 >= n3){
        console.log(n2 + " n3 is the largest number!");
    } else{
        console.log(n3 + " n3 is the largest number!");
    }
}