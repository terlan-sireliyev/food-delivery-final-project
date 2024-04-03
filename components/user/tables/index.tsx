import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CloseIcon from "@mui/icons-material/Close";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ShowOrders from "../../../components/user/showOrders/index";
interface Order {
  id: string;
  customer_id: string;
  delivery_address: string;
  amount: number;
  payment_method: string;
  contact: string;
  products: ShowOrder[];
}

interface ShowOrder {
  id: string;
  img_url: string;
  name: string;
  price: number;
  count: number;
  amount: number;
}
const index = ({
  orderActionOpenMenu,
  showOrderClick,
  closeOrder,
  deleteOrder,
  closeOrderAction,
  actionOrder,
  contactState,
  showOrder,
}: any) => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 750 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="left">Customer Id</TableCell>
              <TableCell align="left">Delivery Address</TableCell>
              <TableCell align="left">Amount</TableCell>
              <TableCell align="left">Payment Method</TableCell>
              <TableCell align="left">Contact</TableCell>
              <TableCell align="left">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contactState.map((row: Order, orderIndex: number) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.id.slice(0, 10)}
                </TableCell>
                <TableCell align="left">
                  {row.customer_id.slice(0, 10)}
                </TableCell>
                <TableCell align="left">{row.delivery_address}</TableCell>
                <TableCell align="left">{row.amount}</TableCell>
                <TableCell align="left">{row.payment_method}</TableCell>
                <TableCell align="left">{row.contact}</TableCell>
                <TableCell align="left">
                  <div className="relative ">
                    <p onClick={() => actionOrder(orderIndex)}>
                      <MoreVertIcon />
                    </p>
                    {orderActionOpenMenu === orderIndex && (
                      <>
                        <div className=" bg-admin-colorLogin cursor-pointer border-[1px] w-1/2  max-lg:w-[20%] border-admin-colorEacampLogo1 fixed max-lg:right-[0px] rounded-regBtnRadius z-[20] p-2">
                          <div className="p-2">
                            <button
                              onClick={() => showOrderClick(orderIndex)}
                              className="text-user-btnSave font-bold"
                            >
                              show
                            </button>
                          </div>
                          {showOrder === orderIndex && (
                            <div className="bg-admin-colorLogin   overflow-y-auto h-[290px]    fixed left-[27%] border-[1px] border-admin-colorEacampLogo1  top-[100px] w-1/2  max-lg:w-[99%]  max-lg:left-[3px]">
                              <div className="bg-admin-bgCheck relative">
                                <div className="p-3 flex justify-center items-center">
                                  <div
                                    onClick={closeOrder}
                                    className=" rounded-iconsRadius p-2 border border-admin-colorEacampLogo1 hover:bg-admin-welcomeText"
                                  >
                                    <CloseIcon />
                                  </div>
                                </div>
                                <div>
                                  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-gray-700 capitalize bg-white dark:bg-gray-700 dark:text-gray-400">
                                      <tr>
                                        <th className="pl-14 py-3">image</th>
                                        <th className="pl-4 py-3">Name</th>
                                        <th className="pl-4 py-3">Price</th>
                                        <th className="pl-4 py-3">Count</th>
                                        <th className="pl-4 py-3">Amount</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {row.products.map(
                                        (
                                          item: ShowOrder,
                                          productIndex: number
                                        ) => (
                                          <tr
                                            key={productIndex}
                                            className="bg-white border-b border-admin-colorEacampLogo1 hover:bg-admin-colorEacampLogo1 "
                                          >
                                            <ShowOrders
                                              key={productIndex}
                                              image={item.img_url}
                                              name={item.name}
                                              price={item.price}
                                              count={item.count}
                                              amount={item.amount}
                                            />
                                          </tr>
                                        )
                                      )}
                                    </tbody>
                                  </table>
                                </div>

                                <div
                                  onClick={closeOrder}
                                  className="bg-gradient-to-r from-blue-500 to-transparent fixed w-full left-0 top-[0px]  z-[-1]  h-dvh"
                                ></div>
                              </div>
                            </div>
                          )}
                          <div className="p-2">
                            <button
                              onClick={() => deleteOrder(row)}
                              className="text-user-navbarSignBgHover font-bold"
                            >
                              Delete
                            </button>
                          </div>
                        </div>

                        <div
                          onClick={closeOrderAction}
                          className="bg-gradient-to-r from-blue-500 to-transparent fixed w-full left-0 top-[0px] h-dvh"
                        ></div>
                      </>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default index;
