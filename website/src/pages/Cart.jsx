
import { useCart } from "../context/CartContext";
import Header from "../components/Header"
import Footer from "../components/Footer";

function CartPage() {
  const { cart, removeFromCart } = useCart();

  return (
    <><div>
     <Header /> <br /> <br /> <br /> <br />
   </div>
   <div className="min-h-screen p-6 bg-gray-100">
       <h1 className="mb-6 text-3xl font-bold text-center">Your Cart</h1>

       {cart.length === 0 ? (
         <p className="text-center text-gray-600">Your cart is empty.</p>
       ) : (
         <div className="grid max-w-4xl gap-4 mx-auto">
           {cart.map((item) => (
             <div
               key={item.id}
               className="flex items-center justify-between p-4 bg-white shadow rounded-xl"
             >
               <div className="flex items-center gap-4">
                 <img
                   src={item.image}
                   alt={item.name}
                   className="object-cover w-20 h-20 rounded-xl" />

                 <div>
                   <h2 className="font-semibold">{item.name}</h2>
                   <p className="font-bold text-green-600">₹{item.price}</p>
                 </div>
               </div>

               <button
                 onClick={() => removeFromCart(item.id)}
                 className="px-4 py-2 text-white bg-red-500 rounded-lg"
               >
                 Remove
               </button>
             </div>
           ))}
         </div>
       )}
       <Footer />
     </div></>
  );
}

export default CartPage;
