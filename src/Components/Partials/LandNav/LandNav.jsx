import axios from "axios";
import { useEffect, useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import "./LandNav.scss";

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
    <figure className="figure-main">
      <HotelNav />
      {data && (
        <div className="hotels-container">
          <h2>Vores hoteller i {data.name}</h2>
          <p>{data.description}</p>
          <div className="cities-list">
            {data.cities.map((item) => (
              <div className="city-card" key={item.city_id}>
                <Link
                  to={`/destinations/${slug}/${item.name}`}
                  className="link"
                >
                  <div className="image-container">
                    <img
                      src={require(`../../../Assets/images/${item.CityImage.city_image_filename}`)}
                      alt={item.CityImage.city_image_title}
                    />
                  </div>
                  <h2>{item.name}</h2>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </figure>
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
    <>
      <HotelNav />
      <section className="wrapper">
        {data &&
          data.cities.map((item) => {
            return (
              <>
                <div className="sect-details">
                  <div>
                    <h2>Vores hoteller i {item.name}</h2>
                    <p>{item.description}</p>
                  </div>
                  <div className="card" key={item.id}>
                    <Link
                      to={`/destinations/${item.slug}`}
                      className="card-link"
                    >
                      <div>
                        <img
                          src={require(`../../../Assets/images/${item.CityImage.city_image_filename}`)}
                          alt={item.name}
                          className="card-image"
                        />
                      </div>
                      <h2 className="info">{item.name}</h2>
                    </Link>
                  </div>
                </div>
                <div className="test">
                  Other information here.
                </div>
              </>
            );
          })}
      </section>
    </>
  );
};

export { HotelNav, HotelList, HotelDetails };
