import { useLocation } from "react-router";
import { getWeather } from "../services/get-wether";
import { useEffect, useState } from "react";
import { MapPin } from "lucide-react";
import WeatherCard from "../components/WeatherCard";
import RecommendationCard from "../components/RecommendationCard";
import WeatherType from "../components/WeatherType";
import { getRecommendations } from "../utils/getRecommendations";

const Weather = () => {
    const value = useLocation();
    const place = value.state.location;
    const [weather, setWeather] = useState
        (null);

    // console.log("weather", weather);

    useEffect(() => {
        if (!place) return;
        const fetchWeather = async () => {
            try {
                const weatherData = await getWeather(place);
                setWeather(weatherData);
                // console.log("Weather data:", weatherData);
            } catch (error) {
                console.error("Error fetching weather data:", error);
            }
        }

        fetchWeather();
    }, [place])

   
    return (
        <div className="grid md:grid-cols-2 gap-4">
            <div className="shadow-2xl rounded-2xl space-y-5 max-w-xl bg-gray-200">
                {/* weather card */}
                <WeatherCard weather={weather} place={place} />

                {/* Recommendation */}
                <RecommendationCard recommendation={getRecommendations(weather)} />
            </div>

            {/* weather type */}
            <div className="shadow-2xl rounded-2xl p-4 max-w-xl bg-gray-200">
                {/* weather type */}
                <WeatherType weather={weather} place={place} />
            </div>
        </div>
    );
};

export default Weather;