//react
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

//styles
import "./Sidebar.css";

export default function Sidebar() {
  //state
  //make this global to let us filter the list based on this value
  const [filter, setFilter] = useState("UI");

  //redux
  const feedbackItems = useSelector((state) => state.feedback);

  //data manipulation
  const filters = ["UI", "UX", "Enhancement", "Bug", "Feature"];
  const plannedItems = [];
  const inProgress = [];
  const live = [];

  //add data to category to get length
  feedbackItems.map((item) =>
    item.status === "planned"
      ? plannedItems.push(item)
      : item.status === "in-progress"
      ? inProgress.push(item)
      : item.status === "live"
      ? live.push(item)
      : ""
  );

  return (
    <div className="sidebar">
      <div className="top-sidebar">
        <h1>BOSE</h1>
        <h6>Feedback Board</h6>
      </div>
      <div className="side-filters">
        {filters.map((filterVal) => (
          <div key={filterVal} onClick={(e) => setFilter(e.target.innerText)}>
            <p className={filterVal === filter ? "active" : ""}>{filterVal}</p>
          </div>
        ))}
      </div>

      <div className="roadmap">
        <div className="top-cont">
          <h2>Roadmap</h2>
          <Link to="/roadmap">
            <p>View</p>
          </Link>
        </div>
        <div className="road-item">
          <div className="road-item-cont">
            <span className="dot" id="planned"></span>
            <p>Planned</p>
          </div>
          <p>{plannedItems.length} </p>
        </div>
        <div className="road-item">
          <div className="road-item-cont">
            <span className="dot" id="inprog"></span>
            <p>In-Progress</p>
          </div>
          <p>{inProgress.length}</p>
        </div>
        <div className="road-item">
          <div className="road-item-cont">
            <span className="dot" id="live"></span>
            <p>Live</p>
          </div>
          <p>{live.length}</p>
        </div>
      </div>
    </div>
  );
}
