const RestuarantSingleBasket = ({ basket, countAdd, totalPrice }: any) => {
  return (
    <>
      <div className="w-1/4 h-96 relative  bg-user-navbarBGColor py-4 divide-y divide-admin-inputBorder ">
        <div>
          <h1 className="font-bold text-user-navbarSignBg text-left ml-4  ">
            {basket.length} Items
          </h1>
        </div>
        <div>
          {basket?.map((itemBasket: any, index: any) => {
            return (
              <div key={index} className="flex justify-between px-4 pt-4 mt-3">
                <div className="flex ">
                  <div>
                    <img src={itemBasket?.img_url} className="w-16" alt="" />
                  </div>
                  <div className="-mt-2 ml-4 text-left ">
                    <h1>{itemBasket.name}</h1>
                    <p>${itemBasket.price * itemBasket.count}</p>
                  </div>
                </div>
                <div className="flex flex-col bg-admin-TextCheck p-2 rounded-regBtnRadius">
                  <button onClick={() => countAdd(itemBasket.id, "increment")}>
                    +
                  </button>
                  <button>{itemBasket.count}</button>
                  <button onClick={() => countAdd(itemBasket.id, "decrement")}>
                    -
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="absolute bottom-0  w-5/6  ml-8 ">
          <button className="bg-user-navbarSignBg  mt-4 rounded-borderSlider p-3  w-full">
            <div className="flex justify-around items-center">
              <div className="text-admin-colorLogin font-bold">Checkout</div>
              <div className="bg-admin-colorLogin w-1/2 p-3 rounded-borderSlider">
                {totalPrice}.00 $
              </div>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default RestuarantSingleBasket;
