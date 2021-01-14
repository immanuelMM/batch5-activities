// Create an object `store` that will contain the name of the store, inventory list, and the earnings
// Create an object `book` that will contain the title, the quantity, and the value of the book
// Create a function addBook() that creates a book object (with title, quantity and value) and add it to an array of book objects in the store inventory
// Create a function restockBook() that takes the parameters title and quantity and adds the corresponding book to the inventory. The book should already exist in the inventory, if not, restock should not push thru.
// Create a function sellBook() that takes the parameter title and quantity. When called, it searches for the book with the corresponding title, deducts the quantity, and adds the earnings accordingly
//  - If the book does not exist, transaction will fail then print a message `${book-title} out of stock`.  
//  - If quantity is less than what is in the inventory, transaction will fail then print message `only ${number} stocks left`
//  - If sell was successful, print message "Successful transaction". 
// Create a function totalEarnings() that will display the total earnings of the store, print store name and earnings;
// Create a function listInventory() that will display all of books in the inventory, print title quantity and value;



var store = {
    name: "Bookstore",
    inventory_list: [ ],
    earnings: "00"
}

var book = {
    title: "ibong adarna",
    quantity: "1",
    value:"100.00",
}


function addBook(title , quantity, value){

    let obeject = { tittle:title , quantity:quantity, value:value}
    
    store.inventory_list.push(obeject);
        
    console.log("Successfully addad Book with Title " + title + " Quantity " + quantity + " and value of " + value);
    
}

function restockBook(){

}

function sellBook(){

}

function totalEarnings(){



}

function listInventory(){
    
    console.log("Book Inventory");
    console.log("");

    for (i = 0; i < store.inventory_list.length ; i++){

        let inventory = store.inventory_list[i];

        console.log("book ***** --  " + inventory.tittle + " and value of " + inventory.value);
    
    }

}