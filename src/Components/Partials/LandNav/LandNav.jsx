import axios from "axios";
import { useEffect, useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";

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
    <section>
      {data &&
        data.map((item) => {
          return (
            <li key={item.id}>
              <NavLink to={`/destinations/${item.slug}`}>{item.name}</NavLink>
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
      console.log(result.data);
      setData(result.data);
    };
    getData();
  }, [slug]);

  return (
    <div>
      {data &&
        data.cities.map((item) => {
          return (
            <div key={item.city_id}>
              <Link to={`/destinations/${slug}/${item.name}`}>
                <img
                  src={require(`../../../Assets/images/${item.CityImage.city_image_filename}`)}
                  alt={item.CityImage.city_image_title}
                />
                <h2>{item.name}</h2>
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export { HotelNav, HotelList };
