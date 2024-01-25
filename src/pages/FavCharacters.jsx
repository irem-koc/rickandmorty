/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../context/MyContext";
import getCharacter from "../services/getCharacter";

const FavCharacters = () => {
  const { favCharList, setFavCharList } = useContext(MyContext);
  const [character, setCharacter] = useState();
  const [favChars, setFavChars] = useState([]);
  // const fetchData = async () => {
  //   try {
  //     await getCharacter(favCharList[0]).then((response) => {
  //       setFavChars([...favChars, response]);
  //     });
  //   } catch (error) {
  //     console.error("Error fetching products:", error);
  //   }
  // };
  // useEffect(() => {
  //   const fetchDataTimeout = setTimeout(fetchData, 1500);

  //   return () => clearTimeout(fetchDataTimeout);
  // }, []);
  return (
    <div>
      {favCharList?.map((char) => (
        <h1 key={char?.id}>{char?.name}</h1>
      ))}
    </div>
  );
};

export default FavCharacters;
