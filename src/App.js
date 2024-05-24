
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import ProductInput from './components/ProductInput/ProductInput';
import CategoryInput from './components/CategoryInput/CategoryInput';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Categories from './components/Categories/Categories';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import { useState, useEffect } from 'react';
import config from './config';
import axios from 'axios';


function App() {
  const [formCategory, setFormCategory] = useState({
    title:"",
    description:"",
    status:"Active"
  });
  const [categories, setCategories] = useState([]);

  const [formProduct, setFormProduct] = useState({
    category: "Milk",
    name:"",
    quantity:"",
    price:"",
    status:"Active"
  });

  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("")

  //Category API's
  const fetchCategories = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(`${config.endpoint}/categories`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) throw new Error("Network response was not ok.");
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error("Failed to fetch tasks:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  // const searchCategories = async (query) => {
  //   const token = localStorage.getItem("token");
  //   try {
  //     const response = await fetch(`${config.endpoint}/categories/search?query=${query}`, {
  //       method: "GET",
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     if (!response.ok) throw new Error("Network response was not ok.");
  //     if(!query){
  //       fetchCategories()
  //     }
  //     const data = await response.json();
  //     setCategories(data);
  //   } catch (error) {
  //     console.error("Failed to fetch tasks:", error);
  //   }
  // };;


  const searchCategories = async(query) => {
    try{
      const token = localStorage.getItem('token');
      if(token) {
        const response = await axios.get(`${config.endpoint}?search=${query}`);
        const data = response.data;
        setCategories(data);
      }else {
        console.log('User not defined')
      }

    } catch(error){
      throw error
    }
  }
  useEffect(() => {
    searchCategories(query)
  },[query])

  const handleCreateCategory = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(`${config.endpoint}/categories`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formCategory, isCompletedTask: false }),
      });
      if (!response.ok) throw new Error("Failed to create task.");
      setFormCategory({
        title: "",
        description: "",
        status: "Active",
      });
      fetchCategories(); // Refresh the tasks list to reflect the new task
    } catch (error) {
      console.error("Failed to create task:", error);
    }
  };

  const deleteCategory = async (_id) => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(`${config.endpoint}/categories/${_id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) throw new Error("Failed to delete task.");
      fetchCategories(); // Refresh the tasks list to reflect changes
    } catch (error) {
      console.error("Failed to delete task:", error);
    }
  };

  //Product API's
  const fetchProducts = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(`${config.endpoint}/products`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) throw new Error("Network response was not ok.");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Failed to fetch tasks:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleCreateProduct = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(`${config.endpoint}/products`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formProduct, isCompletedTask: false }),
      });
      if (!response.ok) {
        throw new Error("Failed to create task.")
      } else {
        setFormCategory({
          category: "Milk",
          name:"",
          quantity:"",
          price:"",
          status:"Active"
        });
        fetchProducts(); // Refresh the tasks list to reflect the new task
      }

    } catch (error) {
      console.error("Failed to create task:", error);
    }
  };

  const deleteProduct = async (_id) => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(`${config.endpoint}/products/${_id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) throw new Error("Failed to delete task.");
      fetchProducts(); // Refresh the tasks list to reflect changes
    } catch (error) {
      console.error("Failed to delete task:", error);
    }
  };

  return (
    <div className="App">

<BrowserRouter>
  <Routes>
    <Route path="/register" element={<Register />} />
    <Route path="/login" element={<Login />} />
    <Route path="/categoryInput" element={<CategoryInput formCategory={formCategory} setFormCategory={setFormCategory} handleCreateCategory={handleCreateCategory} />}/>
    <Route path="/productInput" element={<ProductInput formProduct={formProduct} setFormProduct={setFormProduct} handleCreateProduct={handleCreateProduct} />}/>
    <Route path="/api/products" element={<Products products={products} setProducts={setProducts} deleteProduct={deleteProduct} />}/>
    <Route path="/api/categories" element={<Categories categories={categories} setCategories={setCategories} deleteCategory={deleteCategory} query={query} setQuery={setQuery} />}/>
    <Route path="/forgot-password" element={<ForgotPassword />}/>
    <Route path="/" element={<Home/>}/>
  </Routes>
</BrowserRouter>


    </div>
  );
}

export default App;
