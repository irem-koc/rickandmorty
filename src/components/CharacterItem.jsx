/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import getCharacter from "../services/getCharacter";

const CharacterItem = ({ characterNumber }) => {
  const navigate = useNavigate();
  const [character, setCharacter] = useState();
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
  return (
    <div>
      <div
        onClick={() => navigate(`/character/${character.id}`)}
        className="card"
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
