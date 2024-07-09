// Array of names
const names = ["John", "Paul", "George", "Ringo", "James", "Alice", "Bob"];

// Loop over each name in the array
for (let i = 0; i < names.length; i++) {
    // Get the current name
    let name = names[i];

    // Check if the name starts with "J" or "j"
    if (name.charAt(0).toLowerCase() === 'j') {
        console.log("Goodbye " + name);
    } else {
        console.log("Hello " + name);
    }
}
