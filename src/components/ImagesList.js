/* eslint-disable camelcase */
import { useState, useEffect } from "react";
import axios from "../helpers/axios";

const ImagesList = () => {
  const [page, setPage] = useState(1);
  const [photos, setPhotos] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get(`?page=${page}&limit=10`).then((result) => {
      setPhotos((prevState) => [...prevState, ...result]);
      setLoading(false);
    });
  }, [page]);

  const handleShowMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="container">
      <h3>Image Gallery</h3>
      <ul>
        {photos.map(({ id, download_url }) => (
          <li key={id}>
            <img src={download_url} alt={id} className="image" />
          </li>
        ))}
      </ul>
      {isLoading ? (
        <p className="loader">Loading...</p>
      ) : (
        // eslint-disable-next-line react/button-has-type
        <button onClick={handleShowMore}>Show more</button>
      )}
    </div>
  );
};

export default ImagesList;
