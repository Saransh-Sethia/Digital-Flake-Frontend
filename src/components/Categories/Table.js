
import './Table.css';
import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableRows from "./TableRows";


const TableComponent = ({categories, setCategories, deleteCategory}) => {
  return (
    <>
      <TableContainer component={Paper}>
      <Table
        sx={{
          minWidth: 650,
          marginLeft: "25px",
          marginRight: "25px",
          marginTop: "25px",
          marginBottom: "25px",
        }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow style={{backgroundColor:'#FFF8B7'}}>
            <TableCell align="center" style={{display:'flex'}}>
              <h3>ID</h3>
              
            </TableCell>
            <TableCell align="center" >
              <h3>Category</h3>
              
            </TableCell>
            <TableCell align="center" >
              <h3>Description</h3>
              
            </TableCell>
            <TableCell align="center">
              <h3>Status</h3>
              
            </TableCell>
            <TableCell align="center">
              <h3>Actions</h3>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categories.map((category, id) => (
            <TableRows category={category} key={category.id} id={id} deleteCategory={deleteCategory}/>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  )
}

export default TableComponent
