import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import MoviePage from "./component/MoviePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/movie-search-app" element={<Home />} />
        <Route path="/movie-search-app/movie/:id" element={<MoviePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
