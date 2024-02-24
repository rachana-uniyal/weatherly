
const Footer = () => {
    return (
        <div className="fixed inset-x-0 bottom-0 flex items-center bg-gray-700 justify-center p-2 mt-28 md:p-4 h-16 md:h-18">
            <a href="https://github.com/rachana-uniyal/weatherly" className="text-xs md:text-sm lg:text-base text-gray-50">Github</a>
            <a href="https://openweathermap.org/api" className="text-xs md:text-sm lg:text-base text-gray-50 ml-4 md:ml-10">OpenWeather</a>
        </div>
    );
}

export default Footer;
