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
  const [addFav, setAddFav] = useState(false);
  const { favCharList, setFavCharList } = useContext(MyContext);
  const fetchData = async () => {
    try {
      await getCharacter(characterNumber).then((response) => {
        setCharacter(response);
      });
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  console.log(favCharList);
  useEffect(() => {
    setAddFav(false);
  }, [characterNumber]);
  useEffect(() => {
    const fetchDataTimeout = setTimeout(fetchData, 1500);

    return () => clearTimeout(fetchDataTimeout);
  }, [character]);
  const handleRemoveFav = () => {
    setAddFav(false);
    const newFavCharList = favCharList.filter((fav) => fav !== characterNumber);
    setFavCharList(newFavCharList);
  };
  const handleAddFav = () => {
    if (favCharList.length < 10) {
      setAddFav(true);
      console.log(characterNumber);
      favCharList.push(characterNumber);
    } else {
      alert(
        "Favori karakter ekleme sayısını aştınız. Başka bir karakteri favorilerdençıkarmalısınız."
      );
    }
  };
  return (
    <div>
      {addFav ? (
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
