import React, { useEffect, useState } from "react";
import FilterListIcon from "@mui/icons-material/FilterList";
import CloseIcon from "@mui/icons-material/Close";
import style from "./styles.module.css";
import ResNavLinks from "./resNavLinks";
import axios from "axios";

const RestNavMobil = () => {
  const [openNavMobil, setOpenNavMobil] = useState(false);
  const [allMobilCategory, setAllMobilCategory] = useState<any[] | null>(null);

  const navMobilOpen = () => {
    setOpenNavMobil(true);
  };
  const navMobilClose = () => {
    setOpenNavMobil(false);
  };
  useEffect(() => {
    axios.get("http://localhost:3000/api/category").then((res) => {
      setAllMobilCategory(res.data.result.data);
    });
  }, []);
  return (
    <>
      <div
        onClick={navMobilClose}
        className={`${style.modalNavMobilCommoHiddenClass} ${
          openNavMobil && style.modalNavMobilCommonShowClass
        } bg-gradient-to-r from-blue-500 to-transparent absolute top-[0px] w-full h-dvh`}
      ></div>
      <div className="p-2">
        <div
          className="shadow-md p-4 m-auto cursor-pointer"
          onClick={navMobilOpen}
        >
          <FilterListIcon className="cursor-pointer" />
        </div>
        <div
          className={`${style.modalNavMobilClass} ${
            openNavMobil && style.openNavMobilClass
          }  `}
        >
          <div
            onClick={navMobilClose}
            className="mt-2 p-2 font-bold text-admin-bgCheck1 cursor-pointer "
          >
            <CloseIcon className="font-bold border rounded-btnRaduis " />
          </div>
          <div className="p-2 font-bold text-left px-6 ">
            <p>All Category</p>
          </div>
          {allMobilCategory &&
            allMobilCategory.map((item: any) => (
              <ResNavLinks
                key={item.id}
                name={item.name}
                img_url={item.img_url}
                slug={item.slug}
                category_id={item.id}
                navMobilClose={navMobilClose}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default RestNavMobil;
