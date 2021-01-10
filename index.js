// Create a menu app that meets the following requirements.
// a. Use at least one array.
// b. Use at least two classes.
// c. Your menu should have the options to create, view, and delete elements.

// The Item class holds a single item that can be created, viewed, and
// deleted via the menu.
class Item {
    // Instantiate an Item with the specified name
    constructor(itemName) {
        this.itemName = itemName;
    }

    // Get the name of the Item
    getName() {
        return this.itemName;
    }

    // Generate a random Item name
    static getRandomName() {
        return Math.random().toString(36).substring(7);
    }
}

// The ItemArray class holds an array of instances of the Item class. 
class ItemArray {

    // Instantiate an empty instance of ItemArray
    constructor() {
        this.items = [];
    }

    // Is the specified index a valid index for an item in this array?
    validItemIndex(index) {
        return (index >= 0 && index < this.items.length);
    }
    
    // Instantiate an Item with the specified name and add it to the array
    addItem(itemName) {
        this.items.push(new Item(itemName));
    }

    // Get the Item with the specified index from the array.
    getItemByIndex(index) {
        return this.items[index].getName();     
    }

    // Remove the Item with the specified index from the array.
    removeItemByIndex(index) {
        this.items.splice(index, 1);       
    }

    // Build a string of names of the Items in the array with each
    // name prepended with the Item's index.
    getItems() {
        let itemString = "";
        let index;
        for (index in this.items) {
            itemString += ("(" + index + ")" + " " + this.items[index].getName() + '\n');
        }
        return itemString;
    }
}

// Instantiate an ItemArray to hold the array of items.
let itemArray = new ItemArray();

// Set our 'exit' flag to false.
let exit = false;

// Continue prompting the user to choose from the menu until
// the user chooses to exit.
while (! exit) {
    // Prompt the user to choose an operation to perform.
    // Default to "0";
    let operation = prompt(`
        (0) Create
        (1) View Item by Index
        (2) View Items Array
        (3) Delete Item by Index
        (4) Clear Items Array
        (5) Exit
        `,
        "0");

    // The operation is "Create"
    if (operation == "0") {
        // Prompt the user for the new
        // Item name and display a random
        // name as a default.
        let newItemName = prompt(`
            Enter Item to Create
            `,
            Item.getRandomName());

        // Instantiante and add the new Item to the array.
        itemArray.addItem(newItemName);
    } 
    
    // The operation is "View Item by Index"
    else if (operation == "1") {
        // Prompt the user for the index
        // for the item to view.
        let itemIndex = prompt(`
            Enter Item Index to View
            `,
            "0");

        // Display the specified item or display an error,
        // if the index isn't valid. 
        if (itemArray.validItemIndex(itemIndex)) {
            alert(itemArray.getItemByIndex(itemIndex));
        } else {
            alert("Index is out of range");
        }
    } 
    
    // The operation is "View Items Array"    
    else if (operation == "2") {
        alert(itemArray.getItems());
    } 
    
    // The operation is "Delete Item by Index"
    else if (operation == "3") {
        // Prompt the user for the index
        // for the item to delete.
        let itemIndex = prompt(`
            Enter Item Index to Delete
            `,
            "0");

        // Delete the specified item or display an error,
        // if the index isn't valid.
        if (itemArray.getItemByIndex(itemIndex)) {
            itemArray.removeItemByIndex(itemIndex);
        } else {
            alert("Item not deleted because index is out of range");
        }
    } 
    
    // The operation is "Clear Items Array"
    else if (operation == "4") {
        // Instantiate a new array
        itemArray = new ItemArray();
    } 
    
    // The operation is "Exit"
    else if (operation == "5") {
        // Exit the loop.
        exit = true;
    }
}