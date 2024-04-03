import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import PageHeader from "../../../components/admin/pageHeader/index";
import axios from "axios";
import style from "../../../components//admin/navbarAdmin/style.module.css";
import InputAdd from "../../../components/admin/inputAdd/index";
import TextArea from "../../../components/admin/textArea/index";
import { FileUploader } from "../../../components/admin/FileUploader";
import TableOffer from "../../../components/user/tablesOffer/index";
import EditOffer from "../../../components/admin/editOffer/index";
import EditProduct from "../../../pages/admin/products/index";
const index = ({ AllOffer }: any) => {
  const [openOfferMenuState, setOpenOfferMenuState] = useState(false);
  const [imageProd, setImageProd] = useState("");
  const [dataOffer, setDataOffer] = useState([]);
  const [offerID, setOfferId] = useState("");

  const {
    message,
    result: { data },
  } = AllOffer;

  useEffect(() => {
    setDataOffer(AllOffer.result.data);
  }, [AllOffer]);

  const [form, setForm] = useState({
    img_url: "",
    name: "",
    description: "",
  });

  const ref = useRef<any>(null);

  const addProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await axios.post("http://localhost:3000/api/offer", form);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/offer")
      .then((result) => {
        result.data.result.data.forEach((e: any) => {
          setOfferId(e.id);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    const handleOutSideClick = (event: any) => {
      if (!ref.current?.contains(event.target)) {
        setOpenOfferMenuState(false);
      }
    };
    window.addEventListener("mousedown", handleOutSideClick);

    return () => {
      window.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [ref]);

  const openOfferMenu = () => {
    setOpenOfferMenuState((prev) => true);
  };
  const [isActive, setIsActive] = useState(false);

  const [editForm, setEditForm] = useState({
    id: "",
    name: "",
    description: "",
    img_url: "",
  });

  const handleEdit = async (item: any) => {
    setIsActive(!isActive);

    await axios
      .get(`http://localhost:3000/api/offer/${item.id}`)
      .then((res) => {
        const { name, description, img_url } = res.data.result.data;

        setEditForm({
          id: item.id,
          name: name,
          description: description,
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
        `http://localhost:3000/api/offer/${id}`,
        rest
      );
      console.log(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Head>
        <title>Offer page</title>
      </Head>
      <PageHeader text="Offers">
        <button
          onClick={openOfferMenu}
          className={`bg-admin-signBtnColor p-2 rounded`}
        >
          Add Offer
        </button>
        <div
          style={{ width: "50vw", height: "100vh" }}
          ref={ref}
          className={`${style.modal} ${
            openOfferMenuState && style.open
          } bg-admin-openMenu1 overflow-auto`}
        >
          <form action="#">
            <div className="flex justify-between p-5 ">
              <div className="">
                <h5 className="text-labelOpenMenu text-admin-colorEacampLogo2">
                  Upload your img
                </h5>
                <div className="mt-4 w-32">
                  <img src={form.img_url} className="w-full" />
                </div>
              </div>

              <div className="bg-admin-openMenu2 p-5 rounded w-1/2 ">
                <FileUploader
                  setForm={setForm}
                  imageProd={imageProd}
                  setImageProd={setImageProd}
                />
              </div>
            </div>
            <div className="flex justify-between p-5 ">
              <h5 className="text-labelOpenMenu w-1/2 text-admin-colorEacampLogo2 text-left">
                Add your description and necessary information
              </h5>
              <div className="overflow-auto bg-admin-openMenu2 w-1/2 p-5 h-96 rounded text-right ">
                {
                  <>
                    <InputAdd textName="Name" name="name" setForm={setForm} />
                    <TextArea
                      textName="Description"
                      name="description"
                      setForm={setForm}
                    />
                  </>
                }
              </div>
            </div>
            <div className="bg-admin-TextCheck p-5 ">
              <button className="bg-admin-openMenu2 text-admin-TextCheck w-1/3 m-2 px-8 py-4 rounded">
                Cancel
              </button>
              <button
                className="bg-admin-signBtnColor text-admin-TextCheck w-1/3 m-2 px-8 py-4 rounded"
                onClick={addProduct}
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </PageHeader>
      <div className="flex flex-wrap justify-between w-5/6 m-auto mt-4 relative">
        <TableOffer
          dataOffer={dataOffer}
          id={offerID}
          editForm={editForm}
          setEditForm={setEditForm}
          handleEdit={handleEdit}
        />
        <div className="flex flex-wrap  absolute top-[-100px] left-0 justify-between w-5/6 m-auto mt-4">
          <EditOffer
            updateBtn={updateBtn}
            setForm={setForm}
            editForm={editForm}
            setEditForm={setEditForm}
            setIsActive={setIsActive}
            isActive={isActive}
          />
        </div>
      </div>
    </>
  );
};

export default index;

export async function getServerSideProps({ req }: any) {
  try {
    const access_token = req.cookies.access_token;
    const response = await axios.get("http://localhost:3000/api/offer", {
      headers: { Authorization: `Bearer ${access_token}` },
    });
    // console.log("API response:", response.data);
    return {
      props: {
        AllOffer: response.data,
      },
    };
  } catch (error: any) {
    // console.error("Error fetching offer:", error);
    return {
      props: {
        error: error.message,
      },
    };
  }
}
