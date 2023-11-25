import Bill from "../components/Bill";
import Header from "../components/Header";
import OrdersList from "../components/OrdersList";

const Cart = () => {
  return (
    <div>
      <div className="flex-col bg-white">
        <Header />
        <OrdersList />
        <hr className="w-5/6 h-1 mx-auto bg-slate-300 border-0 rounded md:my-10 dark:bg-gray-700" />
        <Bill />
      </div>
    </div>
  );
};

export default Cart;
