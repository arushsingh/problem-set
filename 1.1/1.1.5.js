//program to find the longest work in the string 



var a = "A Community of software developers supporting modern web";
var b = a.split(' ');
var longestword = 0;
//console.log(b);
var i = 0;
//console.log(b.length);

while ( i < b.length ){
    if (b[i].length > longestword){

        longestword = b[i].length;
        i++;
    }
    console.log(longestword);    
}
