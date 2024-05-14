import React, { useState } from "react";
import "./ProductInput.css";
import HorizontalNavbar from "../Navbar/HorizontalNavbar";
import Sidebar from "../Sidebar/Sidebar";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


const ProductInput = ({formProduct, setFormProduct, handleCreateProduct}) => {


const handleInput = (event) => {
  const {name, value} = event.target;
  setFormProduct((prevVl) => ({...prevVl, [name]:value}))
}
  const navigate = useNavigate();
  return (
    <>
      <HorizontalNavbar />
      <div className="heading-1">
        <Sidebar />
        <div className="heading-2">
          <div className="heading-3">
            <KeyboardBackspaceIcon
              onClick={() => navigate("/api/products")}
              style={{ cursor: "pointer" }}
            />
            <h3>Add Product</h3>
          </div>
          <div className="form-input">
          <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={formProduct.category}
          name="category"
          onChange={handleInput}
        >
          <MenuItem value="Milk">Milk</MenuItem>
          <MenuItem value="Fruits">Fruits</MenuItem>
        </Select>
          <TextField
            id="name"
            label="Product Name"
            variant="outlined"
            title="name"
            name="name"
            onChange={handleInput}
            value={formProduct.name}
          />
          <TextField
            id="quantity"
            label="Quantity"
            variant="outlined"
            title="quantity"
            name="quantity"
            onChange={handleInput}
            value={formProduct.quantity}
          />
          <TextField
            id="price"
            label="Price"
            variant="outlined"
            title="Price"
            name="price"
            onChange={handleInput}
            value={formProduct.price}
          />
          <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={formProduct.status}
          name="status"
          onChange={handleInput}
        >
          <MenuItem value="Active">Active</MenuItem>
          <MenuItem value="Inactive">Inactive</MenuItem>
        </Select>
        
          </div>
          <div className="buttons">
          <div className="form-button" onClick={handleCreateProduct}>Add</div>
          <div className="cancel-button" onClick={()=>navigate("/api/products")}>Cancel</div>
          </div>
        </div>

      </div>
    </>
  );
};

export default ProductInput;
