import axios from "axios";
import { useEffect, useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import './LandNav.scss';

const HotelNav = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const result = await axios.get(`http://localhost:4000/destinations`);
      setData(result.data);
    };
    getData();
  }, [setData]);

  return (
    <section className="centered-section">
      {data &&
        data.map((item) => {
          return (
            <li key={item.id} className="list-item">
              <NavLink to={`/destinations/${item.slug}`} className="nav-link">
                {item.name}
              </NavLink>
            </li>
          );
        })}
    </section>
  );
};

const HotelList = () => {
  const [data, setData] = useState();
  const { slug } = useParams();

  useEffect(() => {
    const getData = async () => {
      const result = await axios.get(
        `http://localhost:4000/destinations/${slug}`
      );
      setData(result.data);
    };
    getData();
  }, [slug]);

  return (
    <div className="container">
    <HotelNav />
    {data && (
      <div>
        <h2>Vores hoteller i {data.name}</h2>
        <p>{data.description}</p>
        {data.cities.map((item) => (
          <div key={item.city_id}>
            <Link to={`/destinations/${slug}/${item.name}`}>
              <img
                src={require(`../../../Assets/images/${item.CityImage.city_image_filename}`)}
                alt={item.CityImage.city_image_title}
              />
              <h2>{item.name}</h2>
            </Link>
          </div>
        ))}
      </div>
    )}
  </div>
  );
};

const HotelDetails = () => {
  const [data, setData] = useState();
  const { slug, city_id } = useParams();

  useEffect(() => {
    const getData = async () => {
      const result = await axios.get(
        `http://localhost:4000/destinations/${slug}/${city_id}`
      );
      setData(result.data);
    };
    getData();
  }, [slug, city_id]);
  return (
    <div>
      <HotelNav />
      {data && (
        <div>
          <h2>Hotel Details</h2>
        </div>
      )}
    </div>
  )
};

export { HotelNav, HotelList, HotelDetails };
