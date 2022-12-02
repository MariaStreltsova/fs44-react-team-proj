import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import News from "./News";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState();
  const apiKey = "c769511d045a4612b9e918f4db2aa356";

  useEffect(() => {
    axios
      .get(
        `http://newsapi.org/v2/top-headlines?country=us&category=business&page=1&pageSize=3&sortBy=publishedAt&apiKey=${apiKey}`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
      <NewsContext.Provider value={{ data }}>
          {<News />}
      {props.children}
    </NewsContext.Provider>
  );
};