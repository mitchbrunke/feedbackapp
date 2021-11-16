//react
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFeedbackAsync } from "../../redux/feedbackSlice";

//styles
import Sidebar from "../../components/Sidebar";
import "./Home.css";
import ProductRequestList from "../../components/productRequestList/requestLits";

export default function Home() {
  const dispatch = useDispatch();
  const feedbackItems = useSelector((state) => state.feedback);

  useEffect(() => {
    dispatch(getFeedbackAsync());
  }, [dispatch]);

  return (
    <div className="home">
      <div className="sidebar">
        <Sidebar />
      </div>

      <img src="./user-images/image-suzanne.jpg" alt="" />

      <div className="content">
        <ProductRequestList />
      </div>
    </div>
  );
}
