// // Put your code here


// using System;

// Console.WriteLine("Let's roll some dice, baby!");
// Console.WriteLine("---------------------------");

// for (int i = 0; i < 10; i++)
// {
//     Die die1 = Roll();
//     Die die2 = Roll();

//     string message = $"{die1} + {die2} == {die1.Value + die2.Value}";
//     if (die1.Value == die2.Value)
//     {
//         message += " DOUBLES!";
//     }

//     Console.WriteLine(message);
// }


// // Function to "roll" a die
// //  Generates a random number between 1 and 6
// //  Constructs a new Die object with the random number as it's value
// Die Roll()
// {
//     int dieValue = new Random().Next(1, 6);
//     Die die = new Die(dieValue);
//     return die;
// }

//creating dice function: https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//set die values to empty for now
let die1 = {};
let die2 = {};

//creating dieface values by comparing value 1 to the string value "\xyz"
dieFace = (value) => {
    switch (value) {
      case 1:
        dieString = "\u2680";
        break;
      case 2:
        dieString = "\u2681";
        break;
      case 3:
        dieString = "\u2682";
        break;
      case 4:
        dieString = "\u2683";
        break;
      case 5:
        dieString = "\u2684";
        break;
      case 6:
        dieString = "\u2685";
        break;
    }
    return dieString;
  }


//functin for rolling die and comparing to see if they are doubles"
for (let i = 0; i < 10; i++) {
    die1.value = getRandomInt(1,6)
    die2.value = getRandomInt(1,6)

    die1.icon = dieFace(die1.value);
    die2.icon = dieFace(die2.value);


    let message = `${die1.icon} + ${die2.icon} === ${die1.value + die2.value}`

    if (die1.value === die2.value) {
      message += "DOUBLES"
    }
    console.log(message)


}

// // This class is used to define a "die" object (a single "dice")
// //  Each die will have a value. This value is the number that the
// //  die "landed on" when it was rolled.
// public class Die
// {
//     // A place to store the numeric "value" of a Die object
//     public int Value { get; set; }

//     // When we construct a new Die object, this method is called
//     //  We call this kind of method a "constructor"
//     public Die(int value)
//     {
//         this.Value = value;
//     }

//     // This method is automatically called when we create the "message" variable above
//     // By the way, a JavaScript object can have a toString() method too...
//     public override string ToString()
//     {
//         string dieString = "Unknown";

//         // This "switch" statement behaves like a series of "if/else if" statements.
//         //  We compare the numeric Value of the current object accross different "cases".
//         //  When we find a matching case we return a string that represents an image of a die
//         // Did you kow that JavaScript also has "switch" statements?
//         switch (this.Value)
//         {
//             /* "case 1:" is like the following "if" statement
//             if (this.Value == 1) {
//                 dieString = "one";
//             }
//             */
//             case 1:
//                 dieString = "one"; // These \uXXXX values are fancy unicode characters
//                 break;
//             case 2:
//                 dieString = "two";
//                 break;
//             case 3:
//                 dieString = "three";
//                 break;
//             case 4:
//                 dieString = "four";
//                 break;
//             case 5:
//                 dieString = "five";
//                 break;
//             case 6:
//                 dieString = "six";
//                 break;
//         }

//         return dieString;
//     }
// }
