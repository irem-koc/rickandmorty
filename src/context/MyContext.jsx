/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const MyContext = createContext();

const ContextProvider = ({ children }) => {
  const [episodeList, setEpisodeList] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const values = {
    episodeList,
    setEpisodeList,
    pageNumber,
    setPageNumber,
    totalPage,
    setTotalPage,
  };
  return <MyContext.Provider value={values}>{children}</MyContext.Provider>;
};
export default ContextProvider;
