import { useContext } from "react";
import { MyContext } from "../context/MyContext";

const Footer = () => {
  const { totalPage, pageNumber, setPageNumber } = useContext(MyContext);
  return (
    <div>
      <div className="d-flex justify-content-center">
        <button
          className="btn btn-outline-success rounded m-2"
          disabled={pageNumber === 1}
          onClick={() => setPageNumber(pageNumber - 1)}
        >
          prev
        </button>
        <span className="btn btn-outline-dark m-2 rounded">{pageNumber}</span>
        <button
          className="btn btn-outline-success rounded m-2"
          disabled={pageNumber === totalPage}
          onClick={() => setPageNumber(pageNumber + 1)}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default Footer;
