import Person2Icon from "@mui/icons-material/Person2";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import FilterFramesIcon from "@mui/icons-material/FilterFrames";
//После входа на сайт к нам приходит именно навбар
export const userProfileLink = [
  {
    id: 1,
    title: "Profile",
    href: "profile",
    icon: <Person2Icon />,
  },
  {
    id: 2,
    title: "Your Basket",
    href: "yourBasket",
    icon: <AddShoppingCartIcon />,
  },
  {
    id: 3,
    title: "Your Order",
    href: "yourOrder",
    icon: <FilterFramesIcon />,
  },
  { id: 4, title: "Checkout", href: "checkout", icon: <PointOfSaleIcon /> },
];

export const userProfileLinkSome = [
  {
    id: 1,
    title: "Home",
    href: "/",
    icon: <Person2Icon />,
  },
  {
    id: 2,
    title: "Profile",
    href: "/user/userPages/profile",
    icon: <Person2Icon />,
  },
  {
    id: 3,
    title: "Your Basket",
    href: "/user/userPages/yourBasket",
    icon: <AddShoppingCartIcon />,
  },
  {
    id: 4,
    title: "Your Order",
    href: "/user/userPages/yourOrder",
    icon: <FilterFramesIcon />,
  },
  {
    id: 5,
    title: "Restaurants",
    href: "/user/restuarants",
    icon: <Person2Icon />,
  },
  {
    id: 6,
    title: "About",
    href: "/user/about",
    icon: <Person2Icon />,
  },
  {
    id: 7,
    title: "Checkout",
    href: "/user/userPages/checkout",
    icon: <PointOfSaleIcon />,
  },
];
