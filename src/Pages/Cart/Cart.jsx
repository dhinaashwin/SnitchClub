import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../Context/ShopContext";
import { Link } from "react-router-dom";
import Add from "../../images/more.png";
import Minus from "../../images/minus.png";
import './Cart.css'
const Cart = () => {
  const { Datas, cartItems, addToCart, removeFromCart,removeFromCartAll } =
    useContext(ShopContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Set loading to true when API endpoint changes
    setLoading(true);

    // Simulate API call delay
    const delay = setTimeout(() => {
      setLoading(false);
    }, 1500);

    // Clean up the timeout to prevent memory leaks
    return () => clearTimeout(delay);
  }, [Datas]); // Watch for changes in the Datas array

  // Function to calculate total order value
  const calculateTotalOrderValue = () => {
    let total = 0;
    Datas.forEach((data) => {
      const item = cartItems[data.id];
      if (item) {
        Object.keys(item).forEach((size) => {
          total += data.new_price * item[size];
        });
      }
    });
    return total;
  };

  // Function to calculate delivery charge
  const calculateDeliveryCharge = () => {
    const totalOrderValue = calculateTotalOrderValue();
    return totalOrderValue >= 2000 ? 0 : 100;
  };

  const handleIncrement = (itemId, size) => {
    addToCart(itemId, size);
  };

  const handleDecrement = (itemId, size) => {
    removeFromCart(itemId, size);
  };
  const handleRemove = (itemId, size) => {
    removeFromCartAll(itemId, size);
  };

  return (
    <div className="Parent-cart mt-32  flex items-center w-full relative">
      {loading ? ( // Display loader if loading state is true
        <div class="loader"></div>
      ) : (
        <div className="boxes flex xsm:flex-col md:flex-row items-center justify-center w-full gap-10">
          <div className="box-1 md:w-[70%] xsm:w-full">
            {cartItems &&
            Object.keys(cartItems).some(
              (id) => Object.keys(cartItems[id]).length > 0
            ) ? (
              <div className="flex flex-col gap-3">
                {Datas.map((data) => {
                  const item = cartItems[data.id];
                  const sizes = Object.keys(item);
                  return sizes.map((size, index) => (
                    <div
                      className="flex flex-col items-center px-10 py-14 relative"
                      style={{
                        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                        borderRadius: "8px", // Optional: Add border radius for rounded corners
                      }}
                      key={`${data.id}_${index}`}
                    >
                      <div className="flex md:gap-16 xsm:gap-8 items-center">
                        <img
                          src={data.image}
                          className="w-[12%] h-[12%]"
                          alt=""
                        />
                        <div className="flex flex-col gap-[5px]">
                          <Link className="flex flex-col gap-[3px]"
                            to={`ShopSpot/product/${data.id}`}
                            key={`${data.id}_${index}`}
                          >
                            <h2 className="Type font-sb">{data.Category_Type} </h2>
                            <h3
                              style={{ ":hover": { color: "red" } }}
                              className=" "
                            >
                              {data.title}
                            </h3>
                          </Link>
                          <div className="flex flex-col">
                          <h2 className="font-sb">Rs {data.new_price}</h2>
                          <h3>Size: {size}</h3> {/* Render the selected size */}
                          <div className="flex items-center gap-6 absolute bottom-3">
                            <img
                              src={Minus}
                              className="md:w-6 h-fit xsm:w-4 "
                              onClick={() => handleDecrement(data.id, size)}
                            ></img>
                            <h3>{item[size]}</h3>
                            <img
                              src={Add}
                              className="md:w-6 h-fit xsm:w-4 "
                              onClick={() => handleIncrement(data.id, size)}
                            ></img>
                            <h3 className="w-fit h-fit bg-red-700 text-white px-[10px] "
                             onClick={() => handleRemove(data.id,size)}
                            >
                              Remove
                            </h3>
                            </div>
                            <p className="absolute right-6 bottom-1 text-[24px]">
                            <span className="font-sb">
                              Rs {data.new_price * item[size]}
                            </span>
                          </p>
                          </div>
                        </div>
          
                      </div>
                    </div>
                  ));
                })}
              </div>
            ) : (
              <div className="flex items-center py-36">
                <h1 className="text-center">The Shopping Cart is empty</h1>
              </div>
            )}
          </div>
          {/* Only render the order details if there are items in the cart */}
          {cartItems &&
            Object.keys(cartItems).some(
              (id) => Object.keys(cartItems[id]).length > 0
            ) && <div className="flex flex-col gap-4">
                  <div className="flex gap-10">
                    <div className="flex flex-col gap-2">
                    <h3 >Order Value</h3>
                    <h3>Delivery Charge</h3>
                    <h3 className="font-sb">Total</h3>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3>: Rs{" "}{calculateTotalOrderValue()}</h3>
                      <h3>: Rs{" "}{calculateDeliveryCharge()}</h3>
                      <h3 className="font-b">: Rs{" "}{calculateTotalOrderValue() + calculateDeliveryCharge()} </h3>
                  </div>
                  </div>
                  <div className="btn">
                    <button className=""> Proceed To checkout</button>
                   
                  </div>
              </div>}
        </div>
      )}
    </div>
  );
};

export default Cart;
