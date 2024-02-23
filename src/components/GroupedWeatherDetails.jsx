import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { FiveDaysWeatherData } from "./weatherAPIs"
import WeatherInfo from "./WeatherInfo"
import { groupWeatherDataByDate } from "./util" 

const GroupedWeatherDetails = () => {

    const location = useSelector((state)=> state.location)
    const [weatherData, setWeatherData ] = useState([])

    useEffect(()=>{
        FiveDaysWeatherData(location.lat,location.lon)
        .then(weatherData => {
            const groupedData = groupWeatherDataByDate(weatherData.list)
            console.log(groupedData)
            setWeatherData(groupedData)
        })
    },[])

    return(
        <div>
            <div>Weather forcast for next few days</div>
            {weatherData.map(data => (
               <WeatherInfo data={data} key={data.data[0].dt}/> 
            ))}
        </div>)
}

export default GroupedWeatherDetails