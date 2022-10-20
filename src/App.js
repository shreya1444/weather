import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import ShowTemp from "./ShowTemp";
function App() {
  const [city, setCity] = useState("");
  const [data, setData] = useState({
    Date: "",
    Time: "",
    Temp: "",
    WindDirection: "",
    WindSpeed: "",
    WeatherDescription: "",
    Humidity: "",
  });

  const handleClick = () => {
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=38d85564cc1ff0bc9ccfa5585c72291e&query=${city}`
      )
      .then((response) => {
        console.log(response.data);
        setData({
          Date: response.data?.location?.localtime.slice(0, 10),
          Time: response.data?.location?.localtime.slice(10),
          Temp: response.data?.current?.temperature,
          WindDirection: response?.data?.current?.wind_dir,
          WindSpeed: response?.data?.current?.wind_speed,
          WeatherDescription: response?.data?.current?.weather_descriptions[0],
          Humidity: response?.data?.current?.humidity,
        });
      });
  };
  

  return (
    <div className="App">
      <div className="container text-center my-5">
        <h1>WEATHER FORCAST APP</h1>
        <input
          type="text"
          className=" my-5 search"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
        <button
          className="btn btn-primary mx-2 "
          type="submit"
          onClick={handleClick}
        >
          Get Weather
        </button>
      </div>
      <div>
        <ShowTemp text={data}></ShowTemp>
      </div>
    </div>
  );
}

export default App;
