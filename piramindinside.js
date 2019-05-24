/*pattern is
1 2 3 4 4 3 2 1 

1 2 3 * * 3 2 1 

1 2 * * * * 2 1 

1 * * * * * * 1
*/

var i , j , k,l;
for(i=4;i>0;i--){
    for(j=1;j<=i;j++){
        process.stdout.write(j + " ");

    }
    for( l=1; l<=4-i;l++){
        process.stdout.write("* * ");

    }
    for(k=i;k>0;k--){
        process.stdout.write(k + " ");

    }
    console.log("\n"); 
}