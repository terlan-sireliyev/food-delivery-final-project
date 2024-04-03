import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
interface Order {
  id: string;
  name: string;
  img_url: string;
  description: string;
}

interface ShowOrder {
  id: string;
  img_url: string;
  name: string;
  price: number;
  count: number;
  amount: number;
}

const index = ({ dataOffer, id, editForm, setEditForm, handleEdit }: any) => {
  const deleteOrder = () => {
    axios
      .delete(`http://localhost:3000/api/offer/${id}`)
      .then((res) => {
        console.log("silindi");
        console.log(res);
      })
      .catch((err) => {
        alert("Silinmedi");
      });
  };
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 750 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Id</TableCell>
              <TableCell align="left">Img</TableCell>
              <TableCell align="left">Title</TableCell>
              <TableCell align="left">Description</TableCell>
              <TableCell align="left">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataOffer.map((row: Order, orderIndex: number) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.id.slice(0, 10)}
                </TableCell>

                <TableCell align="left">
                  <img src={row.img_url} className="w-12" alt="" />
                </TableCell>

                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="left">{row.description}</TableCell>
                <TableCell align="left">
                  <button
                    onClick={() => handleEdit(row)}
                    className="bg-admin-colorEacampLogo1 hover:bg-admin-welcomeBackColor hover:text-admin-colorLogin mx-2 p-2 rounded-iconsRadius"
                  >
                    <EditIcon />
                  </button>
                  <button
                    onClick={() => deleteOrder()}
                    className="bg-admin-colorEacampLogo1 hover:bg-admin-welcomeBackColor hover:text-admin-colorLogin mx-2 p-2 rounded-iconsRadius"
                  >
                    <DeleteIcon />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default index;
