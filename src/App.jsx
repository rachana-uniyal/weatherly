import "./index.css"
import Header from "./components/Header"
import WeatherContainer from "./components/WeatherContainer"
import Footer from "./components/Footer"

const App = () =>{
    return(
    <div>
        <Header/>
        <WeatherContainer/>
        <Footer/>
    </div>
    )
}

export default App