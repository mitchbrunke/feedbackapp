//firebase
import { db } from "./firebase/config";
import { collection, getDocs } from "firebase/firestore";

//styles
import Sidebar from "../../components/Home/Sidebar";
import "./Home.css";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Sidebar />
    </div>
  );
}
