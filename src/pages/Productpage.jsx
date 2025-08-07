import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductPage = () => {
  const [product, setProduct] = useState([]);
  const [category,setcategory] = useState(null)
  const [search,setsearch]= useState("")
  const [page,setpage]=useState(1)
  const [price,setprice]=useState(null)
  const [order,setorder]=useState(null)

  function getDataFromServer() {
    axios
      .get("https://mini-ecommerce-be.onrender.com/product", {
        params: {
          category:category,
          q:search,
          _page:page,
          _limit: 10,
          _sort:price,
          _order:order,
        }
      })
      .then((res) => {
        console.log(res);
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const handlecart = async (productItem) => {
  try {
    const { data } = await axios.get('https://mini-ecommerce-be.onrender.com/cart');
    const cartdata = data.find((el) => el.id === productItem.id);
    
    if (!cartdata) {
      await axios.post('https://mini-ecommerce-be.onrender.com/cart', {
        ...productItem,
        quantity: 1
      });
      alert("Product added to cart successfully");
    } else {
      alert("Product is already in the cart");
    }
  } catch (error) {
    console.log("Cart Error:", error);
  }
};


  useEffect(() => {
    getDataFromServer();
  }, [category,search,page,price,order]);

  return (
    <div style={styles.pageWrapper}>
      <div style={styles.filterWrapper}>
        <input type="text" placeholder="Search products..." style={styles.searchInput} onChange={(e)=>setsearch(e.target.value)} />
        <select style={styles.select} onChange={(e)=>setcategory(e.target.value)}>
          <option value="null">All Categories</option>
          <option value="men's clothing">Mens</option>
          <option value="women's clothing">Womens</option>
          <option value="jewelery">Jewellery</option>
          <option value="electronics">Electronics</option>
        </select>
        <select onChange={(e)=>{
          const value =e.target.value ;
          if(value=="lowtohigh"){
            setprice("price");
            setorder("asc");
          }else if(value=="hightolow"){
            setprice("price");
            setorder("desc");
          } else{
            setprice(null);
            setorder(null);
          }
        }} style={styles.select}>
          <option value="">Sort By</option>
          <option value="lowtohigh" >Price: Low to High</option>
          <option value="hightolow">Price: High to Low</option>
        </select>
      </div>

      <div style={styles.productsWrapper}>
        {product.map((el) => (
          <div key={el.id} style={styles.container}>
            <h1 style={styles.title}>{el.title}</h1>
            <Link to={`/description/${el.id}`}>
              <img src={el.image} alt={el.title} style={styles.image} />
            </Link>
            <p><strong>Category:</strong> {el.category}</p>
            <p><strong>Description:</strong> {el.description.substring(0, 10)}</p>
            <p><strong>Price:</strong> ${el.price}</p>
          </div>
        ))}
      </div>
      <div>
        <button disabled={page===1} onClick={() => setpage((prev) =>(prev - 1))} style={styles.buttonprev}>Previos</button><span>  {page}  </span><button disabled={page===2} onClick={() => setpage((prev) => prev + 1)} style={styles.buttonprev}>Next</button>
      </div>
    </div>
  );
};

const styles = {
  pageWrapper: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: "#f9f9f9",
  },
  filterWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "1rem",
    padding: "1.5rem",
    flexWrap: "wrap",
    backgroundColor: "#fff",
    borderBottom: "1px solid #ddd",
    width: "100%",
    boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
  },
  searchInput: {
    padding: "0.6rem 1rem",
    fontSize: "1rem",
    border: "1px solid #ccc",
    borderRadius: "8px",
    width: "250px",
    outline: "none",
    transition: "border-color 0.3s ease",
  },
  select: {
    padding: "0.6rem 1rem",
    fontSize: "1rem",
    border: "1px solid #ccc",
    borderRadius: "8px",
    width: "200px",
    outline: "none",
    backgroundColor: "#fff",
    transition: "border-color 0.3s ease",
  },
  productsWrapper: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "1.5rem",
    padding: "2rem",
    width: "100%",
    maxWidth: "1300px",
  },
  container: {
    width: "300px",
    padding: "1.5rem",
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    transition: "transform 0.2s ease",
  },
  image: {
    width: "100%",
    maxHeight: "200px",
    objectFit: "contain",
    marginBottom: "1rem",
  },
  button: {
    padding: "0.7rem 1.2rem",
    fontSize: "1rem",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    marginTop: "1rem",
    transition: "background-color 0.3s ease",
  },
  title: {
    fontSize: "1.1rem",
    marginBottom: "0.5rem",
    fontWeight: "600",
    textAlign: "center",
  },
  buttonprev:{
    backgroundColor:"blue",
    padding:"10px",
    borderRadius:"20px",
    fontSize:"20px",
    color:"white"
  },
  buttonnext:{
    backgroundColor:"blue",
    padding:"10px",
    borderRadius:"20px",
    fontSize:"20px",
    color:"white"
  }

};

export default ProductPage;
