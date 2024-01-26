/* eslint-disable react/prop-types */
import { useContext, useEffect } from "react";
import { MyContext } from "../context/MyContext";

const CharacterPagination = ({ totalPage }) => {
  const {
    characterPageNumber,
    setCharacterPageNumber,

    characterPageItem,
    setCharacterPageItem,
  } = useContext(MyContext);

  useEffect(() => {
    // console.log(totalPage);
    // console.log(characterPageItem);
    // console.log(characterPageNumber);
    // if (totalPage / characterPageItem <= characterPageNumber) {
    //   setCharacterPageItem(
    //     totalPage - characterPageItem * (characterPageNumber - 1)
    //   );
    // }
  }, [characterPageItem, characterPageNumber]);
  const handleDropdownChange = (event) => {
    const selectedValue = parseInt(event.target.value, 10);
    setCharacterPageItem(selectedValue);
  };

  const dropdownOptions = [];
  for (let i = 1; i <= 10; i++) {
    dropdownOptions.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }
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
        <div className="dropdown m-2">
          <select
            className="form-select"
            value={characterPageItem}
            onChange={handleDropdownChange}
          >
            {dropdownOptions}
          </select>
        </div>
        <button
          className="btn btn-outline-success rounded m-2"
          disabled={totalPage / characterPageItem <= characterPageNumber}
          onClick={() => setCharacterPageNumber(characterPageNumber + 1)}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default CharacterPagination;
