/* pattern is
5 4 3 2 1
4 3 2 1
3 2 1
2 1 
1
*/

var num = 5 ;
for ( let i = 0;i <num ; i++)
{
    for(let j = num-i; j >0 ;j--)
    {
        process.stdout.write(j + " ");

    }
    console.log("\n");
}