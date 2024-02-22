import { useSelector } from "react-redux"

const WeatherCard = () =>{
    const lat = useSelector((state)=> state.location.lat)
    const lon = useSelector((state)=> state.location.lon)

    return(
        <div>
            {lat - lon}
        </div>
    )
}

export default WeatherCard 