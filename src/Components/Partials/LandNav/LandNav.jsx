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
  const [data, setData] = useState([]);
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
    <ul>
      {data &&
        data.map((hotel) => {
          return <li key={hotel.id}>
            <Link to={`/destinations/${slug}/${hotel.id}`}>
            {hotel.description}
            </Link>
            </li>;
        })}
    </ul>
  );
};

export { HotelNav, HotelList };
