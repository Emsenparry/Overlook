import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Gallery.scss';

const Gallery = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/news");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [setData]);

  return (
    <article className="card-container">
    {data.slice(0, 3).map((item) => (
      <div key={item.id} className="card">
        <div className="card-image">
          {item.image && item.image.filename && (
            <Link to={`/hotels`}>
              <img
                src={`http://localhost:4000/images/${item.image.filename}`}
                alt={item.title}
              />
            </Link>
          )}
          <div className="overlay">
            <Link to={`/hotels`}>
              <h2>{item.title}</h2>
            </Link>
            <p>{item.teaser}</p>
          </div>
        </div>
      </div>
    ))}
  </article>
  
  );
};

export default Gallery;
