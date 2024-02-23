import SearchComponent from "./SearchComponent"
import WeatherCard from "./WeatherCard"
import GroupedWeatherDetails from "./GroupedWeatherDetails"

const WeatherContainer = ()=>{
    return (
        <div>
            <SearchComponent/>
            <WeatherCard/>
            <GroupedWeatherDetails/>
        </div>
    )
}

export default WeatherContainer