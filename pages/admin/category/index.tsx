import React, { useEffect, useRef, useState } from "react";
import PageHeader from "../../../components/admin/pageHeader/index";
import style from "./category.module.css";
import { FileUploader } from "../../../components/admin/FileUploader/index";
import Head from "next/head";
import InputAdd from "../../../components/admin/inputAdd/index";
import TableCategory from "../../../components/admin/tableCategory/index";
import CategoryForm from "./categoryForm";
import EditCategory from "../../../components/admin/editCategory/index";
import axios from "axios";
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

  const [form, setForm] = useState<{
    img_url: string;
    name: string;
    slug: string;
  }>({
    img_url: "",
    name: "",
    slug: "",
  });

  const addCategory = (e: any) => {
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
            addCategory={addCategory}
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
        <TableCategory
          data={data}
          deleteCategory={deleteCategory}
          handleEdit={handleEdit}
        />
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
