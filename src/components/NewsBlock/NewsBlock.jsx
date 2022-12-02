import React, {
    createContext,
    useEffect, useState
} from "react";
import axios from "axios";
import News from "./News";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState();
  const apiKey = "c769511d045a4612b9e918f4db2aa356";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const {data} = await axios.get(
                    `http://newsapi.org/v2/top-headlines?country=us&category=business&page=1&pageSize=3&sortBy=publishedAt&apiKey=${apiKey}`
                );
                setData(data);
                console.log("yes");
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
        const interval = setInterval(() => {
            fetchData();
        }, 3600000);
        return () => clearInterval(interval);
  }, []);
    
  return (
      <NewsContext.Provider
          value={{ data }}
      >
          {<News />}
      {props.children}
    </NewsContext.Provider>
  );
};