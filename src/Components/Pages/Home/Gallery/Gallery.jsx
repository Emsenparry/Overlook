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
            <Link to={`/destinations`}>
              <img
                src={`http://localhost:4000/images/${item.image.filename}`}
                alt={item.title}
              />
            </Link>
          )}
          <div className="overlay">
            <Link to={`/destinations`}>
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

const GalleryRooms = () => {
  return(
    <article className="card-container">
    <div className="card">
      <div className="card-image">
      <Link to={`/rooms`}><img src={require("../../../../Assets/images/room-standard-single-bed.jpg")} alt="Image1" /></Link>
      <div className="overlay">
      <Link to={`/rooms`}><h2>Standard Single</h2></Link>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eius quod autem cupiditate voluptates.</p>
      </div>
      </div>
    </div>
    <div className="card">
      <div className="card-image">
      <Link to={`/rooms`}><img src={require("../../../../Assets/images/room-superior-plus-bedroom.jpg")} alt="Image1" /></Link>
      <div className="overlay">
      <Link to={`/rooms`}><h2>Superior Plus</h2></Link>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eius quod autem cupiditate voluptates.</p>
      </div>
      </div>
    </div>
    <div className="card">
      <div className="card-image">
      <Link to={`/rooms`}><img src={require("../../../../Assets/images/room-junior-suite-bedroom.jpg")} alt="Image1" /></Link>
      <div className="overlay">
      <Link to={`/rooms`}><h2>Junior Plus</h2></Link>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eius quod autem cupiditate voluptates.</p>
      </div>
      </div>
    </div>
</article>
  )
}

export { Gallery, GalleryRooms };
