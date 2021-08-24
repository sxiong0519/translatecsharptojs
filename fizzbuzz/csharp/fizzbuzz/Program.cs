// function main() {
//   for(let n=1; n<=100; n++) {
//     if (n % 15 === 0) {
//       console.log("fizzbuzz");
//     } else if (n % 3 === 0) {
//       console.log("fizz");
//     } else if (n % 5 === 0) {
//       console.log("buzz");
//     } else {
//       console.log(n);
//     }
//   }
// }

// main();

using System;

for (int n = 1; n <= 100; n++)
{
    if (n % 15 == 0) 
    {
        //cannot print out both int and string in the same function... must separate them
      Console.Write(n);  
      Console.WriteLine(" fizzbuzz");
    } 
    else if (n % 3 == 0) 
    {
      Console.Write(n);
      Console.WriteLine(" fizz");
    } 
    else if (n % 5 == 0) 
    {
      Console.Write(n);  
      Console.WriteLine(" buzz");
    } 
    else 
    {
      Console.WriteLine(n);
    }
}
