/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import EpisodeItem from "../components/EpisodeItem";
import EpisodePagination from "../components/EpisodePagination";
import { MyContext } from "../context/MyContext";
import getAllEpisodes from "../services/getAllEpisodes";

const Home = () => {
  const {
    episodeList,
    setEpisodeList,
    setTotalPage,
    episodePageNumber,
    isLoading,
    setIsLoading,
  } = useContext(MyContext);

  const fetchData = async () => {
    try {
      await getAllEpisodes(episodePageNumber).then((response) => {
        setEpisodeList(response);
        setTotalPage(response.info.pages);
        setIsLoading(false);
      });
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  console.log(episodeList.results);
  useEffect(() => {
    setIsLoading(true);
    const fetchDataTimeout = setTimeout(fetchData, 1500);

    return () => {
      clearTimeout(fetchDataTimeout);
    };
  }, [episodePageNumber]);
  return (
    <div>
      <div className="d-flex flex-wrap my-3 mx-auto justify-content-center gap-3">
        {isLoading === true ? (
          <div>
            <div colSpan={12}>Loading...</div>
          </div>
        ) : (
          episodeList.results?.map((episode) => (
            <EpisodeItem key={episode.id} episodeNr={episode.id} />
          ))
        )}
      </div>
      <EpisodePagination />
    </div>
  );
};

export default Home;
