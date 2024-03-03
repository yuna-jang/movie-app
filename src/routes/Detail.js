import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams(); // 중괄호를 하면 안의 id 키의 값을 가져옴
  const [movie, setMovie] = useState();
  const [loading, setLoading] = useState(true);

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);

  console.log(movie);
  return (
    <div>
      <h1>Detail</h1>
      <hr />
      <div>
        {loading ? (
          <h2>Loading..</h2>
        ) : (
          <div>
            <img src={movie.medium_cover_image} />
            <p>{movie.summary}</p>
            <ul>
              {movie.genres.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
export default Detail;
