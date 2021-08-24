﻿// function main() {
//   const insults = [
//     "You look like what morning breath smells like.",
//     "If you tried to give me cpr I would probably throw myself back under water",
//     "I am not a fan of you",
//     "You think you're so special...and you are. The fact of your existence is nearly impossible to believe",
//     "I'd rather walk than be on the same plane as you",
//     "If I were given a million dollars to hang out with you...I would, but then I'd have to spend half of it on therapy",
//     "Do you have to be so...like that?"
//   ];



//   // This code ensures we don't end up with duplicate insults
//   const indexes = [];
//   while (indexes.length < 3) {
//     const candidate = getRandomInt(0, insults.length - 1);
//     if (!indexes.includes(candidate)) {
//       indexes.push(candidate);
//     }
//   }


//   for (let i=0; i<indexes.length; i++) {
//     const index = indexes[i];
//     console.log(insults[index]);
//   }
// }

// // Remember getting a random integer in C# is different
// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// main();



using System;
using System.Linq;
using System.Collections.Generic;

List<string> insults = new List<string> 
{
    "You look like what morning breath smells like.",
    "If you tried to give me cpr I would probably throw myself back under water",
    "I am not a fan of you",
    "You think you're so special...and you are. The fact of your existence is nearly impossible to believe",
    "I'd rather walk than be on the same plane as you",
    "If I were given a million dollars to hang out with you...I would, but then I'd have to spend half of it on therapy",
    "Do you have to be so...like that?" 
};

 List<int> indexes = new List<int> { };
            while (indexes.Count < 3)
            {
                int candidate = getRandomInt(insults.Count);
                if (!indexes.Contains(candidate))
                {
                    indexes.Add(candidate);
                }
            }
            for (int i = 0; i < indexes.Count; i++)
            {
                int index = indexes[i];
                Console.WriteLine(insults[index]);
            }

            static int getRandomInt(int count)
            {

                Random random = new Random();
                return random.Next(0, count);
            }