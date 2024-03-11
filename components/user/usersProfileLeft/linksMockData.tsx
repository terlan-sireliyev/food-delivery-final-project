import Person2Icon from '@mui/icons-material/Person2';
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import FilterFramesIcon from "@mui/icons-material/FilterFrames";
import LogoutIcon from '@mui/icons-material/Logout';
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
  { id: 5, title: "Logout", href: "user/login", icon: <LogoutIcon /> },
];
