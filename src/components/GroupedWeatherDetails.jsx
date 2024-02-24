import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { FiveDaysWeatherData } from "./weatherAPIs"
import WeatherInfo from "./WeatherInfo"
import { groupWeatherDataByDate } from "./util" 
import ErrorComponent from "./ErrorComponent"
import { toggleError } from "../redux/locationSlice"

const GroupedWeatherDetails = () => {

    const location = useSelector((state)=> state.location)
    const [weatherData, setWeatherData ] = useState([])
    const [error, setError ]= useState(location.error)
    
    useEffect(()=>{
        FiveDaysWeatherData(location.lat,location.lon)
        .then(weatherData => {
            const groupedData = groupWeatherDataByDate(weatherData.list)
            setWeatherData(groupedData)
        })
        .catch(err => {
            console.error(err)
            setError(true)
            if (!error){
                dispatch(toggleError())
            }
        })
    },[])

    return(
         error ? (<ErrorComponent/>) :(
        <div className="p-2 m-4 pb-16">
            <div className="text-xl font-semibold mb-10 mr-8">Weather forcast for next few days....</div>
            {weatherData.map(data => (
               <WeatherInfo data={data} key={data.data[0].dt}/> 
            ))}
        </div>))
        
}

export default GroupedWeatherDetails