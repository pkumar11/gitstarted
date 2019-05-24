/* pattern is

    1
  1 2 3
1 2 3 4 5
*/

var num = 3 ;
var i  , j ;
for( i = 1  ; i <= num ; i++){
    for ( j = i ; j < num ; j++){
        process.stdout.write(" ");
    }
    for( j = 1; j<=((2*i )- 1); j++){
        process.stdout.write(j + "");

    }
    console.log("\n");
}
