import React, { useState, useEffect } from "react";
import styled from "styled-components";

interface WeatherData {
  name: string;
  weather: {
    description: string;
  }[];
}

const WeatherBlock = styled.div`
  border: 1px solid black;
  h1 {
    margin: 0;
    font-size: 36px;
    color: white;
  }
`;

function Weather() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        console.log(lat);
        console.log(lon);
        const API_KEY = "b7c47ebbe129f0a2919f0d07380d0c9a";
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=kr`;
        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            setWeatherData(data);
          })

          .catch((error) => console.error(error));
      },
      () => alert("위치 정보를 받을 수 없습니다.")
    );
  }, []);

  if (!weatherData) return <div>위치와 날씨를 받아 오는 중 입니다...</div>;

  return (
    <>
      <WeatherBlock>
        <h1>오늘의 날씨</h1>
        <span>날씨 : {weatherData.weather[0].description}</span>
        <br></br>
        <span>지역 : {weatherData.name}</span>
      </WeatherBlock>
    </>
  );
}

export default Weather;
