import React from "react";
import { useSearchParams } from "react-router-dom";

function PaymentSuccses() {
  const searchQuery = useSearchParams()[0];
  const reference = searchQuery.get("ref")
  return <div className="card">
   <div class="img"></div>
  <div class="textBox">
    <div class="textContent">
      <p class="h1">Payment Success</p>
     
    </div>
    <p class="p">{reference}</p>
  <div>
</div></div>
      
  </div>;
}

export default PaymentSuccses;
