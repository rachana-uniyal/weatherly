import { kelvinToCelsius, convertToReadableTime, formatDate } from "./util"

const WeatherInfo = ({ data }) => {
    return (
        <div className="flex flex-col md:flex-row py-4 flex-wrap justify-center md:justify-start items-center">
            <div className="flex flex-col items-center mt-8 mb-4 md:mb-0 md:mt-0 md:mr-8">
                {formatDate(data.date)}
            </div>
            {data.data.map(wInfo => (
                <div key={wInfo.dt} className="flex flex-col bg-red-100 mx-2 my-2 md:mx-4 bg-red-50 rounded-full shadow-sm p-4">
                    <div className="text-indigo-800">{convertToReadableTime(wInfo.dt_txt)}</div>
                    <div className="text-xs font-light text-slate-500">feels like {kelvinToCelsius(wInfo.main.feels_like)}°C</div>
                    <div className="text-xs font-light text-slate-500">temp {kelvinToCelsius(wInfo.main.temp)}°C</div>
                    <div className="text-xs font-light text-slate-500">humidity {wInfo.main.humidity}%</div>
                    <div className="text-xs font-light text-slate-500">visibility {wInfo.visibility / 1000} km</div>
                </div>
            ))}
        </div>
    );
};

export default WeatherInfo
