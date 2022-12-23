import { createContext, useEffect, useState } from "react";

const AppContext = createContext();

const API = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [isError, setIsError] = useState({ show: "false", msg: "" });
  const [query, setQuery] = useState("avengers");

  useEffect(() => {
    const timer = setTimeout(() => {
      apiData(`${API}&s=${query}`);
    }, 800);
    return () => {
      clearTimeout(timer);
    };
  }, [query]);

  const apiData = async (url) => {
    try {
      const data = await fetch(url);
      const jsonData = await data.json();
      if (jsonData.Response === "True") {
        setIsLoading(false);
        setMovie(jsonData.Search);
        setIsError({
          show: false,
          msg: "",
        });
      } else {
        setIsLoading(true);
        setIsError({
          show: true,
          msg: jsonData.Error,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AppContext.Provider
      value={{
        movie,
        isError,
        isLoading,
        query,
        setQuery,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
