//For extra memory cost
function memoryCost(memoryId,isIncreasing){
    const memoryCost=document.getElementById(memoryId);
    if(isIncreasing==true){
        memoryCost.innerText=0;
    }
    else{
    memoryCost.innerText=180;
    }  
}
//For extra storage cost
const storageCost=document.getElementById('storage-cost');
//For delivery charge
function deliveryCharge(deliveryId,isAdd){
    const deliveryCost=document.getElementById(deliveryId);
    if(isAdd==true){
        deliveryCost.innerText=0;
    }
    else{
        deliveryCost.innerText=20;
    }  
}
// for total price
function updateTotal(){
    const memoryCostText=document.getElementById('memory-cost');
    const memoryCost=parseInt(memoryCostText.innerText);
    const deliveryCostText=document.getElementById('delivery-charge');
    const deliveryCost=parseInt(deliveryCostText.innerText);
    const storageCostText=document.getElementById('storage-cost');
    const storageCost=parseInt(storageCostText.innerText);
    const totalAmmount=1299+memoryCost+deliveryCost+storageCost;
    const updateTotal=document.getElementById('total-price');
    updateTotal.innerText=totalAmmount;
    // final total for everything
    const finalTotal=document.getElementById('final-total');
    finalTotal.innerText=totalAmmount;
}
// event handler for Extra memory cost 
document.getElementById('button-8GB').addEventListener('click',function(){
   memoryCost('memory-cost',true);
   updateTotal();  
})
document.getElementById('button-16GB').addEventListener('click',function(){
    memoryCost('memory-cost',false);
    updateTotal(); 
})
//  event handler for Extra storage cost
document.getElementById('button-256GB').addEventListener('click',function(){
    storageCost.innerText=0;
    updateTotal();
})
document.getElementById('button-512GB').addEventListener('click',function(){
    storageCost.innerText=100;
    updateTotal();   
})
document.getElementById('button-1TB').addEventListener('click',function(){
    storageCost.innerText=180;
    updateTotal();
})
//  event handler for delivery charge
document.getElementById('free-delivery').addEventListener('click',function(){
    deliveryCharge('delivery-charge',true);
    updateTotal();
 })
 document.getElementById('charge-delivery').addEventListener('click',function(){
    deliveryCharge('delivery-charge',false);
    updateTotal();    
 })
 //  use pomo code with discount and final ammount
 document.getElementById('apply-btn').addEventListener('click',function(){
     const finalTotal=document.getElementById('final-total');  
     const inputField=document.getElementById('input-field');
     const inputFieldText=inputField.value;
     const totalPrice=document.getElementById('total-price');
     const totalAmmount=parseInt(totalPrice.innerText);
     inputField.value='';
     if(inputFieldText=='stevekaku'){
          finalTotal.innerText  =(totalAmmount*80)/100
      }   
 })
 