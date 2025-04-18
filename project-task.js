/*
===========================================
🔁 Function Refactoring Activity
===========================================

🎯 Objective:
Students will identify repetitive or poorly organized code in a given script
and refactor it by creating programmer-defined functions.

This activity reinforces:
- Writing functions with no, single, and multiple parameters
- Using return statements effectively
- Improving code reusability and modularity

---
🧭 Instructions:

1️⃣ Analyze the provided script, which performs a series of repetitive tasks.

2️⃣ Identify sections of code that can be improved using functions.

3️⃣ Write reusable functions with appropriate parameters and return statements.

4️⃣ Refactor the original code to use your new functions.

5️⃣ Test the refactored script to ensure it produces the same output as the original.

---
*/

// ============================================
// ❌ Original Code (Before Refactoring)
// ============================================

// Script 1 - Greeting multiple users
console.log("Welcome, Alice!");
console.log("Welcome, Bob!");
console.log("Welcome, Charlie!");

// Script 2 - Sum calculation
let num1 = 5, num2 = 10;
let sum = num1 + num2;
console.log("The sum of 5 and 10 is " + sum);

// Script 3 - Product calculation
let product = num1 * num2;
console.log("The product of 5 and 10 is " + product);

// Script 4 - Print names from a list
let names = ["Alice", "Bob", "Charlie"];
console.log("Names in the list:");
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

/*
===========================================
🛠️ Steps for Refactoring
===========================================

🔹 Break Down Tasks into Functions:
   - Identify repetitive patterns (e.g., greetings, calculations, list printing)
   -- Script 1 - Greetings
   -- Script 2 - Sum calculation
   -- Script 3 - Product calculation
   -- Script 4 - Print list
   - Define separate functions for each task
   -- Script 1 - greetUser
   -- Script 2 - calculateSum
   -- Script 3 - calculateProduct
   -- Script 4 - printList

🔹 Write Functions with Parameters and Return Values:
   - Parameterize functions for flexibility (e.g., pass in name, numbers, arrays)
   -- Script 1 - greetUser(name)
   -- Script 2 - calculateSum(num1, num2)
   -- Script 3 - calculateProduct(nbr1, nbr2)
   -- Script 4 - printList(listArray)
   - Use return statements where necessary

🔹 Refactor the Original Code:
   - Replace repeated code with meaningful function calls
   - Keep your code clean, readable, and easy to maintain
*/

// ✅ Your refactored code goes below this line!

//Script 1
function greetUser(name){
   console.log(`Welcome, ${name}!`);
}
greetUser("Alice");
greetUser("Bob");
greetUser("Charlie");

//Script 2
function calculateSum(num1, num2){
   let sum = num1 + num2;
   console.log(`The sum of ${num1} and ${num2} is ${sum}`);
}
calculateSum(5, 10);

//Script 3
function calculateProduct(nbr1, nbr2){
   let product = nbr1 * nbr2;
   console.log(`The product of ${nbr1} and ${nbr2} is ${product}`);
}
calculateProduct(5, 10);

//Script 4
function printList(listArray){
   console.log(`Names in the list:`);
   for (i = 0; i < listArray.length; i++){
      console.log(listArray[i]);
   }
}
printList(["Alice", "Bob", "Charlie"]);