var shoppingCart = [];
var groceryList = document.getElementById("groceryList");
var groceryBtn = document.getElementById("groceryBtn");
var totalBtn = document.getElementById("totalBtn");
var nameInput = document.getElementById("itemName");
var priceInput = document.getElementById("itemPrice");
var qtyInput = document.getElementById("itemQty");

function addToCartList () {
	var itemName = nameInput.value;
	var itemPrice = Number(priceInput.value);
	var itemQty = Number(qtyInput.value);
	var listItem = document.createElement("li");
	var groceryObj = {itemName: itemName, itemPrice: itemPrice, itemQty: itemQty};

	shoppingCart.push(groceryObj);

	listItem.setAttribute("class", "list-group-item");
	listItem.innerHTML = itemQty + "x " + itemName + "<br />" + "Price: $" + itemPrice.toFixed(2);
	groceryList.appendChild(listItem);
}

function clearGroceryFields () {
	nameInput.value = "";
	priceInput.value = "";
	qtyInput.value = "";
	nameInput.focus();
}

function addToTotal () {
	var cartTotal = 0;
	var cartTotalOutput = document.getElementById("cartTotalOutput");
	for (var i = 0; i < shoppingCart.length; i++) {
		cartTotal += shoppingCart[i].itemPrice * shoppingCart[i].itemQty;
	}
	cartTotalOutput.innerHTML = "Your total is $" + cartTotal + ".";
}

function allTheFunctions () {
	addToCartList();
	addToTotal();
	clearGroceryFields();
}

groceryBtn.onclick = allTheFunctions;