import AddIcon from "@mui/icons-material/Add";
import Link from "next/link";
const RestuarantSingleProducts = ({ filteredProducts, addBasket }: any) => {
  return (
    <>
      <div>
        <h1 className="text-center  font-bold text-labelOpenMenu">Product</h1>
      </div>
      {filteredProducts.map((item: any) => (
        <div className="ml-8 flex mt-4" key={item.id}>
          <div className="w-24 h-24">
            <img
              src={item?.img_url}
              className="w-full h-full rounded-iconsRadius"
              alt=""
            />
          </div>
          <div className="ml-4 flex  w-full justify-between">
            <div>
              <div className="font-bold text-labelOpenMenu">{item.name}</div>
              <div className="mt-3">{item.description}</div>
            </div>

            <div className="flex gap-3">
              <div className="p-2 h-12 w-12 border border-admin-colorEacampLogo1 rounded-btnRaduis flex items-center justify-center ">
                ${item?.price}
              </div>
              <div
                onClick={() => addBasket(item?.id)}
                className="p-2 h-12 w-12 mr-2 rounded-btnRaduis flex items-center justify-center bg-admin-welcomeText"
              >
                <AddIcon />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default RestuarantSingleProducts;
