import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const LandNav = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const getData = async () => {
            const result = await axios.get(`http://localhost:4000/destinations`)
            setData(result.data)
        }
        getData()
    }, [setData])
  return (
    <nav>
        <ul>
           {data.map(land => {
            return(
                <li key={land.id}>
                    <Link to={`/hotels/${land.slug}`}>{land.name}</Link></li>
            )
           })}
        </ul>
    </nav>
  )
}

export default LandNav