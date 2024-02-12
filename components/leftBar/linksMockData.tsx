import DashboardIcon from "@mui/icons-material/Dashboard";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import CategoryIcon from "@mui/icons-material/Category";
import FilterFramesIcon from "@mui/icons-material/FilterFrames";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
export const adminLinks = [
  { id: 1, title: "Dashboard", href: "dashboard", icon: <DashboardIcon /> },
  { id: 2, title: "Products", href: "products", icon: <AddShoppingCartIcon /> },
  {
    id: 3,
    title: "Restaurants",
    href: "restaurants",
    icon: <RestaurantIcon />,
  },
  { id: 4, title: "Category", href: "category", icon: <CategoryIcon /> },
  { id: 5, title: "Orders", href: "order", icon: <FilterFramesIcon /> },
  { id: 6, title: "Offers", href: "offer", icon: <LocalOfferIcon /> },
];
