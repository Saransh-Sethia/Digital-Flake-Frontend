
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
import Arrows from '../assets/arrows.png'

const TableComponent = ({products, setProducts, deleteProduct}) => {
  return (
    <>
      <TableContainer component={Paper}>
      <Table
        sx={{
          minWidth: 650,
          marginLeft: "15px",
          marginRight: "15px",
          marginTop: "15px",
          marginBottom: "152"
        }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow style={{backgroundColor:'#FFF8B7'}}>
            <TableCell align="center" >
              <h3>ID</h3>
              
            </TableCell>
            <TableCell align="center">
              <h3>Name</h3>
              
            </TableCell>
            <TableCell align="center">
              <h3>Pack Size</h3>
              
            </TableCell>
            <TableCell align="center">
              <h3>Category</h3>
              
            </TableCell>
            <TableCell align="center">
              <h3>MRP</h3>
              
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
          {products.map((product, id) => (
            <TableRows product={product} key={product.id} id={id} deleteProduct={deleteProduct}/>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  )
}

export default TableComponent