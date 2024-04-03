function solve() {
   const buttons = document.querySelectorAll('.add-product');
   const textAreaElement = document.querySelector('.shopping-cart textarea');
   const checkoutButton = document.querySelector('.checkout');

   let boughtProducts = {};
   Array.from(buttons).forEach(button => {
      button.addEventListener('click', (e) => {

         let product = e.target.parentElement.parentElement;

         let productName = product.querySelector('.product-title').textContent;
         let productPrice = Number(product.querySelector('.product-line-price').textContent);

         textAreaElement.value += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;

         if (!boughtProducts.hasOwnProperty(productName)) {
            boughtProducts[productName] = 0;
         }

         boughtProducts[productName] += productPrice;
      })
   })

   checkoutButton.addEventListener('click', (e) => {

      textAreaElement.value += `You bought ${Object.keys(boughtProducts).join(", ")} for ${Object.values(boughtProducts).reduce((sum, price) => sum += price, 0).toFixed(2)}.`;

      Array.from(buttons).forEach(button => {
         button.disabled = true;
      })
      e.target.disabled = true;
   })
}