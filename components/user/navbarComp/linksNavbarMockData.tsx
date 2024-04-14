// "use client";
// import { useState, useEffect } from "react";
// import azLang from "../../../translations/az.json";
// import enLang from "../../../translations/en.json";
// import { useRouter } from "next/router";
// const [lang, setLang] = useState(enLang);
// const router = useRouter();
// const YourComponent = () => {
//   const [lang, setLang] = useState(enLang);
//   const router = useRouter();

//   useEffect(() => {
//     if (router.locale === "az") {
//       setLang(azLang);
//     } else if (router.locale === "en") {
//       setLang(enLang);
//     }
//   }, [router.locale]);

//  };

export const userNavbarLinks = [
  {
    id: 1,
    title: "Home",
    href: "/",
  },
  {
    id: 2,
    title: "Restuarants",
    href: "/user/restuarants",
  },
  {
    id: 3,
    title: "About",
    href: "/user/about",
  },
  { id: 4, title: "Work", href: "/user/work" },
  { id: 5, title: "Faq", href: "/user/faq" },
];

export const userIsTokenNavbar = [
  {
    id: 1,
    title: "Home",
    href: "/",
  },
  {
    id: 1,
    title: "profile",
    href: "/profile",
  },
  {
    id: 2,
    title: "Restuarants",
    href: "/user/restuarants",
  },
  {
    id: 3,
    title: "About",
    href: "/user/about",
  },
  { id: 4, title: "Work", href: "/user/work" },
  { id: 5, title: "Faq", href: "/user/faq" },
];
