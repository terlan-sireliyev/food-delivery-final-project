import AddIcon from "@mui/icons-material/Add";
import SingleMobProduct from "../../../components/user/singleMobProduct/index";
const RestuarantSingleProducts = ({ filteredProducts, addBasket }: any) => {
  return (
    <>
      <div>
        <h1 className="text-center  font-bold text-labelOpenMenu">Product</h1>
      </div>
      {filteredProducts.map((item: any) => (
        <div className=" cursor-pointer ml-8 h-[95px] flex mt-8" key={item.id}>
          <div className="w-[60px] h-[60px]  rounded-iconsRadius">
            <img
              src={item?.img_url}
              className="w-full h-full rounded-iconsRadius"
              alt=""
            />
          </div>
          <div className="ml-4 flex w-full justify-between">
            <div>
              <div className="font-bold text-labelOpenMenu">{item.name}</div>
              <div className="mt-2">{item.description}</div>
            </div>

            <div className="flex gap-3">
              <div className="p-2 h-12 w-12 border border-admin-colorEacampLogo1 rounded-btnRaduis flex items-center justify-center ">
                ${item?.price}
              </div>
              <div
                onClick={() => addBasket(item?.id)}
                className=" cursor-pointer  p-2 h-12 w-12 mr-2 rounded-btnRaduis flex items-center justify-center bg-admin-welcomeText"
              >
                <AddIcon />
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="hidden max-lg:block">
        <SingleMobProduct />
      </div>
    </>
  );
};

export default RestuarantSingleProducts;
