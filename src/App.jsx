import { useEffect,useState } from "react";

import "./App.css";
import Search from "./components/Search";

const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS={
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
}

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const fetchMovies = async () =>{
    try{
      const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;


    }catch{
      console.log(`Error fetching movies: ${error}`);
      setErrorMessage("An error occurred while fetching movies.");
    }
  }

  useEffect(() => {
    
  }, []);
  return (
    <main>
      <div className="pattern" />
      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="Hero Banner" />
          <h1>Find <span className="text-gradient">Movies</span>  you'll Enjoy Without the Hassle</h1>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        </header>

        <section className="all-movies">
          <h2>All Movies</h2>

          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        </section>
      </div>
    </main>
  );
};

export default App;
