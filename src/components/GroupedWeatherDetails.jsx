import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { FiveDaysWeatherData } from "./weatherAPIs";
import WeatherInfo from "./WeatherInfo";
import { groupWeatherDataByDate } from "./util";
import ErrorComponent from "./ErrorComponent";
import { toggleError } from "../redux/locationSlice";
import { useDispatch } from "react-redux";

const GroupedWeatherDetails = () => {
    const location = useSelector((state) => state.location);
    const [weatherData, setWeatherData] = useState([]);
    const [error, setError] = useState(location.error);
    const dispatch = useDispatch()

    useEffect(() => {
        FiveDaysWeatherData(location.lat, location.lon)
            .then(weatherData => {
                const groupedData = groupWeatherDataByDate(weatherData.list);
                setWeatherData(groupedData);
            })
            .catch(err => {
                console.error(err);
                setError(true);
                if (!error) {
                    dispatch(toggleError());
                }
            });
    }, [location.lat, location.lon, error, dispatch]); 

    return (
        error ? <ErrorComponent /> : (
            <div className="p-2 md:p-4 m-2 mb-20 md:m-8 pb-16 mb-20">
                <div className="text-xl md:text-2xl font-semibold mb-5 md:mb-10">Weather forecast for the next five days</div>
                {weatherData.map(data => (
                    <WeatherInfo data={data} key={data.data[0].dt} />
                ))}
            </div>
        )
    );
}

export default GroupedWeatherDetails;
