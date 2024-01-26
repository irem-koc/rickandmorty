/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const MyContext = createContext();

const ContextProvider = ({ children }) => {
  const filterData = (data, term, setFilteredData) => {
    // Örnek: Veriyi terime göre filtrele
    const filtered = data.filter(
      (item) =>
        item.title.toLowerCase().includes(term.toLowerCase()) ||
        item.name.toLowerCase().includes(term.toLowerCase())
    );

    // Filtrelenmiş veriyi state'e at
    setFilteredData(filtered);
  };
  const [episodeList, setEpisodeList] = useState([]);
  const [favCharList, setFavCharList] = useState([]);
  const [characterList, setCharacterList] = useState([]);
  const [favChars, setFavChars] = useState([]);
  const [episodePageNumber, setEpisodePageNumber] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [characterPageNumber, setCharacterPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPage, setTotalPage] = useState(0);
  const [episodePageItem, setEpisodePageItem] = useState(20);
  const [characterPageItem, setCharacterPageItem] = useState(4);
  const [filteredData, setFilteredData] = useState([]);
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
    searchValue,
    setSearchValue,
    episodePageItem,
    setEpisodePageItem,
    characterPageItem,
    setCharacterPageItem,
    filteredData,
    setFilteredData,
    filterData,
    characterList,
    setCharacterList,
  };
  return <MyContext.Provider value={values}>{children}</MyContext.Provider>;
};
export default ContextProvider;
