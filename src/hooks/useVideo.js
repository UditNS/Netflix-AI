import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTrailer } from "../store/movieSlice";
import { options } from "../utils/constant";

const useVideo = (movieId) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies.trailer);
  const url = `https://api.themoviedb.org/3/movie/${movieId}/videos`;
  const getVideos = async() => { 
    const data = await fetch(url, options); 
    const json = await data.json(); 
    console.log(json);
    if(json)  {
      const trailer = json.results.filter((item) => (
        item.type === "Trailer" && item.name ==='Official Trailer' 
      ));
      // it might also happen that the trailer is not named 'Official Trailer' or there is no trailer at all
      // in that case we will just take the first video available
      if(trailer.length === 0) {
          trailer.push(json[0]);
      }
      dispatch(setTrailer(trailer[0]));
    }
  }

  useEffect(() => {
    !trailerVideo && getVideos();
  }, []);
};

export default useVideo;