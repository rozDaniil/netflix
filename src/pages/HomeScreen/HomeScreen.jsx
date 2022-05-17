import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./HomeScreen.css";

import { fetchMovies } from "../../store/movies";
import request from "../../services/request";
import { Banner } from "../../component/Banner/Banner";
import { Nav } from "../../component/Navbar/Nav";
import { Row } from "../../component/Row/Row";

const FILM_CATEGORY = [
  {
    title: "NETFLIX ORIGINAL",
    fetchUrl: request.fetchNetflixOriginals,
    isLargeRow: true,
  },
  { title: "Trending Now", fetchUrl: request.fetchTrending },
  { title: "Top Rated", fetchUrl: request.fetchTopRated },
  { title: "Action Movies", fetchUrl: request.fetchAction },
  { title: "Comedy Movies", fetchUrl: request.fetchComedy },
  { title: "Horror Movies", fetchUrl: request.fetchHorror },
  { title: "Romance Movies", fetchUrl: request.fetchRomance },
  { title: "Documentaries", fetchUrl: request.fetchDocumentaries },
];

export const HomeScreen = () => {
  const dispatch = useDispatch();
  const { movies } = useSelector(({ movies }) => movies);

  useEffect(() => {
    if (movies.length < FILM_CATEGORY.length) {
      FILM_CATEGORY.forEach((elem, index) => {
        dispatch(fetchMovies(FILM_CATEGORY[index].fetchUrl));
      });
    }
  }, []);

  return (
    <div className="homeScreen">
      <Nav />
      <Banner />
      {movies.map((film, index) => (
        <Row
          key={index}
          movies={film}
          title={FILM_CATEGORY[index]?.title}
          isLargeRow={FILM_CATEGORY[index]?.isLargeRow}
        />
      ))}
    </div>
  );
};
