/* pattern is
5 4 3 2 1
5 4 3 2
5 4 3
5 4
5
*/

var num = 5;
for ( let i = 0 ; i < num ; i++)
{
    for(let j = num ; j > i ; j--)
    {
        process.stdout.write(j + " ");

    }
    console.log("\n");
}