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
        <p>All</p>
        <p>All</p>
        <p>All</p>
        <p>All</p>
      </div>

      <div className="roadmap">
        <div className="top-cont">
          <h5>Roadmap</h5>
          <p>View</p>
        </div>
        <div className="road-item">
          <p>Planned</p>
          <p>8</p>
        </div>
        <div className="road-item">
          <p>In-Progress</p>
          <p>3</p>
        </div>
        <div className="road-item">
          <p>Live</p>
          <p>1</p>
        </div>
      </div>
    </div>
  );
}
