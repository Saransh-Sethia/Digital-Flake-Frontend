import React, { useState, useEffect } from "react";
import "./Categories.css";
import Sidebar from "../Sidebar/Sidebar";
import HorizontalNavbar from "../Navbar/HorizontalNavbar";
import categoryIcon from '../assets/category-2.png'
import { useNavigate } from "react-router-dom";
import TableComponent from "./Table";
import { TextField } from "@mui/material";
import axios from 'axios';
import config from "../../config";


const Categories = ({categories, setCategories, deleteCategory, query, setQuery}) => {
  const navigate = useNavigate();

  

  // const keys = ["title","status"];

  // const search = (data) => {
  //   const updatedData = data.filter((item) => (
  //     keys.some((key) => item[key].toLowerCase().includes(query))
  //   ));
  //   setCategories(updatedData)
  // };

  // useEffect(()=>{
  //   search(categories);
  // },[query, categories])
  return (
    <>
      <HorizontalNavbar />
      
      <div className="header">
      <Sidebar />
      <div>
      <div className="header-1">
        <div className="header-2">
        <img src={categoryIcon} alt="category"/>
        <h2>Category</h2>
          
        </div>
        <TextField
          type="search"
          placeholder="search categories"
          value={query}
          onChange={(e)=>setQuery(e.target.value)}
          style={{marginTop:'10px', borderRadius:'5px'}}
          fullwidth
        />
        <div className="button-3" onClick={()=>navigate('/categoryInput')}>Add New</div>
        </div>
        <TableComponent categories={categories} setCategories={setCategories} deleteCategory={deleteCategory} />
        </div>
      </div>
    </>
  );
};

export default Categories;
