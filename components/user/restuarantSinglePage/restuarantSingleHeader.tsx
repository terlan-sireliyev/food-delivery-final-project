import Link from "next/link";

const RestaurantSingleHeader = ({ dataSingle }: any) => {
  return (
    <>
      <div className="">
        <div className="p-2">
          <img
            src={dataSingle?.img_url}
            alt={dataSingle?.name}
            className="cursor-pointer w-full h-48 object-contain border border-admin-inputBorder my-4"
          />
        </div>
        <div
          className="flex
         justify-between items-center px-8 max-lg:px-[6px]
         max-lg:flex-col "
        >
          <div className=" max-lg:w-[100%]  max-lg:mt-[6px] ">
            <h1 className="font-bold text-left  text-welcome">
              {dataSingle?.name}
            </h1>
            <h2 className="text-admin-inputBorder text-left max-lg:ml-[3px]">
              {dataSingle?.address}
            </h2>
          </div>
          <div className="flex justify-between items-center  max-lg:mt-[12px]  max-lg:w-[100%]">
            <div className="ml-4 mr-4 max-lg:ml-[3px]">
              <h1 className="text-left text-admin-inputBorder font-bold ">
                Cuisine
              </h1>
              <h2 className="text-left text-admin-inputBorder ">
                {dataSingle?.cuisine}
              </h2>
            </div>
            <div>
              <button className="mx-2 border border-user-navbarSignBg text-user-navbarSignBg p-2">
                {dataSingle?.delivery_price} Delivery
              </button>
              <Link href="/user/restuarants">
                <button className="mx-2 border border-user-navbarSignBg  bg-user-navbarSignBg text-admin-colorLogin p-2">
                  Go Back
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantSingleHeader;
