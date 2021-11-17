//react
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

//components
import Dropdown from "./dropdown";

//styles
import "./SugBar.css";

const SugBar = () => {
  const feedbackItems = useSelector((state) => state.feedback);

  const [sortBy, setSortBy] = useState("Most Upvotes");

  return (
    <div className="sugBar">
      <div className="sugBar_left">
        <img src="./bulb 2.svg" alt="" />
        <h5>{feedbackItems.length} Suggestions</h5>
        <div>
          <Dropdown sortBy={sortBy} setSortBy={setSortBy} />
        </div>
      </div>
      <div className="sugBar_right">
        <Link to="/create">
          <button> + Add Feedback</button>
        </Link>
      </div>
    </div>
  );
};

export default SugBar;
