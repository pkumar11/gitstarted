/* pattern is
1 2 3 4 5
1 2 3 4
1 2 3
1 2
1
*/

for ( let i = 5;i > 0 ; i--)
{
    for(let j =1 ; j <= i;j++)
    {
        process.stdout.write(j + " ");

    }
    console.log("\n");
}