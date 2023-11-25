import "./App.css";
import Cart from "./componets/Cart";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PaymentSuccses from "./componets/PaymentSuccses";

function App() {
  return <>
  <Router>
    <Routes>
      <Route path="/" element={<Cart/>}/>
      <Route path="/paymentsuccess" element={<PaymentSuccses/>}/>
    </Routes>
  </Router>
  </>;
}

export default App;
