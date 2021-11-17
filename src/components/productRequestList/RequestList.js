//react
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFeedbackAsync } from "../../redux/feedbackSlice";

//components
import SingleRequest from "./SingleRequest";

const ProductRequestList = () => {
  const dispatch = useDispatch();
  const feedbackItems = useSelector((state) => state.feedback);

  useEffect(() => {
    dispatch(getFeedbackAsync());
  }, [dispatch]);

  return (
    <div>
      {feedbackItems &&
        feedbackItems.map((request) => (
          <div key={request.id}>
            <SingleRequest request={request} />
          </div>
        ))}
    </div>
  );
};

export default ProductRequestList;
