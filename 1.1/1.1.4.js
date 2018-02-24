//program to find the longest work in the string 

var a = prompt();
var b = a.split(' ');
var c = 0;


for (var i=0 ; i < b.length; i++){

    if( b[i].length > c){

        c = b[i].length;
    }
}
console.log("Longest word\'s length ="+c); 