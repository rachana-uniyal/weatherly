import { useState } from "react";
import LocationToCoordinates from "./weatherAPIs";
import { setLocation, toggleError } from "../redux/locationSlice";
import { useDispatch } from "react-redux";

const SearchComponent = () => {
    const [placeName, setPlaceName] = useState('');
    const dispatch = useDispatch();

    const handleSearch = () => {
        LocationToCoordinates(placeName)
            .then(locationInfo => {
                dispatch(setLocation(...locationInfo));
            })
            .catch(error => {
                console.error("Promise rejected with error:", error);
                dispatch(toggleError());
            });
    };

    return (
        <div className="py-8 flex flex-col sm:flex-row justify-center items-center p-4">
            <input
                className="h-10 w-full mr-2 sm:w-6/12 px-2 rounded-full bg-gray-100 focus:outline-none"
                type="text"
                onChange={(e) => setPlaceName(e.target.value)}
                placeholder="City, Country Code"
            />
            <div
                className="flex items-center h-10 px-4 mt-4 sm:mt-0 sm:px-2 rounded-full bg-gray-200 cursor-pointer"
                onClick={handleSearch}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </div>
        </div>
    );
};

export default SearchComponent;
