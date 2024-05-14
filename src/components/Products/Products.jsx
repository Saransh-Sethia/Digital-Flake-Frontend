import React, { useEffect, useState } from "react";
import "./Products.css";
import Sidebar from "../Sidebar/Sidebar";
import HorizontalNavbar from "../Navbar/HorizontalNavbar";
import categoryIcon from '../assets/category-2.png'
import { useNavigate } from "react-router-dom";
import TableComponent from "./Table";
import { TextField } from "@mui/material";

const Products = ({products, setProducts, deleteProduct}) => {
  const [query, setQuery] = useState("");

  const keys = ["name","category","status"];

  const search = (data) => {
    const updatedData = data.filter((item) => (
      keys.some((key) => item[key].toLowerCase().includes(query))
    ));
    setProducts(updatedData)
  };


  useEffect(()=>{
    search(products);
  },[query, products])
  const navigate = useNavigate();
  return (
    <>
      <HorizontalNavbar />
      
      <div className="header">
      <Sidebar />
      <div>
      <div className="header-1">
        <div className="header-2">
        <img src={categoryIcon} alt="category"/>
        <h2>Products</h2>
          
        </div>
        <TextField
          type="search"
          placeholder="search products"
          value={query}
          onChange={(e)=>setQuery(e.target.value)}
          style={{marginTop:'10px', borderRadius:'5px'}}
          fullwidth
        />
        <div className="button-3" onClick={()=>navigate('/productInput')}>Add New</div>
        </div>
        <TableComponent products={products} setProducts={setProducts} deleteProduct={deleteProduct} />
        </div>
      </div>
    </>
  );
};

export default Products;