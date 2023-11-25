import React from "react";
import axios from "axios";
import "../App.css"
import apple from "../images/apple.png"
import veg from "../images/veg.png"
import grapes from "../images/grapes.png"

function Cart() {
  const amount = 500;
  const checkoutHandler = async () => {
    const { data } = await axios.post("http://localhost:8000/api/checkout", {
      amount,
    });
    console.log(data);
    // console.log(response);
    var options = {
      key: "rzp_test_VlFpkoKDMBBvFC",
      amount: data.data.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Anurag Pandey",
      description: "Leaning Payment integration",
      image: "https://example.com/your_logo",
      order_id: data.data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      callback_url: "http://localhost:8000/api/paymentVerification",
      prefill: {
        name: "Gaurav Kumar",
        email: "gaurav.kumar@example.com",
        contact: "9000090000",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    var rzp1 = new window.Razorpay(options);
    rzp1.open();
  };
  return (
    <div class="main-body">
     <div class="CartContainer">
   	   <div class="Header">
   	   	<h3 class="Heading">Shopping Cart</h3>
   	   	<h5 class="Action">Remove all</h5>
   	   </div>

   	   <div class="Cart-Items">
   	   	  <div class="image-box">
   	   	  	<img src={apple} style={{ height:"120px" }} />
   	   	  </div>
   	   	  <div class="about">
   	   	  	<h1 class="title">Apple Juice</h1>
   	   	  	<h3 class="subtitle">250ml</h3>
   	   	  	<img src={veg} style={{ height:"30px" }}/>
   	   	  </div>
   	   	  <div class="counter">
   	   	  	<div class="btn">+</div>
   	   	  	<div class="count">2</div>
   	   	  	<div class="btn">-</div>
   	   	  </div>
   	   	  <div class="prices">
   	   	  	<div class="amount">$2.99</div>
   	   	  	<div class="save"><u>Save for later</u></div>
   	   	  	<div class="remove"><u>Remove</u></div>
   	   	  </div>
   	   </div>

   	   <div class="Cart-Items pad">
   	   	  <div class="image-box">
   	   	  	<img src={grapes} style={{ height:"120px" }} />
   	   	  </div>
   	   	  <div class="about">
   	   	  	<h1 class="title">Grapes Juice</h1>
   	   	  	<h3 class="subtitle">250ml</h3>
   	   	  	<img src={veg} style={{ height:"30px" }}/>
   	   	  </div>
   	   	  <div class="counter">
   	   	  	<div class="btn">+</div>
   	   	  	<div class="count">1</div>
   	   	  	<div class="btn">-</div>
   	   	  </div>
   	   	  <div class="prices">
   	   	  	<div class="amount">$3.19</div>
   	   	  	<div class="save"><u>Save for later</u></div>
   	   	  	<div class="remove"><u>Remove</u></div>
   	   	  </div>
   	   </div>
   	 <hr/> 
   	 <div class="checkout">
   	 <div class="total">
   	 	<div>
   	 		<div class="Subtotal">Sub-Total</div>
   	 		<div class="items">2 items</div>
   	 	</div>
   	 	<div class="total-amount">$6.18</div>
   	 </div>
   	 <button class="button" onClick={checkoutHandler}>Checkout</button></div>
   </div>
    </div>
  );
}

export default Cart;

// <button className="btn" onClick={checkoutHandler}>
//               CHECKOUT
//             </button>
