import React from 'react';
import { useLocation } from 'react-router-dom';
import './Checkout.css';

function Checkout() {
  const location = useLocation();
  const selectedOils = location.state?.selectedOils || [];

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const phone = formData.get('phone');
    const email = formData.get('email');

    alert(`Thank you, ${name}, for your order!\n\nWe appreciate that you want to try our products — you deserve better hair!\n\n📞 Phone: ${phone}\n📧 Email: ${email}`);
  };

  return (
    <div className="checkout-page">
      <div className="checkout">
        <h1>Checkout</h1>
        <p>Enter your details below to confirm your purchase.</p>

        <h2>Selected Oils:</h2>
        <ul>
          {selectedOils.map((oil, index) => (
            <li key={index}>
              {oil.name} - {oil.price}
            </li>
          ))}
        </ul>

        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" required />
          </label>
          <label>
            Phone Number:
            <input type="tel" name="phone" required />
          </label>
          <label>
            Email:
            <input type="email" name="email" required />
          </label>
          <label>
            Address:
            <textarea name="address" required />
          </label>
          <button type="submit">Confirm</button>
        </form>
      </div>
    </div>
  );
}

export default Checkout;