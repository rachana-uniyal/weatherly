import {kelvinToCelsius} from "./util"

const WeatherInfo = ({data}) =>{
    console.log("main",data.main)
    return(
            <div className="flex flex-row">
                <div className="">{data.dt_txt}</div>
                <div>{kelvinToCelsius(data.main.feels_like)}</div>
                <div>{kelvinToCelsius(data.main.temp)}</div>
                <div>{data.main.humidity}</div>
                <div>{data.main.visibility}</div>
            </div>
    )
}

export default WeatherInfo