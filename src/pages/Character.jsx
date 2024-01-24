import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MyContext } from "../context/MyContext";
import getCharacter from "../services/getCharacter";
import getChar from "../utils/getCharId";

const Character = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState();
  const { setIsLoading, isLoading } = useContext(MyContext);
  const fetchData = async () => {
    try {
      await getCharacter(id).then((response) => {
        setCharacter(response);
        setIsLoading(false);
      });
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  useEffect(() => {
    setIsLoading(true);
    const fetchDataTimeout = setTimeout(fetchData, 1500);

    return () => clearTimeout(fetchDataTimeout);
  }, []);
  return (
    <div>
      {isLoading === true ? (
        <div>Loading...</div>
      ) : (
        <div>
          <div>Character: {character?.name}</div>
          <div>Status: {character?.status}</div>
          <div>Species: {character?.species}</div>
          <div>Type: {character?.type}</div>
          <div>Gender:{character?.gender}</div>
          <div>
            <img src={character?.image} alt={character?.name} />
          </div>
          <div className="episodes d-flex flex-wrap gap-5 mt-5">
            {character?.episode.map((episode, index) => (
              <Link key={index} to={`/episode/${getChar(episode)}`}>
                Episode - {getChar(episode)}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Character;
