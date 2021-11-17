import { useState } from "react";

const Dropdown = ({ sortBy, setSortBy }) => {
  const [dropdown, setDropdown] = useState(false);

  const filterHandler = (e) => {
    setSortBy(e.target.innerText);
    setDropdown(false);
  };

  return (
    <div className="dropdownContainer">
      <div onClick={() => setDropdown(!dropdown)} className="dropdown-select">
        <span>Sort By: {sortBy} </span>
        {!dropdown ? (
          <img src="/icon-arrow-down.svg" alt="" />
        ) : (
          <img src="/icon-arrow-up.svg" alt="" />
        )}
      </div>
      <div className="dropdown">
        {dropdown ? (
          <ul>
            <li onClick={(e) => filterHandler(e)}>Most Upvotes </li>
            <li onClick={(e) => filterHandler(e)}>Least Upvotes</li>
            <li onClick={(e) => filterHandler(e)}>Most Comments</li>
            <li onClick={(e) => filterHandler(e)}>Least Comments</li>
          </ul>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Dropdown;
