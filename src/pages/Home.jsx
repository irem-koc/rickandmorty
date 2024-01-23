/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import { MyContext } from "../context/MyContext";
import getAllEpisodes from "../services/getAllEpisodes";

const Home = () => {
  const { episodeList, setEpisodeList, setTotalPage, pageNumber } =
    useContext(MyContext);

  const fetchData = async () => {
    try {
      await getAllEpisodes(pageNumber).then((response) => {
        setEpisodeList(response);
        setTotalPage(response.info.pages);
      });
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [pageNumber]);
  return (
    <div>
      <table className="mt-4 table table-bordered text-start m-auto table-hover">
        <thead>
          <tr>
            <th scope="col">#Name</th>
            <th scope="col">#Air date</th>
            <th scope="col">#Episode</th>
            <th scope="col"># of Character</th>
          </tr>
        </thead>
        <tbody>
          {episodeList.results?.map((episode) => (
            <tr key={episode.id}>
              <td scope="row">{episode.name}</td>
              <td>{episode.air_date}</td>
              <td>{episode.episode}</td>
              <td>{episode.characters.length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
