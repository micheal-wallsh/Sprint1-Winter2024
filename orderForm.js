/* Project: Midterm Sprint, Gary Brown's Diner webpage
Authors: Luke Peddle, Samantha Thorne, Micheal Walsh
Date: Feb 19-21st 2024 -->*/
let form = document.querySelector("#forms");

form.addEventListener("submit", handleSubmit);
let itemName = [];
let itemNum = [];
let valid = 0;

function handleSubmit(e) {

  //obtain data for the name and address

  var name = document.querySelector("#name").value;
  let stAdd = document.querySelector("#stAdd").value;
  let city = document.querySelector("#city").value;
  let prov = document.querySelector("#prov").value;
  let postCode = document.querySelector("#postCode").value;
  console.log(name);

  //obtain data from checklist
  checkBacon();
  
    
    let itemlist = "";
    let i = 0;
    itemName.forEach((itemName) => {
        console.log(itemName[i]);
        itemlist = `${itemlist}\n${i+1}. ${itemName}         quantity: ${itemNum[i]} `;
        i++;
        console.log(i)
        
        
    });
   
  //obtain data for the card information
  let cardName = document.querySelector("#cardholderName").value;
  
  let cardNum = document.querySelector("#cardNumber").value;
  
  let expiry = document.querySelector("#expiry").value;
  
  let securCode = document.querySelector("#securityCode").value;

  //enter if the user has inputted no mistakes  
  if (valid === 10){
    //have a confrimation pop appear that shows all inputted data
    if (confirm(`Please comfirm your order

        Name and Address

        Name:                         ${name}
        Street Address:         ${stAdd}
        City:                             ${city}
        Province:                     ${prov}
        Postal Code:               ${postCode}

        Order
                ${itemlist}

        Card Information

        Cardholder Name:       ${cardName}
        Card Number:              ${cardNum}
        Expiry:                           ${expiry}
        Security Code:             ${securCode}`)) {
    //enter if the user clicks confirm
    window.alert("Thank you for your order");
    
    e.stopPropagation();
    } 

    //have an alert appear 
    else {
        window.alert("Please redo order");
    }
    }
  
  
  
}

function checkBacon() {  

    //function to obtain data from the bacon and eggs section
    valid ++;
    
    var item = document.getElementById("baconEggs").checked;  
        
    //enter if bacon and eggs is checked off
    if (item === true ){ 
      let baconQty = document.querySelector("#baconEggsQty").value;
        console.log(baconQty)
        //enter if no quantity is inputted 
      if (baconQty === ""){
        window.alert("No input for quantity. Please redo order");
        
      }
      //add bacon and eggs and the the quantity to an array
      else{
        itemName.push(["Bacon & Eggs"]);
        itemNum.push(baconQty);
      checkWaffles();
      }
    }
      
    else{
        checkWaffles();
    }
    
}

function checkWaffles() {
    //function to obtain data from the waffles section
    valid++;
    var item = document.getElementById("waffles").checked;  

    //enter if waffles is checked off
    if (item === true ){ 
      
      let wafflesQty = document.querySelector("#wafflesQty").value;
      
      //enter if no quantity is inputted
      if (wafflesQty=== ""){
        window.alert("No input for quantity. Please redo order");
      }

      //add waffles and the the quantity to an array
      else{
        itemName.push(["Waffles"]);
        itemNum.push(wafflesQty);
        checkToast();
      }
    }
      
    else{
        checkToast();
    }
    
}

function checkToast() { 
    
    //function to obtain data from the french toast section
    valid++;
    var item = document.getElementById("frenchToast").checked;  

    //enter if toast is checked off
    if (item === true ){ 
      
      let frenchToastQty = document.querySelector("#frenchToastQty").value;
      
      //enter if no quantity is inputted
      if (frenchToastQty=== ""){
        window.alert("No input for quantity. Please redo order");
      }

      //add toast and the the quantity to an array
      else{
        itemName.push(["French Toast"]);
        itemNum.push(frenchToastQty);
        checkOat();
      }
    }
      
    else{
        checkOat();
    }
    
}

