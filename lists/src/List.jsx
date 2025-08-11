
function List(){
// Create an Array
    // Placing the objects in curly braces makes them objects. Delete braces for list example
    // Each object should have a unique identifier
    const fruits = [{id: 1, name: "apple", calories: 95}, 
        {id: 2, name:"orange", calories: 45}, 
        {id: 3, name:"banana", calories: 105}, 
        {id: 4, name:"coconut", calories: 159}, 
        {id: 5, name:"pineapple", calories: 37}];
    // Create a new array of list items in unordered list format using map method
    // Map method uses 3 types of functions: Callback, Function/Expression, ArrowFunctions

    // Using the sort method
    // fruits.sort((a, b) => a.name.localeCompare(b.name)); // ALPHABETICAL
    // fruits.sort((a, b) => b.name.localeCompare(a.name)); // REVERSE ALPHABETICAL
    // fruits.sort((a, b) => a.calories - b.calories); // NUMERICAL
    // fruits.sort((a, b) => b.calories - a.calories); // REVERSE NUMERICAL

    // Filter objects by criteria
    const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);

    const listItems = lowCalFruits.map(lowCalFruit => <li key={lowCalFruit.id}>
                                                      {lowCalFruit.name}: &nbsp;
                                                      <b>{lowCalFruit.calories}</b></li>);

    // Using the ArrowFunctions
        // For every fruits, do this (>), 
    // const listItems = fruits.map(fruit => <li key={fruit.id}>
    //                                             {fruit.name}: &nbsp;
    //                                             <b>{fruit.calories}</b></li>);

    return (<ul>{listItems}</ul>);
}
export default List