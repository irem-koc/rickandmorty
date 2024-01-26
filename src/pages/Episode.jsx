/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CharacterItem from "../components/CharacterItem";
import CharacterPagination from "../components/CharacterPagination";
import { MyContext } from "../context/MyContext";
import getEpisode from "../services/getEpisode";
import getChar from "../utils/getCharId";

const Episode = () => {
  const { id } = useParams();
  const {
    isLoading,
    setIsLoading,
    characterPageNumber,
    setCharacterPageNumber,
    characterPageItem,
    characterList,
    setCharacterList,
  } = useContext(MyContext);
  const [episode, setEpisode] = useState("");

  const fetchData = async () => {
    try {
      await getEpisode(id).then((response) => {
        setEpisode(response);
        setCharacterList(response.characters);
        setIsLoading(false);
      });
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  useEffect(() => {
    setCharacterPageNumber(1);
    setIsLoading(true);
    const fetchDataTimeout = setTimeout(fetchData, 1500);

    return () => clearTimeout(fetchDataTimeout);
  }, []);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(0);

  useEffect(() => {
    const newStartIndex = (Number(characterPageNumber) - 1) * characterPageItem;
    const newEndIndex = characterPageItem * Number(characterPageNumber);

    setStartIndex(newStartIndex);
    setEndIndex(newEndIndex);
  }, [characterPageNumber, characterPageItem]);
  return (
    <div>
      {isLoading === true ? (
        <div>
          <div colSpan={12}>Loading...</div>
        </div>
      ) : (
        <div>
          <h1>Name: {episode.name}</h1>
          <h4>Episode: {episode.episode}</h4>
          <h4>Air date: {episode.air_date}</h4>
          <div>
            <h3>Characters:</h3>
            <div className="characters d-flex flex-wrap my-3 mx-auto justify-content-center gap-3">
              {characterList
                ?.slice(startIndex, endIndex)
                .map((character, index) => (
                  <CharacterItem
                    key={index}
                    characterNumber={getChar(character)}
                  />
                ))}
            </div>
            <CharacterPagination totalPage={characterList?.length} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Episode;
