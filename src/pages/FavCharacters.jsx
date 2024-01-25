/* eslint-disable no-unused-vars */
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../context/MyContext";

const FavCharacters = () => {
  const { favCharList, setFavCharList, favChars, setFavChars } =
    useContext(MyContext);
  const navigate = useNavigate();
  const loadFavCharsFromLocalStorage = () => {
    const storedFavChars = localStorage.getItem("favChars");
    if (storedFavChars) {
      setFavChars(JSON.parse(storedFavChars));
    }
  };
  useEffect(() => {
    loadFavCharsFromLocalStorage();
  }, []);
  useEffect(() => {
    localStorage.setItem("favChars", JSON.stringify(favChars));
  }, [favChars]);
  const handleDeleteFav = (id, character) => {
    if (
      confirm(
        character?.name +
          " isimli karakteri favorilerden kaldırmak istediğinize emin misiniz?"
      )
    ) {
      const newFavCharList = favCharList.filter((fav) => fav !== id);
      const newFavsList = favChars.filter((fav) => fav.id !== id);
      setFavChars(newFavsList);
      setFavCharList(newFavCharList);
    }
  };
  return (
    <div>
      {
        <table className="table table-bordered border-primary mt-5">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Character</th>
              <th scope="col">Status</th>
              <th scope="col">Delete From Favorite</th>
            </tr>
          </thead>
          <tbody>
            {favChars.length === 0 ? (
              <tr className="text-center">
                <td colSpan={6}>No favorite character has been chosen yet!</td>
              </tr>
            ) : (
              favChars?.map((char) => (
                <tr key={char?.id}>
                  <td scope="row" colSpan={1}>
                    <img
                      onClick={() => navigate(`/character/${char.id}`)}
                      width={200}
                      className="figure-img img-fluid rounded hover-effect"
                      src={char?.image}
                      alt={char?.name}
                    />
                  </td>
                  <td>{char?.name}</td>
                  <td>{char?.status}</td>
                  <td>
                    <button
                      onClick={() => handleDeleteFav(char?.id, char)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      }
    </div>
  );
};

export default FavCharacters;
