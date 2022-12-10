let array = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

// Use map() to convert all ages to numbers
array = array.map((item) => {
  return {
    id: item.id,
    name: item.name,
    age: parseInt(item.age), // Convert age to number
    profession: item.profession,
  };
});

// Use forEach() to update john's age to 19
array.forEach((item) => {
  if (item.name === "john") {
    item.age = 19;
  }
});

// Use spread operator to add a new object to the array
array = [...array, { id: 4, name: "anna", age: 21, profession: "developer" }];

// Use forEach() to render the cards in the UI
array.forEach((item) => {
  // Create the HTML for the card
  let cardHtml = `
        <ul id="card-design">
            <li class="adjust">ID: ${item.id}</li>
            <li class="adjust">Name: ${item.name}</li>
            <li class="adjust">Age: ${item.age}</li>
            <li class="adjust">Profession: ${item.profession}</li>
        </ul>
    `;

  // Append the card HTML to the container element in the UI
  document.getElementById("card-container").innerHTML += cardHtml;
});

// Use filter() to filter the array based on the selected profession
document.getElementById("filter-button").addEventListener("click", () => {
  // Get the selected profession
  let profession = document.getElementById("profession-select").value;

  // Check if a profession was selected
  if (profession === "") {
    alert("Please select a profession before clicking the button");
    return;
  }

  // Use filter() to get only the objects with the selected profession
  let filteredArray = array.filter((item) => item.profession === profession);

  // Update the UI to show only the filtered cards
  document.getElementById("card-container").innerHTML = "";
  filteredArray.forEach((item) => {
    // Create the HTML for the card
    let cardHtml = `
        <ul id="card-design">
        <li class="adjust">ID: ${item.id}</li>
        <li class="adjust">Name: ${item.name}</li>
        <li class="adjust">Age: ${item.age}</li>
        <li class="adjust">Profession: ${item.profession}</li>
    </ul>
        `;

    // Append the card HTML to the container element in the UI
    document.getElementById("card-container").innerHTML += cardHtml;
  });
});
