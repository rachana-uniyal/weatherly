import {kelvinToCelsius, convertToReadableTime, formatDate} from "./util"

const WeatherInfo = ({data}) =>{
    return(
            <div className="flex flex-row py-4 flex-wrap">
                <div className="flex flex-col items-center">{formatDate(data.date)}</div>
                    {data.data.map( wInfo => (
                        <div key={wInfo.dt} className=" mx-2 bg-gray-100 rounded-full shadow-sm">
                            <div>{convertToReadableTime(wInfo.dt_txt)}</div>
                            <div className="text-xs font-light text-slate-500">feels like {kelvinToCelsius(wInfo.main.feels_like)}°C</div>
                            <div className="text-xs font-light text-slate-500">temp {kelvinToCelsius(wInfo.main.temp)}°C</div>
                            <div className="text-xs font-light text-slate-500">humidity {wInfo.main.humidity}%</div>
                            <div className="text-xs font-light text-slate-500">visibility {wInfo.visibility/1000} km</div>
                        </div>
                    ))}
            </div>
    )
}

export default WeatherInfo