function shippingCost(){
    let orderCost = Number(document.getElementById("totalOrder").value);
    let isPremium = document.getElementById("isPremium").value === "true";

    let shipping = (isPremium || orderCost > 20)?document.getElementById("shippingCost").textContent = "The shipping cost is free":document.getElementById("shippingCost").textContent = "The shipping cost is 2 dollars"
}