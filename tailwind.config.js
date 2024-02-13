/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        1: "9rem",
        2: "5px",
      },
    },
    fontSize: {
      welcome: "2rem",
      eacampLog: "14px",
      productSize: "12px",
      products: "1.5rem",
      labelOpenMenu: "1.25rem",
      restuarantCardNameSize: "15px",
    },
    colors: {
      "admin-bg": "#1E1E30",
      "admin-navbarBG": "#27283C",
      "admin-bgCheck": "#fff",
      "admin-bgLeftBar": "#C74FEB",
      "admin-bgLeftBarCheck": "#CD61ED",
      "admin-TextCheck": "#fff",
      "admin-bgCheck1": "green",
      "admin-welcomeText": "#C7C7C7",
      "admin-welcomeBackColor": "#38394E",
      "admin-signBtnColor": "#C035A2",
      "admin-signBtnFocusColor": "#C076B0",
      // "admin-signBtnTextColor": "",
      "admin-bgCheck2": "gold",
      "admin-colorLogin": "#fff",
      "admin-colorEacampLogo1": "#C7C7C7",
      "admin-colorEacampLogo2": "#8E8E93",
      "admin-inputBorder": "#c4c4c4",
      "admin-inProductproPrice": "#00B9C7",
      "admin-inProductTrashBack": "red",
      "admin-openMenu1": "#38394e",
      "admin-openMenu2": "#43445a",
      "admin-openMenuBG": "#00000080",
      "admin-insideInput": "#5a5b70",
      "admin-restuarantCardNameColor": "#1e1e30",
      "user-navbarBGColor":"#F3F4F6"
    },
  },
  plugins: [],
};
