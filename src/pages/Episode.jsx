/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CharacterItem from "../components/CharacterItem";
import getEpisode from "../services/getEpisode";
import getChar from "../utils/getCharId";

const Episode = () => {
  const { id } = useParams();

  const [episode, setEpisode] = useState("");
  const [characterList, setCharacterList] = useState();
  const fetchData = async () => {
    try {
      await getEpisode(id).then((response) => {
        setEpisode(response);
        setCharacterList(response.characters);
      });
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  useEffect(() => {
    const fetchDataTimeout = setTimeout(fetchData, 1500);

    return () => clearTimeout(fetchDataTimeout);
  }, []);

  return (
    <div>
      <h1>Name: {episode.name}</h1>
      <h4>Episode: {episode.episode}</h4>
      <h4>Air date: {episode.air_date}</h4>
      <div>
        <h3>Characters:</h3>
        <div className="characters d-flex flex-wrap my-3 mx-auto justify-content-center gap-3">
          {characterList?.map((character, index) => (
            <CharacterItem key={index} characterNumber={getChar(character)} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Episode;
