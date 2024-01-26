/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../context/MyContext";

const Header = () => {
  const {
    searchValue,
    setSearchValue,
    characterList,
    setCharacterList,
    episodeList,
    setEpisodeList,
  } = useContext(MyContext);

  const handleFilter = (e) => {
    e.preventDefault();
    if (window.location.pathname.includes("/episode")) {
      // Eğer kullanıcı karakterler sayfasındaysa
      console.log("burası");
      console.log(characterList, "-->", searchValue, "-->", setCharacterList);
      filterData(characterList, searchValue, setCharacterList);
    } else if (window.location.pathname.includes("/")) {
      // Eğer kullanıcı bölümler sayfasındaysa
      console.log("hayır burası");
      console.log(episodeList, "-->", searchValue, "-->", setEpisodeList);
      console.log(episodeList, searchValue, setEpisodeList);
    }
  };
  console.log(episodeList, "-->", searchValue, "-->", setEpisodeList);
  const filterData = (data, term, setFilteredData) => {
    // Örnek: Veriyi terime göre filtrele
    let filtered = data;
    if (term.length > 0) {
      filtered = data.filter((item) =>
        item.name?.toLowerCase().includes(term.toLowerCase())
      );
    }
    console.log(filtered);
    return filtered;
  };
  const filterEpisodeData = (data, term, setFilteredData) => {
    // Örnek: Veriyi terime göre filtrele
    const filtered = data?.results.filter((item) =>
      item.name?.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredData(filtered);
    return filtered;
  };
  return (
    <div>
      <nav className="flex navbar navbar-light bg-light p-2">
        <h1 className="navbar-brand d-flex gap-3">
          <Link className="text-decoration-none" to="/">
            Rick & Morty App
          </Link>
          <Link className="text-decoration-none text-sm" to="/fav-chars">
            Favorite Characters
          </Link>
        </h1>
        <form className="d-flex align-items-center justify-content-center form my-2 gap-2 ">
          <input
            onChange={(e) => setSearchValue(e.target.value)}
            value={searchValue}
            className="form-control mr-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            onClick={(e) => handleFilter(e)}
            className="btn btn-outline-success ml-2"
            type="submit"
          >
            Search
          </button>
        </form>
      </nav>
    </div>
  );
};

export default Header;
