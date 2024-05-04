// import React from "react";
// import { useTranslation } from "react-i18next";

// const NavbarLinks = () => {
//   const { t, i18n } = useTranslation();
//   const userNavbarLinks = [
//     {
//       id: 1,
//       title: t("home"), // Translated title
//       href: "/",
//     },
//     {
//       id: 2,
//       title: "Restaurants", // Not translated
//       href: "/user/restaurants",
//     },
//     {
//       id: 3,
//       title: "About", // Not translated
//       href: "/user/about",
//     },
//     {
//       id: 4,
//       title: "Work", // Not translated
//       href: "/user/work",
//     },
//     {
//       id: 5,
//       title: "FAQ", // Not translated
//       href: "/user/faq",
//     },
//   ];
//   return userNavbarLinks;
// };
// export default NavbarLinks;
export const userNavbarLinks = [
  {
    id: 1,
    title: "Home", // Translated title
    href: "/",
  },
  {
    id: 2,
    title: "Restaurants", // Not translated
    href: "/user/restuarants",
  },
  {
    id: 3,
    title: "About", // Not translated
    href: "/user/about",
  },
  {
    id: 4,
    title: "Work", // Not translated
    href: "/user/work",
  },
  {
    id: 5,
    title: "FAQ", // Not translated
    href: "/user/faq",
  },
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
