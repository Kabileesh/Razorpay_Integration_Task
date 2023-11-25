import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./Payment/pages/Cart";
import Razorpay from "./Payment/pages/Payment";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" Component={Cart} />
          <Route path="/payment" Component={Razorpay} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
