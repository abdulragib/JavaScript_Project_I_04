# JavaScript_Project_I_04

This code uses the forEach(), map(), and filter() methods in JavaScript to make changes to an array of objects and render the updated array in a UI.

The array of objects is defined at the beginning of the code, and it contains information about employees, such as their ID, name, age, and profession. The code then uses the map() method to iterate over all of the objects in the array and convert the age property of each object from a string to a number.

After the ages have been converted, the code uses the forEach() method to iterate over the array again and update the age of the object with the name "john" to 19. Then, the code uses the spread operator to add a new object to the array.

Next, the code uses another forEach() method to iterate over the array and render the objects in a UI by creating HTML for each object and appending it to a container element in the UI.

Finally, the code uses the filter() method to filter the array based on the selected profession in a dropdown in the UI. When the user clicks the filter button, the code gets the selected profession from the dropdown, checks if a profession was selected, and then uses the filter() method to get only the objects with the selected profession. The code then updates the UI to show only the cards for the filtered objects.
