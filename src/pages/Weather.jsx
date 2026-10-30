import { useLocation } from "react-router";
import { getWeather } from "../services/get-wether";
import { useEffect, useState } from "react";
import { MapPin } from "lucide-react";
import WeatherCard from "../components/WeatherCard";
import RecommendationCard from "../components/RecommendationCard";
import WeatherType from "../components/WeatherType";

const Weather = () => {
    const value = useLocation();
    const place = value.state.location;
    const [weather, setWeather] = useState
        (null);

    console.log("weather", weather);

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

    // Recommendation part

    const Rain = ["drizzle", "rain" , "freezing_rain"]

    function getRecommendations(weather) {
        if (!weather) return null;

        // 1. Weather you need to prepare for.
        if (weather.condition === "snow") {
            return { type: "snow", label: "Snow Alert", text: "It's snowing. Wear warm clothes and take it slow outside." };
        }
        if (Rain.includes(weather.condition)) {
            return { type: "rain", label: "Rain Alert", text: "It's raining. Don't forget to take an umbrella with you." };
        }
        if (weather.condition === "fog") {
            return { type: "fog", label: "Fog Alert", text: "It's foggy. Drive carefully and keep some distance from other vehicles." };
        }

        // 2. Temperatures worth warning about (in °C).
        if (weather.temperature >= 32) {
            return { type: "hot", label: "Hot Day", text: "It's quite hot today. Take a water bottle with you." };
        }
        if (weather.temperature <= 15) {
            return { type: "cold", label: "Cold Day", text: "It's cold today. Wear warm clothes before heading out." };
        }
        if (weather.temperature >= 28) {
            return { type: "warm", label: "Warm Day", text: "It's warm today. Take some water with you." };
        }

        // 3. Comfortable temperature, so just describe the sky.
        if (weather.condition === "clear") {
            return { type: "sunny", label: "Sunny Day", text: "Sunny skies ahead. Take water and consider carrying sunglasses." };
        }
        if (weather.condition === "partly_cloudy" || weather.condition === "cloudy") {
            return { type: "cloudy", label: "Cloudy Day", text: "Mostly cloudy today. A light jacket might come in handy." };
        }

        // 4. Nothing special to report.
        return { type: "pleasant", label: "Perfect Day", text: "The weather looks comfortable today. Enjoy your day!" };
    }

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