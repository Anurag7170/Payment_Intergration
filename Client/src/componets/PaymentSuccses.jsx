import React from "react";
import { useSearchParams } from "react-router-dom";

function PaymentSuccses() {
  const searchQuery = useSearchParams()[0];
  const reference = searchQuery.get("ref")
  return <div>
    PaymentSuccses : {reference}
  </div>;
}

export default PaymentSuccses;
