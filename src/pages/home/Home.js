//react
import { useEffect, useState } from "react";

//firebase
import { db } from "../../firebase/config";
import { collection, onSnapshot } from "firebase/firestore";

//styles
import Sidebar from "../../components/Sidebar";
import "./Home.css";
import ProductRequestList from "../../components/productRequestList/requestLits";

export default function Home() {
  const [requests, setRequests] = useState(null);

  useEffect(() => {
    let requestRef = collection(db, "productRequests");

    const unsub = onSnapshot(requestRef, (snapshot) => {
      let results = [];
      snapshot.docs.forEach((doc) => {
        results.push({ id: doc.id, ...doc.data() });
      });
      setRequests(results);
    });
  }, []);

  return (
    <div className="home">
      {console.log(requests)}
      <div className="sidebar">
        <Sidebar />
      </div>

      <div className="content">
        <ProductRequestList requests={requests} />
      </div>
    </div>
  );
}
