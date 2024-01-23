/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import getCharacter from "../services/getCharacter";

const CharacterItem = ({ characterNumber }) => {
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
      {typeof characterNumber}
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{character?.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{character?.status}</h6>
          <p className="card-text">{character?.species}</p>
          <p className="card-text">{character?.gender}</p>
          <a href="#" className="card-link">
            Character image:{" "}
            <img src={character?.image} alt={character?.name} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CharacterItem;
