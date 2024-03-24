import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import { useState } from 'react';

function WeatherApp() {
    let [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelsLike: 21.51,
        temp: 22.05,
        temp_max: 22.05,
        temp_min: 22.05,
        humidity: 46,
        weather: "haze"
    })

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <div>
            <SearchBox updateInfo={updateInfo}></SearchBox>
            <InfoBox info={weatherInfo}></InfoBox>
        </div>
    )
}

export default WeatherApp;