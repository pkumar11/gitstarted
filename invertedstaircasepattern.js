/* pattern is
1 2 3 4 5
2 3 4 5
3 4 5
4 5
5
*/

var num = 5;

for ( let i = num ; i > 0 ; i--)
{
    for(let j = num - i +1 ; j <= num;j++)
    {
        process.stdout.write(j + " ");

    }
    console.log("\n");
}