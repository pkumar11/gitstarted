/* pattern is
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
*/

var num = 5;
for ( let i = 1 ;i <= num; i++)
{
    for (let j =1; j <= i; j++)
    {
        process.stdout.write(j + " ");

    }
    console.log("\n");
}