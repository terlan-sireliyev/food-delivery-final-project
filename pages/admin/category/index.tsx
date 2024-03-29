import React, { useEffect, useRef, useState } from "react";
import PageHeader from "../../../components/admin/pageHeader/index";
import style from "./category.module.css";
import { FileUploader } from "../../../components/admin/FileUploader/index";
import Head from "next/head";
import InputAdd from "../../../components/admin/inputAdd/index";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { columnsSecond } from "../../../components/admin/materialUI";

interface Category {
  id: string;
  img_url: string;
  name: string;
  slug: string;
}
// interface AllCategoryResponse {
//   message: string;
//   result: {
//     data: Category[];
//   };
// }

const Index = ({ AllCategory }: any) => {
  const {
    message,
    result: { data },
  } = AllCategory;

  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [page, setPage] = useState<number>(0);
  const [form, setForm] = useState<{
    img_url: string;
    name: string;
    slug: string;
  }>({
    img_url: "",
    name: "",
    slug: "",
  });

  const addProducts = (e: any) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/api/category", {
        img_url: form.img_url,
        name: form.name,
        slug: form.slug,
      })
      .then((res) => {
        console.log("true");
      })
      .catch((err) => {
        console.log("error");
      });
  };
  const deleteCategory = (catId: string) => {
    axios
      .delete(`http://localhost:3000/api/category/${catId}`)
      .then((res) => {
        console.log("silindi");
      })
      .catch((err) => {
        alert("Silinmedi");
      });
  };

  const closeMenu = () => {
    setOpen(false);
  };
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
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutSideClick = (event: MouseEvent) => {
      if (!ref.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    window.addEventListener("mousedown", handleOutSideClick);
    return () => {
      window.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [ref]);
  const [open, setOpen] = useState<boolean>(false);
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
              <div>
                <h5 className="text-labelOpenMenu text-admin-colorEacampLogo2">
                  Upload your img
                </h5>
                <div className="mt-4 w-32">
                  <img src={form.img_url} className="w-full" />
                </div>
              </div>
              <div className="bg-admin-openMenu2 p-5 rounded w-1/2 ">
                <FileUploader setForm={setForm} />
              </div>
            </div>
            <div className="flex justify-between p-5 ">
              <h5 className="text-labelOpenMenu w-1/2 text-admin-colorEacampLogo2 text-left">
                Add your description and necessary information
              </h5>
              <div className="bg-admin-openMenu2 w-1/2 p-5 h-96 rounded text-right ">
                <InputAdd textName="Name" name="name" setForm={setForm} />
                <InputAdd textName="Slug" name="slug" setForm={setForm} />
              </div>
            </div>
            <div className="bg-admin-TextCheck p-5 ">
              <button
                className="bg-admin-openMenu2 text-admin-TextCheck w-1/3 m-2 px-8 py-4 rounded"
                onClick={closeMenu}
              >
                Cancel
              </button>
              <button
                onClick={addProducts}
                className="bg-admin-signBtnColor text-admin-TextCheck w-1/3 m-2 px-8 py-4 rounded"
              >
                Add
              </button>
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
                  {columnsSecond.map((column, index) => (
                    <TableCell
                      className="font-bold"
                      key={index}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {data
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  ?.map((row: any, index: number) => {
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                        {columnsSecond.map((column, index) => {
                          const value = row[column.id];
                          return (
                            <>
                              <TableCell key={index} align={column.align}>
                                {column.id === "img_url" ? (
                                  <img
                                    className="w-24 h-14 m-auto"
                                    src={value}
                                    alt="Table image"
                                  />
                                ) : column.id === "delete" ? (
                                  <Button
                                    onClick={() => {
                                      deleteCategory(row.id);
                                    }}
                                  >
                                    <DeleteIcon />
                                  </Button>
                                ) : (
                                  value
                                )}
                              </TableCell>
                            </>
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
            count={data.length}
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

export default Index;

export const getServerSideProps = async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/category");
    return { props: { AllCategory: response.data } };
  } catch (error) {
    console.error("Error fetching category:", error);
    return { props: { AllCategory: {} } };
  }
};
