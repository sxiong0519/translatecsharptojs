// function main() {
//   const guests = getGuests();
//   const tables = {
//     "Table 1": [],
//     "Table 2": []
//   };

//   for (const guest of guests) {
//     const table1Occupations = tables["Table 1"].map(g => g.occupation);
//     if (table1Occupations.includes(guest.occupation)) {
//       tables["Table 2"].push(guest);
//     } else {
//       tables["Table 1"].push(guest);
//     }
//   }
  
//   for (const tableName of Object.keys(tables)) {
//     const tableGuests = tables[tableName]; 
//     console.log(tableName);
//     for (const guest of tableGuests) {
//       console.log(`${guest.name} (${guest.occupation}) ${guest.bio}`);
//     }
//   }
// }


// function getGuests() {
//   return [
//     {
//       name: "Marilyn Monroe",
//       occupation: "entertainer",
//       bio: "(1926 - 1962) American actress, singer, model"
//     },
//     {
//       name: "Abraham Lincoln",
//       occupation: "politician",
//       bio: "(1809 - 1865) US President during American civil war"
//     },
//     {
//       name: "Martin Luther King",
//       occupation: "activist",
//       bio: "(1929 - 1968)  American civil rights campaigner"
//     },
//     {
//       name: "Rosa Parks",
//       occupation: "activist",
//       bio: "(1913 - 2005)  American civil rights activist"
//     },
//     {
//       name: "Peter Sellers",
//       occupation: "entertainer",
//       bio: "(1925 - 1980) British actor and comedian"
//     },
//     {
//       name: "Alan Turing",
//       occupation: "computer scientist",
//       bio: "(1912 - 1954) - British computing pioneer, Turing machine, algorithms, cryptology, computer architecture, saved the world"
//     },
//     {
//       name: "Admiral Grace Hopper",
//       occupation: "computer scientist",
//       bio: "(1906–1992) - developed early compilers: FLOW-Matic, COBOL; worked on UNIVAC; gave speeches on computer history, where she gave out nano-seconds"
//     },
//     {
//       name: "Indira Gandhi",
//       occupation: "politician",
//       bio: "(1917 - 1984) Prime Minister of India 1966 - 1977",
//     }
//   ];
// }

// main();








using System;
using System.Collections.Generic;
using System.Linq;

List<Guest> guests = GetGuests();

List<Guest> GetGuests()
{
    List<Guest> guests = new List<Guest> {
        new Guest {
            name = "Marilyn Monroe",
            occupation = "entertainer",
            bio = "(1926 - 1962) American actress, singer, model"
        },
        new Guest {
            name = "Abraham Lincoln",
            occupation = "politician",
            bio = "(1809 - 1865) US President during American civil war"
        },
        new Guest {
            name = "Martin Luther King",
            occupation = "activist",
            bio = "(1929 - 1968)  American civil rights campaigner"
        },
        new Guest {
            name = "Rosa Parks",
            occupation = "activist",
            bio = "(1913 - 2005)  American civil rights activist"
        },
        new Guest {
            name = "Peter Sellers",
            occupation = "entertainer",
            bio = "(1925 - 1980) British actor and comedian"
        },
        new Guest {
            name = "Alan Turing",
            occupation = "computer scientist",
            bio = "(1912 - 1954) - British computing pioneer, Turing machine, algorithms, cryptology, computer architecture, saved the world"
        },
        new Guest {
            name = "Admiral Grace Hopper",
            occupation = "computer scientist",
            bio = "(1906–1992) - developed early compilers: FLOW-Matic, COBOL; worked on UNIVAC; gave speeches on computer history, where she gave out nano-seconds"
        },
        new Guest {
            name = "Indira Gandhi",
            occupation = "politician",
            bio = "(1917 - 1984) Prime Minister of India 1966 - 1977",
        }
    };
    return guests;
}

List<Guest> table1 = new List<Guest>();
List<Guest> table2 = new List<Guest>();
        
Dictionary<string, List<Guest>> tables = new Dictionary<string, List<Guest>>() {
                { "Table 1", table1 },
                { "Table 2", table2 }
            };

foreach (Guest myGuest in guests)
    {
        IEnumerable<string> table1Occupations = tables["Table 1"].Select(g => g.occupation);

                if(table1Occupations.Contains(myGuest.occupation))
                {
                    tables["Table 2"].Add(myGuest);
                } 
                else
                {
                    tables["Table 1"].Add(myGuest);
                }
    }

  foreach (var table in tables)
            {
                List<Guest> tableGuests = tables[table.Key];
                
                Console.WriteLine(table.Key);

                foreach (Guest guest in tableGuests)
                {
                    Console.WriteLine($"{guest.name} ({guest.occupation}) {guest.bio}");
                }

            }

public class Guest 
{
    public string name {get; set;}
    public string occupation {get; set;}
    public string bio {get; set;}
}