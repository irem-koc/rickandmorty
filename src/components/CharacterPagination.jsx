/* eslint-disable react/prop-types */
import { useContext } from "react";
import { MyContext } from "../context/MyContext";

const CharacterPagination = ({ totalPage }) => {
  const { characterPageNumber, setCharacterPageNumber } = useContext(MyContext);

  return (
    <div>
      <div className="d-flex justify-content-center">
        <button
          className="btn btn-outline-success rounded m-2"
          disabled={characterPageNumber === 1}
          onClick={() => setCharacterPageNumber(characterPageNumber - 1)}
        >
          prev
        </button>
        <span className="btn btn-outline-dark m-2 rounded">
          {characterPageNumber}
        </span>
        <button
          className="btn btn-outline-success rounded m-2"
          disabled={totalPage / 4 <= characterPageNumber}
          onClick={() => setCharacterPageNumber(characterPageNumber + 1)}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default CharacterPagination;
