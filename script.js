/*
Lab 3 JavaScript

Step 1: Create a constructor for ToyCar
 Include 10-15 properties describing the product

*/


// Constructor Function
function ToyCar(name, brand, model, color, scale, material, price, year, stock, condition, category, weight, batteryRequired){

    this.name = name;
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.scale = scale;
    this.material = material;
    this.price = price;
    this.year = year;
    this.stock = stock;
    this.condition = condition;
    this.category = category;
    this.weight = weight;
    this.batteryRequired = batteryRequired;
}

//Step 2: Create object instances
// Create Object Instance
let car1 = new ToyCar(
    "Ferrari F40 Model Car",
    "Bburago",
    "F40",
    "Red",
    "1:24",
    "Diecast Metal",
    39.99,
    1987,
    25,
    "New",
    "Sports Car",
    "0.5kg",
    false
);

//Step 3: Display properties on webpage
// Function to display car information
function displayCar(){

document.getElementById("carName").innerText = car1.name;
document.getElementById("brand").innerText = car1.brand;
document.getElementById("model").innerText = car1.model;
document.getElementById("color").innerText = car1.color;
document.getElementById("scale").innerText = car1.scale;
document.getElementById("material").innerText = car1.material;
document.getElementById("price").innerText = car1.price;
document.getElementById("year").innerText = car1.year;
document.getElementById("stock").innerText = car1.stock;
document.getElementById("condition").innerText = car1.condition;
document.getElementById("category").innerText = car1.category;

}

//Step 4: Add interaction to modify property
// Function to change car color
function changeColor(){

let newColor = document.getElementById("newColor").value;

car1.color = newColor;

displayCar();

}


// Run display when page loads
displayCar();