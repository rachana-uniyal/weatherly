
const apiKey = import.meta.env.VITE_OPEN_WEATHER_MAP_API_KEY

const LocationToCoordinates = async (locationString)=>{
    try{
        const response = await fetch(
            `https://api.openweathermap.org/geo/1.0/direct?q=${locationString}&limit=1&appid=${apiKey}`
        )
        const locationData = await response.json()
        if(locationData.length === 0){
            throw new Error("No location by that name. Try again")
        }
        return locationData
    } catch( error ){
        console.error("Error:", error)
        return await Promise.reject(error)
    }
}

const WeatherData = async (lat,lon) =>{
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${apiKey}`)
        const weatherData = await response.json()
        return weatherData
    } catch (error){
        console.error("Error:", error)
        return await Promise.reject("Unable to fetch weather data")
    }
}

const FiveDaysWeatherData = async (lat,lon) =>{
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&APPID=${apiKey}`)
        const weekWeatherData = await response.json()
        return weekWeatherData
    } catch (error){
        console.error("Error:", error)
        return await Promise.reject("Unable to fetch week's weather data")
    }
}

export default LocationToCoordinates
export { WeatherData, FiveDaysWeatherData}