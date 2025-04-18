/*
===========================================
🤝 Collaborative Coding Challenge: Event Helpers
===========================================

🎯 Objective:
Students will work in small teams to collaboratively design and implement
reusable functions that solve specific tasks. This activity encourages:

- Teamwork
- Critical thinking
- Knowledge sharing
*/

// ============================================
// 🎉 Scenario:
// Your bootcamp is organizing an event to showcase projects.
// Your team will write reusable JavaScript functions to help manage the event.
// Each function must:
// - Use parameters
// - Use return statements
// - Follow the single responsibility principle
// ============================================


// ============================================
// 🧩 Task 1: Generate Attendee Badge
// ============================================
// Create a function that:
// - Takes a name and a role (e.g., "Alice", "speaker")
// - Returns a string in the format: "Name: Alice, Role: Speaker"

// Steps:
// 1. Define the function with two parameters.
// 2. Format the output string properly.
// 3. Capitalize the role if needed.
// 4. Return the result.

/* Pseudocode
Function Name: generateAttendeeBadge
Parameters: name, role
Function body:
1. Accept parameters, name and role
2. Capitalize first letter of the name and the role if it is not already
3. Format attendeeBadge - "Name: Alice, Role: Speaker"
4. Return attendeeBadge
*/

function capitalizeInput(input){
    if (input.charAt(0) === input.charAt(0).toUpperCase()){
        return input
    } else {
        return input = input.charAt(0).toUpperCase() + input.slice(1);
    }
}

function generateAttendeeBadge(name, role){
    let capitalizedName = capitalizeInput(name);
    let capitalizedRole = capitalizeInput(role);

    let attendeeBadge = (`Name: ${capitalizedName}, Role: ${capitalizedRole}`);
    return attendeeBadge;
}

console.log(generateAttendeeBadge("alice", "speaker"));

// ============================================
// 🧩 Task 2: Calculate Event Cost
// ============================================
// Create a function that:
// - Takes number of attendees and cost per attendee.
// - Applies a 10% discount if attendees exceed 100.
// - Returns the total cost.

// Steps:
// 1. Multiply attendees by cost.
// 2. Check if attendee count is over 100.
// 3. If so, apply a 10% discount.
// 4. Return the final total.

/* Pseudocode
Function name: calculateEventCost
Parameters: numberOfAttendees, costPerAttendee
Function body:
1. Accept the number of attendees and cost per attendee
2. Calculate total cost applying 10% discount if the number of attendees are more than 100
3. If the number of attendees are less than or equal to 100, calculate total cost.
4. Return the total cost
*/

function calculateEventCost(numberOfAttendees, costPerAttendee){
    if (numberOfAttendees > 100){
        let totalCost = numberOfAttendees * costPerAttendee * 0.9;
        return totalCost;
    } else {
        let totalCost = numberOfAttendees * costPerAttendee;
        return totalCost;
    }
}

console.log(`Total Event Cost is $${calculateEventCost(101, 12)}`);

// ============================================
// 🧩 Task 3: Validate Email
// ============================================
// Create a function that:
// - Takes an email string as input.
// - Returns true if the email contains both "@" and "." characters.
// - Returns false otherwise.

// Steps:
// 1. Check if the string includes both "@" and ".".
// 2. Return true or false accordingly.

/* Pseudocode
Function name: isValidEmail
Parameters: email
Function body:
1. Accept email address
2. Return true if the email contains both "@" and "." characters.
3. Return false if the email doesn't contain these characters.
*/

function isValidEmail(email){
    return email.includes("@") && email.includes(".");
}

console.log(isValidEmail("checkthisemail@checker.com"));
console.log(isValidEmail("checkthisemail@checker,com"));

// ============================================
// 🧠 Collaborative Steps
// ============================================

// 📌 Design Phase:
// - Brainstorm function requirements: What inputs and outputs are needed?
// - Assign roles within your team:
//   ▸ Pseudocode Writer
//   ▸ Initial Coder
//   ▸ Testers / Debuggers

// 🛠️ Implementation Phase:
// - Write and refine your three functions as a team
// - Use return statements and ensure reusability

// 🧪 Testing Phase:
// - Each member writes test cases for each function
// - Use console.log() to test different inputs and edge cases

// 🎤 Presentation Phase:
// - Share your functions with the class
// - Explain how your team approached the design and testing process

// ✅ Bonus: Can you extend any of the functions to be more flexible or reusable?

