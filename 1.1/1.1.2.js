var x = new Date();
var y = x.getFullYear();
var z = 40;



while( z > 0){
    if ( ( y%4 === 0 ) || ( y%400=== 0 ) && ( y%100 != 0 )){
         console.log(y);
         y++;
         z--;
    }else
    y++;
}


