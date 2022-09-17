function solve() {
   let button = document.getElementsByTagName("button")
   let textArea = document.getElementsByTagName("textarea")[0]

   let objectOfProducts = {}

   Array.from(button).forEach(b => {
       b.addEventListener("click", (e) => {
           if (e.target.className === "add-product") {
               let currentElement = e.target.parentElement

               let priceElement = Number(currentElement.nextElementSibling.innerHTML)
               let productElement = currentElement.previousElementSibling.children[0].innerHTML

               if (!objectOfProducts[productElement]) {
                   objectOfProducts[productElement] = 0
               }
               objectOfProducts[productElement] += priceElement

               textArea.innerHTML += `Added ${productElement} for ${priceElement.toFixed(2)} to the cart.\n`
           } else {

               let totalPrice = Number(Object.values(objectOfProducts).reduce((a,b)=>a+b,0))                
               textArea.innerHTML+=`You bought ${Object.keys(objectOfProducts).join(', ')} for ${totalPrice.toFixed(2)}.`
               
               Array.from(button).forEach(b => b.disabled = true)

           }
       })
   })
   
   // // add buttons 
   // let addingButtons = document.querySelectorAll('div button[class="add-product"]');

   // // text field is a blank space non-typable
   // let textField = document.querySelector('div textarea');
   
   // // product names collection
   // let productsCollection = document.querySelectorAll('div div[class="product-title"]');
   // // product prices collection
   // let productPricesCollection = document.querySelectorAll('div div[class="product-line-price"]');

   // let addProduct = function (e){
   //    for (let product of productsCollection){

   //    }
   
   // }
   // for(let button of addingButtons){
   //    button.addEventListener('click', addProduct);
   // }
   

   

}