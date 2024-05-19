import { useEffect, useState } from "react";
import "../../App.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import SearchPage from "./SearchPage/SearchPage";

function App() {
  const [bookdata, setBookData] = useState([{}]);
  const [bookCart, setBookCart] = useState([
    {
      title: "Items",
    },
  ]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [isVisibleSearch, setIsVisibleSearch] = useState(false);

  const urlAPI = "https://api.itbook.store/1.0/new"; //url API
  useEffect(() => {
    //Fetch books
    const fetchData = async () => {
      const response = await fetch(urlAPI);
      const data = await response.json();
      setBookData(data);
    };
    fetchData();
  }, []);
  const addBooksHandler = (item) => {
    setBookCart((prevItems) => {
      return [...prevItems, item];
    });

    setTotalAmount(totalAmount + parseFloat(item.price.substring(1)));
  };
  const searchVisibleHandler = () => {
    setIsVisibleSearch(!isVisibleSearch);
  };

  return (
    <>
      <div className="App">
        <div className="content-wrapper">
          <Header
            cartBooksData={bookCart}
            searchVisibleHandler={searchVisibleHandler}
            totalAmount={totalAmount}
            setBooksCart={setBookCart}
            setTotalAmount={setTotalAmount}
          />
          {isVisibleSearch ? (
            <SearchPage addBooksHandler={addBooksHandler} />
          ) : (
            <Main bookdata={bookdata} addBooksHandler={addBooksHandler} />
          )}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
