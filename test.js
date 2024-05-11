
const people = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 22 }
    ];
    


const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");


document.getElementById("submit").addEventListener("click", () => {
  // Get values from input fields
  const name = nameInput.value;
  const age = parseInt(ageInput.value);

  // Add data to object
  person.name = name;
  person.age = age;

  // Log object to console
  console.log(person);
});