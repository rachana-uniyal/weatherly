import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { WeatherData } from "./weatherAPIs"
import ErrorComponent from "./ErrorComponent"
import { toggleError} from "../redux/locationSlice"
import { kelvinToCelsius,convertUnixTimestampToReadableTime,getCompassDirection } from "./util"

const WeatherCard = () =>{
    const location = useSelector((state)=> state.location)
    const [weatherData, setWeatherData] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(location.error)
    const dispatch = useDispatch()

    useEffect(()=>{
        WeatherData(location.lat,location.lon)
        .then(weatherData =>{
            setWeatherData(weatherData)
            setLoading(false)
        })
        .catch(err => {
            console.error(err)
            setError(true)
            setLoading(false)
            if (!error){
                dispatch(toggleError())
            }
        })
    },[location.lat, location.lon, dispatch, error])

    if (error) return <ErrorComponent />

    if (loading) {
        // Render shimmer UI elements while loading
        return (
            <div className="flex flex-col items-center bg-gray-100 mx-64 py-4 rounded-xl shadow-md">
                <div className="h-6 w-48 shimmer rounded-md"></div>
                <div className="mt-4 h-8 w-full shimmer rounded-md"></div>
                <div className="mt-2 h-6 w-3/4 shimmer rounded-md"></div>
                <div className="mt-2 h-4 w-1/2 shimmer rounded-md"></div>
                <div className="flex mt-2">
                    <div className="h-4 w-1/4 shimmer rounded-md"></div>
                </div>
                <div className="flex mt-2">
                    <div className="h-4 w-1/3 shimmer rounded-md mr-10"></div>
                    <div className="h-4 w-1/3 shimmer rounded-md"></div>
                </div>
                <div className="flex mt-2">
                    <div className="h-4 w-1/4 shimmer rounded-md mr-8"></div>
                    <div className="h-4 w-1/4 shimmer rounded-md"></div>
                </div>
            </div>
        );
    }

        const description = weatherData?.weather?.[0]?.description
        const currentTemp = kelvinToCelsius(weatherData?.main?.temp)
        const humidity = weatherData?.main?.humidity
        const windSpeed = weatherData?.wind?.speed
        const windDirectionDegrees = getCompassDirection(weatherData?.wind?.deg)
        const cloudiness = weatherData?.clouds?.all
        const sunrise = convertUnixTimestampToReadableTime(weatherData?.sys?.sunrise)
        const sunset = convertUnixTimestampToReadableTime(weatherData?.sys?.sunset)
        const visibility = weatherData?.visibility / 1000

    return(
        <div className="flex flex-col items-center bg-gray-100 mx-64 py-4 rounded-xl shadow-md">
            <div className="text-xl font-semibold my-4">{location.city}, {location.country}</div>
            <div className="flex"><svg className="h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M160 64c-26.5 0-48 21.5-48 48V276.5c0 17.3-7.1 31.9-15.3 42.5C86.2 332.6 80 349.5 80 368c0 44.2 35.8 80 80 80s80-35.8 80-80c0-18.5-6.2-35.4-16.7-48.9c-8.2-10.6-15.3-25.2-15.3-42.5V112c0-26.5-21.5-48-48-48zM48 112C48 50.2 98.1 0 160 0s112 50.1 112 112V276.5c0 .1 .1 .3 .2 .6c.2 .6 .8 1.6 1.7 2.8c18.9 24.4 30.1 55 30.1 88.1c0 79.5-64.5 144-144 144S16 447.5 16 368c0-33.2 11.2-63.8 30.1-88.1c.9-1.2 1.5-2.2 1.7-2.8c.1-.3 .2-.5 .2-.6V112zM208 368c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-20.9 13.4-38.7 32-45.3V272c0-8.8 7.2-16 16-16s16 7.2 16 16v50.7c18.6 6.6 32 24.4 32 45.3z"/>
            </svg><span className="ml-2 text-2xl">{currentTemp}°C </span></div>
            <div>{description}</div>
            <div className="text-sm font-light text-slate-500">Humidity {humidity}%</div>
            <div className="flex">
                <div className="text-sm font-light text-slate-500">Wind Speed & Direction {windSpeed}m/s {windDirectionDegrees}</div>
            </div>
            <div className="flex">
                <div className="mr-10 text-sm font-light text-slate-500">Sunrise: {sunrise}</div>
                <div className="text-sm font-light text-slate-500">Sunset: {sunset}</div>
            </div>
            <div className="flex">
                <div className="mr-8 text-sm font-light text-slate-500">Cloudiness: {cloudiness} %</div>
                <div className="text-sm font-light text-slate-500">Visibility: {visibility} km</div>
            </div>
        </div>
    )
}

export default WeatherCard 