import React, { Fragment, useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import NewsList from "./components/NewsList";
import axios from "axios";

function App() {
  const [category, setCategory] = useState("");
  const [news, setNews] = useState([]);

  useEffect(() => {
    const url = `http://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=3fcdc1471e344ff7b83e2aa6a80660ab`;
    const ApiSearch = async () => {
      const response = await axios(url);
      setNews(response.data.articles);
    };
    ApiSearch();
  }, [category, setNews]);

  return (
    <Fragment>
      <Header title="News Search" />

      <div className="container-white">
        <Form setCategory={setCategory} />
        <NewsList news={news} />
      </div>
    </Fragment>
  );
}

export default App;
