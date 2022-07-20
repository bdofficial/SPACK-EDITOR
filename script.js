 let array = new Array();
function add_element() {
  qtx =document.getElementById("qty").value;
    qty = document.getElementById("qty").value*32;
    let arrQty = "";
    let arrTotal = 0;
    if (qty !=""){
           array.push({
            quantity:qty+"."+qtx+".32-smart\n"});
        for (i = 0; i < array.length; i++) {
         arrQty+=array[i].quantity;
        dispqty.innerHTML=arrQty;
        if(parseInt(array[i].quantity))
         arrTotal +=parseInt(array[i].quantity);
        dispqty.innerHTML += "\nTotal="+arrTotal;
        }
    }
}






function add_element1() {
  qtx =document.getElementById("qty1").value;
    qty = document.getElementById("qty1").value*3;
    let arrQty = "";
    let arrTotal = 0;
    if (qty !=""){
           array.push({
            quantity:qty+"."+qtx+".3-sabbir\n"});
        for (i = 0; i < array.length; i++) {
         arrQty+=array[i].quantity;
        dispqty.innerHTML=arrQty;
        if(parseInt(array[i].quantity))
         arrTotal +=parseInt(array[i].quantity);
        dispqty.innerHTML += "\nTotal="+arrTotal;
        }
    }
}

