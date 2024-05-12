import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  const [bookdata, setBookData] = useState([{}]);
  const urlAPI = "https://api.itbook.store/1.0/new"; //url API
  useEffect(() => { //Fetch books
    const fetchData = async () => {
      const response = await fetch(urlAPI);
      const data = await response.json();
      setBookData(data);
    };
    fetchData();
  }, []);
  return (
    <div className="App">
      <div className="content-wrapper">
        <Header />
        <Main bookdata={bookdata} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
