import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
    <article className="card">
      {data.slice(0,3).map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.teaser}</p>
          {item.image && item.image.filename && (
            <img src={`http://localhost:4000/images/${item.image.filename}`} alt={item.title} />
          )}
        </div>
      ))}
    </article>
  );
};

export default Gallery;
