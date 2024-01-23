import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MyContext } from "../context/MyContext";
import getCharacter from "../services/getCharacter";

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
        <div>Character: {character?.name}</div>
      )}
    </div>
  );
};

export default Character;
