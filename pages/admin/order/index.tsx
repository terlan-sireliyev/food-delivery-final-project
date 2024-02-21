// import React from "react";
// import Head from "next/head";
// import PageHeader from "../../../components/admin/pageHeader/index";
// import Paper from "@mui/material/Paper";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TablePagination from "@mui/material/TablePagination";
// import TableRow from "@mui/material/TableRow";
// import axios from "axios";
// import { useState } from "react";
// interface Column {
//   id:
//     | "id"
//     | "customer ID"
//     | "date"
//     | "address"
//     | "amount"
//     | "paymen"
//     | "contact";
//   label: string;
//   minWidth?: number;
//   align?: "center";
// }

// const columns: readonly Column[] = [
//   { id: "id", label: "ID", minWidth: 170 },
//   { id: "customer ID", label: "Customer ID", minWidth: 170, align: "center" },
//   { id: "date", label: "Date", minWidth: 170, align: "center" },
//   { id: "address", label: "Address", minWidth: 170 },
//   { id: "amount", label: "Amount", minWidth: 170 },
//   { id: "paymen", label: "Paymen", minWidth: 170 },
//   { id: "contact", label: "Contact", minWidth: 170 },
// ];

// const index = ({ AllOrders }: any) => {
//   const [rowsPerPage, setRowsPerPage] = React.useState(10);
//   const [page, setPage] = React.useState(0);

//   const {
//     message,
//     result: { data },
//   } = AllOrders;

//   const handleChangePage = (event: unknown, newPage: number) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (
//     event: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   };
//   //  end table

//   const [open, setOpen] = useState(false);
//   const openMenu = () => {
//     setOpen((prev) => true);
//   };

//   return (
//     <>
//       <Head>
//         <title>Category page</title>
//       </Head>

//       <div className="flex flex-wrap justify-between w-5/6 m-auto mt-4">
//         <Paper sx={{ width: "100%", overflow: "hidden" }}>
//           <TableContainer sx={{ maxHeight: 440 }}>
//             <Table stickyHeader aria-label="sticky table">
//               <TableHead>
//                 <TableRow>
//                   {columns.map((column, index) => (
//                     <TableCell
//                       className="font-bold"
//                       key={index}
//                       align={column.align}
//                       style={{ minWidth: column.minWidth }}
//                     >
//                       {column.label}
//                     </TableCell>
//                   ))}
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {data
//                   .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//                   ?.map((row: any, index: number) => {
//                     return (
//                       <TableRow hover role="checkbox" tabIndex={-1} key={index}>
//                         {columns.map((column, index) => {
//                           const value = row[column.id];
//                           return (
//                             <>
//                               <TableCell key={index} align={column.align}>
//                                 {column.id === "img_url" ? (
//                                   <img
//                                     className="w-24 h-14 m-auto"
//                                     src={value}
//                                     alt="Table image"
//                                   />
//                                 ) : (
//                                   value
//                                 )}
//                               </TableCell>
//                             </>
//                           );
//                         })}
//                       </TableRow>
//                     );
//                   })}
//               </TableBody>
//             </Table>
//           </TableContainer>
//           <TablePagination
//             rowsPerPageOptions={[10, 25, 100]}
//             component="div"
//             count={data.length}
//             rowsPerPage={rowsPerPage}
//             page={page}
//             onPageChange={handleChangePage}
//             onRowsPerPageChange={handleChangeRowsPerPage}
//           />
//         </Paper>
//       </div>
//     </>
//   );
// };

// export default index;
// export const getServerSideProps = async () => {
//   try {
//     const response = await axios.get("http://localhost:3000/api/order/add");
//     return { props: { AllOrders: response.data } };
//   } catch (error) {
//     console.error("Error fetching order:", error);
//     return { props: { AllOrders: {} } };
//   }
// };
