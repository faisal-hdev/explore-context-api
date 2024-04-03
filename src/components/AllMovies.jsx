/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

const AllMovies = () => {
  const [movies, setMovies] = useState([]);
  console.log(movies);

  useEffect(() => {
    fetch("fake-data.json")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <div>
      <p>{movies.length}</p>
    </div>
  );
};

export default AllMovies;
