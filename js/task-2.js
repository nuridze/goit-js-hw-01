<<<<<<< Updated upstream
function getShippingMessage(country,price,deliveryFee) {

    return `Shipping to ${country} will cost ${price + deliveryFee} credits`;
   
   }
   
   console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
   console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
   console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"
=======
function formatMessage(message, maxLength){
    if (message.length >= maxLength){
        return message.slice (0, maxLength)+ "...";
    } 
    else {return message};
}


console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis in nunc fringilla"
>>>>>>> Stashed changes
