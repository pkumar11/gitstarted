/* pattern is
5
5 4
5 4 3
5 4 3 2
5 4 3 2 1
*/

var num = 5;
for ( let i = num ;i > 0; i--)
{
    for (let j =5; j >= i; j--)
    {
        process.stdout.write(j + " ");

    }
    console.log("\n");
}