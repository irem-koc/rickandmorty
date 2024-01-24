/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import { MyContext } from "../context/MyContext";

const EpisodePagination = () => {
  const { totalPage, episodePageNumber, setEpisodePageNumber } =
    useContext(MyContext);
  useEffect(() => {
    setEpisodePageNumber(1);
  }, []);
  return (
    <div>
      <div className="d-flex justify-content-center">
        <button
          className="btn btn-outline-success rounded m-2"
          disabled={episodePageNumber === 1}
          onClick={() => setEpisodePageNumber(episodePageNumber - 1)}
        >
          prev
        </button>
        <span className="btn btn-outline-dark m-2 rounded">
          {episodePageNumber}
        </span>
        <button
          className="btn btn-outline-success rounded m-2"
          disabled={episodePageNumber === totalPage}
          onClick={() => setEpisodePageNumber(episodePageNumber + 1)}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default EpisodePagination;
