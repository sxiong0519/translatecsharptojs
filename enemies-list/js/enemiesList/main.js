// Put your code here

// using System;
// using System.Collections.Generic;

// Console.WriteLine("My Enemies List!");
console.log("My Enemies List!")
// Console.WriteLine("----------------");
    console.log("-------------------------")
// List<Enemy> enemies = GetEnemies();

// foreach (Enemy myEnemy in enemies)
// {
//     if (myEnemy.IsReallyHated)
//     {
//         Console.WriteLine($"{myEnemy.FirstName} {myEnemy.LastName} (Really, really dislike!)");
//     }
//     else
//     {
//         Console.WriteLine($"{myEnemy.FirstName} {myEnemy.LastName}");
//     }
// }

const enemies = [
    {
        FirstName: "Joshua",
        LastName: "Flowers",
        Offenses: [
                "Being a jerk to me in elementary school",
                "Not being nice to me in elementary school"
                ],
        IsReallyHated: true 
    },
    {
        FirstName: "Darth",
        LastName: "Vader",
        Offenses: [
                "Cut off Luke's hand",
                "Murdered all those kids",
                "Unkind management practices"
                ],
        IsReallyHated: false

    },
    {
        FirstName: "Betty",
        LastName: "Rudelady",
        Offenses: [
                    "Phone calls in the theater",
                    "Phone calls on the bus",
                    "Phone calls in line at the grocery store",
                    "Poor conversationalist"
                    ],
        IsReallyHated: true
    },
    {
        FirstName: "Leon",
        LastName: "Peck",
        Offenses: [
                    "Keeps giving me a hotplate"
                    ],
        IsReallyHated: false
    }
]


for (const enemy of enemies) {
    if (enemy.IsReallyHated) {
        console.log(enemy.FirstName, enemy.LastName,  " Really, really dislike!")
    }
    else {
        console.log(enemy.FirstName, enemy.LastName)
    }
}

// // A function to make and return list of enemies
// List<Enemy> GetEnemies()
// {
//     // Make a list of Enemy objects
//     //  How would you create a collection of enemy objects in JavaScript?
//     List<Enemy> enemies = new List<Enemy> {
//         new Enemy {
//             FirstName = "Joshua",
//             LastName = "Flowers",
//             Offenses = new List<string> {
//                 "Being a jerk to me in elementary school",
//                 "Not being nice to me in elementary school"
//             },
//             IsReallyHated = true
//         },
//         new Enemy {
//             FirstName = "Darth",
//             LastName = "Vader",
//             Offenses = new List<string> {
//                 "Cut off Luke's hand",
//                 "Murdered all those kids",
//                 "Unkind management practices"
//             },
//             IsReallyHated = false
//         },
//         new Enemy {
//             FirstName = "Betty",
//             LastName = "Rudelady",
//             Offenses = new List<string> {
//                 "Phone calls in the theater",
//                 "Phone calls on the bus",
//                 "Phone calls in line at the grocery store",
//                 "Poor conversationalist"
//             },
//             IsReallyHated = true
//         },
//         new Enemy {
//             FirstName = "Leon",
//             LastName = "Peck",
//             Offenses = new List<string> {
//                 "Keeps giving me a hotplate"
//             },
//             IsReallyHated = false
//         }
//     };

//     return enemies;
// }

// // Classes are how we define objects in C#. They help us ensure that our objects always have
// //  the correct properties and methods.
// // JavaScript is more flexible (but also more error-prone), so you will not need to translate
// //  this class into JavaScript
// public class Enemy
// {
//     public string FirstName { get; set; }
//     public string LastName { get; set; }
//     public bool IsReallyHated { get; set; }
//     public List<string> Offenses { get; set; }
// }