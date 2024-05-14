import React, { useState } from "react";
import "./CategoryInput.css";
import HorizontalNavbar from "../Navbar/HorizontalNavbar";
import Sidebar from "../Sidebar/Sidebar";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


const CategoryInput = ({formCategory, setFormCategory, handleCreateCategory}) => {


const handleInput = (event) => {
  const {name, value} = event.target;
  setFormCategory((prevVl) => ({...prevVl, [name]:value}))
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
              onClick={() => navigate("/api/categories")}
              style={{ cursor: "pointer" }}
            />
            <h3>Add Category</h3>
          </div>
          <div className="form-input">
          <TextField
            id="title"
            label="Title"
            variant="outlined"
            title="title"
            name="title"
            onChange={handleInput}
            value={formCategory.title}
          />
          <TextField
            id="description"
            label="Description"
            variant="outlined"
            title="description"
            name="description"
            onChange={handleInput}
            value={formCategory.description}
          />
          <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={formCategory.status}
          name="status"
          onChange={handleInput}
        >
          <MenuItem value="Active">Active</MenuItem>
          <MenuItem value="Inactive">Inactive</MenuItem>
        </Select>
        
          </div>
          <div className="buttons">
          <div className="form-button" onClick={handleCreateCategory}>Add</div>
          <div className="cancel-button" onClick={()=>navigate("/api/categories")}>Cancel</div>
          </div>
        </div>
       
      </div>
    </>
  );
};

export default CategoryInput;
