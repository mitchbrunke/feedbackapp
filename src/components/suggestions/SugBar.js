//react
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFeedbackAsync } from "../../redux/feedbackSlice";

//styles
import "./SugBar.css";

const SugBar = () => {
  const dispatch = useDispatch();
  const feedbackItems = useSelector((state) => state.feedback);

  useEffect(() => {
    dispatch(getFeedbackAsync());
  }, [dispatch]);

  return (
    <div className="sugBar">
      <div className="sugBar_left">
        <img src="./bulb 2.svg" alt="" />
        <h5>{feedbackItems.length} Suggestions</h5>
        <div className="dropdown">
          <label for="sortBy" id="sortBy" value="Sort By:" />
          Sort By:
          <select name="sortBy" id="sortOptions">
            <option value="upVotesMost">Most Upvotes</option>
            <option value="upVotesLeast">Least Upvotes</option>
            <option value="commenstMost">Most Comments</option>
            <option value="commentsLeast">Least Comments</option>
          </select>
        </div>
      </div>
      <div className="sugBar_right">
        <button> + Add Feedback</button>
      </div>
    </div>
  );
};

export default SugBar;
