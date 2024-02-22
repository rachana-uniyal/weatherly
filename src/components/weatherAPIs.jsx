
const LocationToCoordinates = async (locationString)=>{
    try{
        const apiKey = import.meta.env.VITE_OPEN_WEATHER_MAP_API_KEY
        console.log(apiKey)
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

export  default LocationToCoordinates