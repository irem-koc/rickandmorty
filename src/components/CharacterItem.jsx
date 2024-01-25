/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../context/MyContext";
import getCharacter from "../services/getCharacter";
import "./../styles/style.css";

const CharacterItem = ({ characterNumber }) => {
  const navigate = useNavigate();
  const [character, setCharacter] = useState();
  const { favCharList, setFavCharList, favChars, setFavChars } =
    useContext(MyContext);

  const isFavorite = favCharList.includes(characterNumber);

  const fetchData = async () => {
    try {
      await getCharacter(characterNumber).then((response) => {
        setCharacter(response);
      });
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    const fetchDataTimeout = setTimeout(fetchData, 1500);

    return () => clearTimeout(fetchDataTimeout);
  }, [character]);
  useEffect(() => {
    localStorage.setItem("favChars", JSON.stringify(favChars));
  }, [favChars]);

  const handleRemoveFav = () => {
    const newFavCharList = favCharList.filter((fav) => fav !== characterNumber);
    const newFavsList = favChars.filter((fav) => fav.id !== characterNumber);
    setFavChars(newFavsList);
    setFavCharList(newFavCharList);
  };

  const handleAddFav = () => {
    if (favCharList.length < 10) {
      setFavCharList((prevList) => [...prevList, characterNumber]);
      setFavChars((prevList) => [...prevList, character]);
    } else {
      alert(
        "Favori karakter ekleme sayısını aştınız. Başka bir karakteri favorilerden çıkarmalısınız."
      );
    }
  };

  return (
    <div>
      {isFavorite ? (
        <MdOutlineFavorite onClick={() => handleRemoveFav()} />
      ) : (
        <MdOutlineFavoriteBorder onClick={() => handleAddFav()} />
      )}
      <div
        onClick={() => navigate(`/character/${character.id}`)}
        className="card hover-effect"
        style={{ width: "18rem" }}
      >
        <div className="card-body">
          <h5 className="card-title">{character?.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{character?.status}</h6>
          <p className="card-text">{character?.species}</p>
          <p className="card-text">{character?.gender}</p>
          <div>
            <img
              className="img-thumbnail"
              src={character?.image}
              alt={character?.name}
            />
          </div>
          <p className="card-text">{character?.episodes?.length}</p>
        </div>
      </div>
    </div>
  );
};

export default CharacterItem;
