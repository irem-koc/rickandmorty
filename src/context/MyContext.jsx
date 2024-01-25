/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const MyContext = createContext();

const ContextProvider = ({ children }) => {
  const [episodeList, setEpisodeList] = useState([]);
  const [favCharList, setFavCharList] = useState([]);
  const [favChars, setFavChars] = useState([]);
  const [episodePageNumber, setEpisodePageNumber] = useState(1);
  const [characterPageNumber, setCharacterPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPage, setTotalPage] = useState(0);
  const values = {
    episodeList,
    setEpisodeList,
    episodePageNumber,
    setEpisodePageNumber,
    totalPage,
    setTotalPage,
    isLoading,
    setIsLoading,
    characterPageNumber,
    setCharacterPageNumber,
    favCharList,
    setFavCharList,
    favChars,
    setFavChars,
  };
  return <MyContext.Provider value={values}>{children}</MyContext.Provider>;
};
export default ContextProvider;
