import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import MovieList from "./component/MovieList";
import MovieList2 from "./component/MovieList2";
import MovieList3 from "./component/MovieList3";
import MovieList4 from "./component/MovieList4";
import MovieList5 from "./component/MovieList5";
import MovieList6 from "./component/MovieList6";
import MovieList7 from "./component/MovieList7";

const App = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <Hero />
      <MovieList />
      <MovieList2 />
      <MovieList3 />
      <MovieList4 />
      <MovieList5 />
      <MovieList6 />
      <MovieList7 />
    </div>
  );
};

export default App;