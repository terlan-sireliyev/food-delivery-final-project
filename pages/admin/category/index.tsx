import React, { useEffect, useRef, useState } from "react";
import RestaurantCard from "../../../components/restaurantCard/index";
import PageHeader from "../../../components/pageHeader/index";
import style from "./category.module.css";
import { FileUploader } from "../../../components/FileUploader/index";
import Head from "next/head";
import InputAdd from "../../../components/inputAdd/index";
import BtnAdd from "../../../components/btnAdd/index";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

interface Column {
  id: "name" | "code" | "population" | "size" | "density";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "code", label: "ISO\u00a0Code", minWidth: 100 },
  {
    id: "population",
    label: "Population",
    minWidth: 170,
    align: "right",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "size",
    label: "Size\u00a0(km\u00b2)",
    minWidth: 170,
    align: "right",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "density",
    label: "Density",
    minWidth: 170,
    align: "right",
    format: (value: number) => value.toFixed(2),
  },
];

interface Data {
  name: string;
  code: string;
  population: number;
  size: number;
  density: number;
}

function createData(
  name: string,
  code: string,
  population: number,
  size: number
): Data {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData("India", "IN", 1324171354, 3287263),
  createData("China", "CN", 1403500365, 9596961),
  createData("Italy", "IT", 60483973, 301340),
  createData("United States", "US", 327167434, 9833520),
  createData("Canada", "CA", 37602103, 9984670),
  createData("Australia", "AU", 25475400, 7692024),
  createData("Germany", "DE", 83019200, 357578),
  createData("Ireland", "IE", 4857000, 70273),
  createData("Mexico", "MX", 126577691, 1972550),
  createData("Japan", "JP", 126317000, 377973),
  createData("France", "FR", 67022000, 640679),
  createData("United Kingdom", "GB", 67545757, 242495),
  createData("Russia", "RU", 146793744, 17098246),
  createData("Nigeria", "NG", 200962417, 923768),
  createData("Brazil", "BR", 210147125, 8515767),
];

const index = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  //  end table
  const ref = useRef<any>(null);

  useEffect(() => {
    const handleOutSideClick = (event: any) => {
      if (!ref.current?.contains(event.target)) {
        setOpen(false);
      }
    };
    window.addEventListener("mousedown", handleOutSideClick);
    return () => {
      window.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [ref]);

  const [open, setOpen] = useState(false);
  const openMenu = () => {
    setOpen((prev) => true);
  };

  return (
    <>
      <Head>
        <title>Category page</title>
      </Head>
      <PageHeader text="Category">
        <button
          className={`bg-admin-signBtnColor p-2 rounded`}
          onClick={openMenu}
        >
          Add Category
        </button>
        <div
          style={{ width: "50vw", height: "100vh" }}
          ref={ref}
          className={`${style.modal} ${
            open && style.open
          } z-50 bg-admin-openMenu1 `}
        >
          <form action="#">
            <div className="flex justify-between p-5 ">
              <h5 className="text-labelOpenMenu text-admin-colorEacampLogo2">
                Upload your img
              </h5>
              <div className="bg-admin-openMenu2 p-5 rounded w-1/2 ">
                <FileUploader />
              </div>
            </div>
            <div className="flex justify-between p-5 ">
              <h5 className="text-labelOpenMenu w-1/2 text-admin-colorEacampLogo2 text-left">
                Add your description and necessary information
              </h5>
              <div className="bg-admin-openMenu2 w-1/2 p-5 h-96 rounded text-right ">
                <InputAdd textName="Name" />
                <InputAdd textName="Slug" />
              </div>
            </div>
            <div className="bg-admin-TextCheck p-5 ">
              <BtnAdd
                btnName="Cancel"
                open={open}
                setOpen={setOpen}
                clFeature="bg-admin-openMenu2 text-admin-TextCheck w-1/3 m-2 px-8 py-4 rounded"
              />
              <BtnAdd
                btnName="Create"
                clFeature="bg-admin-signBtnColor text-admin-TextCheck w-1/3 m-2 px-8 py-4 rounded"
              />
            </div>
          </form>
        </div>
      </PageHeader>
      <div className="flex flex-wrap justify-between w-5/6 m-auto mt-4">
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.code}
                      >
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </div>
    </>
  );
};

export default index;
