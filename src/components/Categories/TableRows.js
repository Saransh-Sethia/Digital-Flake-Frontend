import React from "react";
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { Button } from '@mui/material';
import { Link } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const TableRows = ({category, key, deleteCategory}) => {
    return (
      <>
        <TableRow
          key={key}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          style={{color:"#F2F2F2", marginBottom:'10px'}}
        >
          <TableCell align="center" component="th" scope="row">
            {category.id}
          </TableCell>
          <TableCell align="center"><h3>{category.title}</h3></TableCell>
          <TableCell align="center">{category.description}</TableCell>
          <TableCell align="center" style={{color:`${category.status === 'Active' ? '#055e0e' : '#750805'}`}}><h4>{category.status}</h4></TableCell>
          <TableCell align="center" style={{display:'flex', gap:'5px'}}>
            <EditIcon />
            <DeleteIcon style={{color:'#5e0505', cursor:'pointer'}} onClick={()=>deleteCategory(category._id)} />
          </TableCell>
        </TableRow>
      </>
    );
  };
  
  export default TableRows;