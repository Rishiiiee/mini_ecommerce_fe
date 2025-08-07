import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const Descriptionpage = () => {
  const [product, setproduct] = useState({});
  const { id } = useParams();

  function getsingaldatafromserver() {
    axios
      .get(`http://localhost:3000/product/${id}`)
      .then((res) => {
        setproduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const handlecart = async()=> {
    try {
      const {data} =await axios.get('https://mini-ecommerce-be.onrender.com/cart')
      const cartdata=data.find((el)=>el.id==id)
      console.log(cartdata)
      if(!cartdata) {
       await axios.post('https://mini-ecommerce-be.onrender.com/cart',{...product,quantity:1})
        .then((res)=>{
          alert("product added in cart successfully")
        }).catch((err)=> {
          console.log(err)
        })

      }else {
        alert("product is already in the cart")
      }
    } catch (error) {
     console.log(error) 
    }
  }

  useEffect(() => {
    getsingaldatafromserver();
  }, []);

  return (
    <>
      <h1 style={styles.heading}>✨ Product Details ✨</h1>
      <div style={styles.page}>
        <div style={styles.card}>
          <img src={product.image} alt={product.title} style={styles.image} />
          <div style={styles.details}>
            <h2 style={styles.title}>{product.title}</h2>
            <p style={styles.category}>📂 <span>{product.category}</span></p>
            <p style={styles.description}>{product.description}</p>
            <div style={styles.rating}>
              <span>⭐ {product?.rating?.rate}</span>
              <span>({product?.rating?.count} reviews)</span>
            </div>
            <h3 style={styles.price}>${product.price}</h3>
            <button style={styles.button} onClick={handlecart}>🛒 Add to Cart</button>
            <Link to="/product" style={styles.backLink}>← Back to Products</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Descriptionpage;
const styles = {
    heading: {
      textAlign: "center",
      fontSize: "2.2rem",            
      color: "#444",
      margin: "1rem 0 0.5rem",       
      fontWeight: 700,
      fontFamily: "'Poppins', sans-serif",
    },
    page: {
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",      
      padding: "1.5rem",             
      background: "linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)",
      minHeight: "100vh",
    },
    card: {
      display: "flex",
      flexDirection: "row",
      width: "950px",                
      backgroundColor: "#ffffff",
      borderRadius: "18px",
      boxShadow: "0 10px 28px rgba(0, 0, 0, 0.12)",
      overflow: "hidden",
    },
    details: {
        padding: "1.5rem",
        width: "50%",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",                   
      },
    image: {
      width: "50%",
      objectFit: "cover",
      filter: "brightness(98%)",
    },
  title: {
    fontSize: "1.8rem",
    marginBottom: "1rem",
    fontWeight: "600",
    color: "#333",
  },
  category: {
    fontSize: "1rem",
    color: "#888",
    marginBottom: "1rem",
  },
  description: {
    fontSize: "1.1rem",
    lineHeight: "1.6",
    color: "#555",
    marginBottom: "1.5rem",
  },
  rating: {
    fontSize: "1rem",
    color: "#444",
    display: "flex",
    gap: "0.7rem",
    marginBottom: "1.5rem",
  },
  price: {
    fontSize: "2rem",
    fontWeight: "700",
    color: "#00b894",
    marginBottom: "1.5rem",
  },
  button: {
    padding: "0.8rem 1.5rem",
    fontSize: "1rem",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    marginTop: "1rem",        
    alignSelf: "flex-start",  
  },
  
  backLink: {
    marginTop: "1rem",
    fontSize: "0.95rem",
    color: "#666",
    textDecoration: "none",
    transition: "color 0.2s",
  },
};
