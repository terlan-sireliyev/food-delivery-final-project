import React, { useEffect, useRef, useState } from "react";
import PageHeader from "../../../components/admin/pageHeader/index";
import EditIcon from "@mui/icons-material/Edit";
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
import CategoryForm from "./categoryForm";
import EditCategory from "../../../components/admin/editCategory/index";
interface Category {
  id: string;
  img_url: string;
  name: string;
  slug: string;
}

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

  const [isActive, setIsActive] = useState(false);
  const [editForm, setEditForm] = useState({
    id: "",
    name: "",
    slug: "",
    img_url: "",
  });

  const handleEdit = async (categoryId: string) => {
    setIsActive(!isActive);

    await axios
      .get(`http://localhost:3000/api/category/${categoryId}`)
      .then((res) => {
        const { name, slug, img_url } = res.data.result.data;
        setEditForm({
          id: categoryId,
          name: name,
          slug: slug,
          img_url: img_url,
        });
      })
      .catch((err) => {
        console.error("Error fetching offer:", err);
        alert("Silinmedi");
      });
  };

  const updateBtn = async (e: any) => {
    e.preventDefault();
    setIsActive(false);
    // const access_token = localStorage.getItem("access_token");
    try {
      const { id, ...rest } = editForm;
      const response = await axios.put(
        `http://localhost:3000/api/category/${id}`,
        rest
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
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
          } z-50 bg-admin-openMenu1 overflow-auto`}
        >
          <CategoryForm
            addProducts={addProducts}
            closeMenu={closeMenu}
            open={open}
            form={form}
            setForm={setForm}
            ref={ref}
            add={"add"}
          />
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
                            <TableCell key={index} align={column.align}>
                              {column.id === "img_url" ? (
                                <img
                                  className="w-24 h-14 m-auto"
                                  src={value}
                                  alt="Table image"
                                />
                              ) : column.id === "edit" ? (
                                <>
                                  <Button onClick={() => handleEdit(row.id)}>
                                    <EditIcon />
                                  </Button>
                                  <Button
                                    onClick={() => deleteCategory(row.id)}
                                  >
                                    <DeleteIcon />
                                  </Button>
                                </>
                              ) : (
                                value
                              )}
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
            count={data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
        <div className="flex flex-wrap  absolute top-[34px] left-[10%] justify-between w-5/6 m-auto mt-4 z-20 ">
          <EditCategory
            setForm={setForm}
            updateBtn={updateBtn}
            setEditForm={setEditForm}
            editForm={editForm}
            setIsActive={setIsActive}
            isActive={isActive}
          />
        </div>
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
