import React, { useEffect, useState } from "react";
import "../styles/CartPage.css";
import axios from "axios";

const Cartpage = () => {
  const [cartdata, setcartdata] = useState([]);

  function cartfinaldata() {
    axios
      .get("https://mini-ecommerce-be.onrender.com/cart")
      .then((res) => {
        setcartdata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const handleremove = (id) => {
    axios.delete(`https://mini-ecommerce-be.onrender.com/cart/${id}`)
    .then((res)=> {
      console.log(res.data)
      alert("product removed from cart successfully")
      cartfinaldata()
    })
    .catch((err) => {
      console.log(err)
    })
  }

  const handleupdateqty = async (id, btntype) => {
  try {
    const { data } = await axios.get(`https://mini-ecommerce-be.onrender.com/cart/${id}`);
    const currentQty = data.quantity;

    if (btntype === "decreement" && currentQty <= 1) {
      return; // do nothing
    }

    const updatedQty = btntype === "increement" ? currentQty + 1 : currentQty - 1;

    await axios.patch(`https://mini-ecommerce-be.onrender.com/cart/${id}`, {
      quantity: updatedQty,
    });

    cartfinaldata();
  } catch (error) {
    console.log(error);
  }
};
  
  let totalprice=0
  cartdata.forEach((el)=>totalprice+=el.price*el.quantity)
  
  

  useEffect(() => {
    cartfinaldata();
  }, []);

  return (
    <div className="cart-container">
      <h1 className="cart-title">Shopping Cart</h1>

      {cartdata.map((el) => (
        <div key={el.id} className="cart-item">
          <div className="item-details">
            <img
              src={el.image}
              alt={el.title}
              className="product-image"
            />
            <div className="item-text">
              <h2>{el.title}</h2>
              <p>Price: ${el.price}</p>
            </div>
          </div>

          <div className="item-actions">
            <button className="qty-btn" onClick={()=>handleupdateqty(el.id,"decreement")}>-</button>
            <span className="item-quantity">qty:{el.quantity}</span>
            <button className="qty-btn" onClick={()=>handleupdateqty(el.id,"increement")}>+</button>
            <button className="remove-button" onClick={()=>handleremove(el.id)}>Remove</button>
          </div>
        </div>
      ))}

      <div className="cart-total">
        <h2>Total:${totalprice.toFixed(2)}</h2>
      </div>
    </div>
  );
};

export default Cartpage;
