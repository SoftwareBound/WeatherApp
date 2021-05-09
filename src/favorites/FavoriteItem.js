import React from "react";
import { iconUrls } from "../common/constants/urls";
import { setWeatherImage } from "../common/functions/imageFunctions";
import { CityItem } from "../global";
import "./style.css";

const FavoriteItem = ({ data }) => {
  return (
    <CityItem className="col">
      <div>{data.name}</div>
      <div>{data.country}</div>
      <div>
        {data.currentWeather.Temperature.Metric.Value}{" "}
        {data.currentWeather.Temperature.Metric.Unit}
      </div>
      <span>
        <img
          src={`${iconUrls.WEATHER_URL_PREFIX}${setWeatherImage(
            data.currentWeather.WeatherIcon
          )}${iconUrls.WEATHER_URL_SUFFIX}`}
          alt={data.currentWeather.WeatherIcon}
        />
      </span>
      <div>{data.currentWeather.WeatherText}</div>
    </CityItem>
  );
};

export default FavoriteItem;
