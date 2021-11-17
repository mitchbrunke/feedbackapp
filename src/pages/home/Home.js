//styles
import Sidebar from "../../components/Sidebar";
import "./Home.css";
import ProductRequestList from "../../components/productRequestList/RequestList";
import SugBar from "../../components/suggestions/SugBar";

export default function Home() {
  return (
    <div className="home">
      <div className="sidebar">
        <Sidebar />
      </div>

      <div className="content">
        <SugBar />
        <ProductRequestList />
      </div>
    </div>
  );
}
