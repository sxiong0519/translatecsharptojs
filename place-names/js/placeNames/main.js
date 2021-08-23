// // Put your code here

// const names = [
//    "Nashville", "Hong Kong", "The back yard", "Earth",
//     "London", "The mall", "Ryman Auditorium", "The Great Wall of China"
// ];

// console.log("All Pace Names");

// for (const name of names) {
//   console.log(name);
// }


//-----------------------------------------------------------------------------------

// using System;
// using System.Linq;
// using System.Collections.Generic;

// // We must specify the Type of the "names" variable.
// //  It is a "List" that can only contain "strings".
// List<string> names = new List<string> {
//     "Nashville", "Hong Kong", "The back yard", "Earth",
//     "London", "The mall", "Ryman Auditorium", "The Great Wall of China"
// };

// // Print some output to the terminal (aka. "Console");
// Console.WriteLine("All Place Names");

let placeNames = ["Nashville", "Hong Kong", "The back yard", "Earth", "London", "The mall", "Ryman Auditorium", "The Great Wall of China"]

console.log(placeNames)

// // Iterate over each "name" in the "names" list
// foreach (string name in names)
// {
//     Console.WriteLine(name);
// }

for ( const place of placeNames) {
    return console.log(place + " is awesome.")
}

// // When you don't pass an argument to WriteLine, it simply outputs a blank line.
// //  Here we use that to add a little space around the output.
// Console.WriteLine();

// // Filter the list to create a new list that only has 
// //  place names that start with the word "The".
// List<string> theNames = names.Where(n => n.StartsWith("The")).ToList();


// must cancel out the for loop first to run the filter
const filterPlaceNames = placeNames.filter(p => p.startsWith("The"))
console.log("'The' Place Names:", filterPlaceNames)


// Console.WriteLine("'The' Place Names");
// foreach (string name in theNames)
// {
//     Console.WriteLine(name);
// }



