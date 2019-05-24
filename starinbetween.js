/* pattern is
5 4 3 2 *
5 4 3 * 1
5 4 * 2 1
5 * 3 2 1
* 4 3 2 1

*/

var num = 5;
for( let i =1 ; i<= num ;i++){
    for ( let j = 5 ; j>0 ; j--){
        if(i==j){
            process.stdout.write("* ");
        }
            else{
                process.stdout.write(j + " ");

            }


    }
    console.log("\n");
}