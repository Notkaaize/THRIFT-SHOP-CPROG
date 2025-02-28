let cart = [];
let cartTotal = 0;

function addToCart(name, price) {
  cart.push({ name, price });
  document.getElementById('cart-count').innerText = cart.length;

  const cartItems = document.getElementById('cart-items');
  const li = document.createElement('li');
  li.textContent = ${name} - ₱${price};
  cartItems.appendChild(li);

  cartTotal += price;
  document.getElementById('cart-total').innerText = cartTotal;
}

function togglePaymentMethod() {
  const paymentMethod = document.getElementById('payment-method').value;
  const cardInfo = document.getElementById('card-info');
  cardInfo.style.display = (paymentMethod === 'cod') ? 'none' : 'block';
}

function completeCheckout() {
  if (cart.length > 0) {
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const zip = document.getElementById('zip').value;
    const country = document.getElementById('country').value;
    const mobile = document.getElementById('mobile-number').value;

    // You can add validation or additional checks here
    // For now, just display a thank you message
    document.getElementById('checkout-message').style.display = 'block';

    // Clear cart
    cart = [];
    cartTotal = 0;
    document.getElementById('cart-count').innerText = '0';
    document.getElementById('cart-items').innerHTML = '';
    document.getElementById('cart-total').innerText = '0';

    // Reset form
    document.getElementById('checkout-form').reset();
    togglePaymentMethod(); // Hide card info if needed
  } else {
    alert('Your cart is empty. Please add items before checking out.');
  }
}

// Hide card info by default if you prefer
document.addEventListener('DOMContentLoaded', () => {
  togglePaymentMethod();
});