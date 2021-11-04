//react
import { Link } from "react-router-dom";

//styles
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="top-sidebar">
        <h1>Frontend Mentor</h1>
        <h6>Feedback Board</h6>
      </div>
      <div className="side-filters">
        <p className="active">All</p>
        <p>UI</p>
        <p>UX</p>
        <p>Enhancement </p>
        <p>Bug</p>
        <p>Feature</p>
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
          <p>8</p>
        </div>
        <div className="road-item">
          <div className="road-item-cont">
            <span className="dot" id="inprog"></span>
            <p>In-Progress</p>
          </div>
          <p>3</p>
        </div>
        <div className="road-item">
          <div className="road-item-cont">
            <span className="dot" id="live"></span>
            <p>Live</p>
          </div>
          <p>1</p>
        </div>
      </div>
    </div>
  );
}
