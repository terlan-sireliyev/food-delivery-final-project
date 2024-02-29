import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
const restPerPage = 4;

function App({ paginationData, commonDatas }: any) {
  const [pageItem, setPageItems] = useState({
    from: 0,
    to: restPerPage,
  });
  useEffect(() => {
    const currentProducts = commonDatas.result.data.slice(
      pageItem.from,
      pageItem.to
    );

    paginationData(currentProducts);
  }, [pageItem.from, pageItem.to]);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    const from = (page - 1) * restPerPage;
    const to = (page - 1) * restPerPage + restPerPage;

    setPageItems({ from, to });
  };

  return (
    <Pagination
      count={Math.ceil(commonDatas.result.data.length / restPerPage)}
      onChange={handlePageChange}
      variant="outlined"
    />
  );
}

export default App;
