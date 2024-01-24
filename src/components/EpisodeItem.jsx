/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import getEpisode from "../services/getEpisode";

/* eslint-disable react/prop-types */
const EpisodeItem = ({ episodeNr }) => {
  const [episode, setEpisode] = useState();
  const fetchData = async () => {
    try {
      await getEpisode(episodeNr).then((response) => {
        setEpisode(response);
      });
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  useEffect(() => {
    const fetchDataTimeout = setTimeout(fetchData, 1500);

    return () => clearTimeout(fetchDataTimeout);
  }, [episode]);
  return (
    <div key={episode?.id}>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{episode?.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{episode?.episode}</h6>
          <p className="card-text">{episode?.air_date}</p>
          <a href={`/episode/${episode?.id}`} className="card-link">
            Character number: {episode?.characters?.length}
          </a>
        </div>
      </div>
    </div>
  );
};

export default EpisodeItem;