function checkOat() { 
    
    //function to obtain data from the oatmeal section
    valid++;
    var item = document.getElementById("oatmeal").checked; 
    
    //enter if oatmeal is checked off
    if (item === true ){ 
      
      let oatmealQty = document.querySelector("#oatmealQty").value;
        
      //enter if no quantity is inputted
      if (oatmealQty=== ""){
        window.alert("No input for quantity. Please redo order");
      }

      //add oatmeal and the the quantity to an array
      else{
      
        itemName.push(["Oatmeal"]);
        itemNum.push(oatmealQty);
        checkBagel();
      }
    }
      
    else{
        checkBagel();
    }
    
}

function checkBagel() { 

    //function to obtain data from the begal section
    valid++; 
    var item = document.getElementById("bagel").checked;  

    //enter if begal is checked off
    if (item === true ){ 
      
      let bagelQty = document.querySelector("#bagelQty").value;
      
      //enter if no quantity is inputted
      if (bagelQty === ""){
        window.alert("No input for quantity. Please redo order");
      }

      //add begal and the the quantity to an array
      else{
        itemName.push(["Bagel"]);
        itemNum.push(bagelQty);
        checkGary();
      }
    }
      
    else{
        checkGary();
    }
    
}

function checkGary() {  

    //function to obtain data from the big gary section
    valid++;
    var item = document.getElementById("bigGarys").checked;
    
    //enter if big gary is checked off
    if (item === true ){ 
      
      let bigGarysQty = document.querySelector("#bigGarysyQty").value;
      
      //enter if no quantity is inputted
      if (bigGarysQty === ""){
        window.alert("No input for quantity. Please redo order");
      }

      //add big gary and the the quantity to an array
      else{
        itemName.push(["Big Gary"]);
        itemNum.push(bigGarysQty);
        
        checkTat();
      }
    }
      
    else{
        checkTat();
    }
    
    
}

function checkTat() {  

    //function to obtain data from the taters section
    valid++;
    var item = document.getElementById("taters").checked; 
    
    //enter if taters is checked off
    if (item === true ){ 
      
      let tatersQty = document.querySelector("#tatersQty").value;
      
      //enter if no quantity is inputted
      if (tatersQty === ""){
        window.alert("No input for quantity. Please redo order");
      }

      //add taters and the the quantity to an array
      else{
        itemName.push(["Taters"]);
        itemNum.push(tatersQty);
        
      }
    }

    else{
        checkSoup();
    }
}

function checkSoup() {  

    //function to obtain data from the soup section
    valid++;
    var item = document.getElementById("soup").checked; 
    
    //enter if soup is checked off
    if (item === true ){ 
      
      let soupQty = document.querySelector("#soupQty").value;

      //enter if no quantity is inputted  
      if (soupQty === ""){
        window.alert("No input for quantity. Please redo order");
      }

      //add taters and the the quantity to an array
      else{
      
        itemName.push(["Soup"]);
        itemNum.push(soupQty);
        
        checkChicken();
      }
    }
    else{
        checkChicken();
    }

}

function checkChicken() { 
    
    //function to obtain data from the fried chicken section
    valid++;
    var item = document.getElementById("friedChicken").checked;  

    //enter if chicken is checked off
    if (item === true ){ 
      
      let friedChickenQty = document.querySelector("#friedChickenQty").value;
      
      //enter if no quantity is inputted
      if (friedChickenQty === ""){
        window.alert("No input for quantity. Please redo order");
      }

      //add fried chicken and the the quantity to an array
      else{
        itemName.push(["Fried Chicken"]);
        itemNum.push(friedChickenQty);
        
        checkSalad();
      }
    }
    else{
        checkSalad();
    }
}

function checkSalad() {  

    //function to obtain data from the salad section
    valid++;
    var item = document.getElementById("salad").checked; 
    
    //enter if salad is checked off
    if (item === true ){ 
      
      let saladQty = document.querySelector("#saladQty").value;
      
      //enter if no quantity is inputted
      if (saladQty === ""){
        window.alert("No input for quantity. Please redo order");
      }

      //add fried chicken and the the quantity to an array
      else{
        itemName.push(["Salad"]);
        itemNum.push(saladQty);
        
        
        }
    }
}





