import { useState, useEffect } from "react";
import "./Banner.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchBannerMovies } from "../../store/movies";

export const Banner = () => {
  const dispatch = useDispatch();
  const { bannerMovies } = useSelector(({ movies }) => movies);
  const [movie, setMovie] = useState([]);

  const truncate = (string, n) => {
    return string?.length > n ? string.substring(0, n - 1) + "..." : string;
  };

  useEffect(() => {
    dispatch(fetchBannerMovies());
  }, []);

  useEffect(() => {
    setMovie(
      bannerMovies?.results &&
        bannerMovies?.results[
          Math.floor(Math.random() * bannerMovies?.results.length - 1)
        ]
    );
  }, [bannerMovies]);

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
      }}
    >
      <div className="bnner__contents">
        <h1 className="banner__title">{movie?.name || movie?.original_name}</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__decription">{truncate(movie?.overview, 150)}</h1>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
};
