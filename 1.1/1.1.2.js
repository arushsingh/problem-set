//Get a number from user and print table of the number
var num = prompt();
var num = Number(num);
if ( isNaN(num)){
  alert('enter a numeric number');
}
else{
  for (var a = 1 ; a<= 10 ; a++){
     console.log(num*a);
  }
}


