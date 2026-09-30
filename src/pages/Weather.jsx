import { useLocation } from "react-router";
import { getWeather } from "../services/get-wether";
import { useEffect, useState } from "react";
import { MapPin } from "lucide-react";

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
                <div className="shadow-2xl rounded-2xl p-4 max-w-xl bg-gray-200">
                    <h2 className="text-4xl font-bold text-blue-700">Todays Weather Details</h2>
                    <div className="my-4 flex items-center">
                        <MapPin size={20} className=" text-purple-700 mr-1" />
                        <h2 className="text-xl font-bold text-purple-600 ">{place.name}</h2>
                    </div>
                    <div className="flex items-center gap-8">
                        <p className="text-4xl font-extrabold text-purple-800">{weather?.temperature}°C</p>
                        <p className="text-4xl font-bold text-purple-700">{weather?.description}</p>
                    </div>
                    <div className="grid md:grid-cols-3 my-5 gap-4">
                        <div className="text-center shadow-2xl rounded-2xl p-2">
                            <p className="text-purple-600 font-bold text-xl">Feels Like</p>
                            <p className="text-purple-600 font-bold text-3xl">{weather?.feels_like}</p>
                        </div>

                        <div className="text-center shadow-2xl rounded-2xl p-2">
                            <p className="text-purple-600 font-bold text-xl">Humidity</p>
                            <p className="text-purple-600 font-bold text-3xl">{weather?.humidity}</p>
                        </div>

                        <div className="text-center shadow-2xl rounded-2xl p-2">
                            <p className="text-purple-600 font-bold text-xl">Wind Speed</p>
                            <p className="text-purple-600 font-bold text-3xl">{weather?.windSpeed}</p>
                        </div>
                    </div>
                </div>
                {/* Recommendation */}
                <div className="shadow-2xl rounded-2xl p-4 max-w-xl bg-gray-200">
                    <h2 className="text-2xl font-bold text-blue-950">Smart Recommendation</h2>

                    <p className="text-gray-800 font-medium">{getRecommendations(weather)?.text}</p>
                </div>
            </div>

            <div className="shadow-2xl rounded-2xl p-4 max-w-xl bg-gray-200">
                <div className="flex flex-col justify-between items-center h-full">
                    <h2 className="text-blue-950 font-bold text-2xl">live in {place.name}</h2>


                    <div className="flex items-center justify-center">
                        <p className="text-2xl font-bold text-blue-950">{weather?.description}</p>
                    </div>

                    <div className="flex justify-center items-center">
                        <span className="text-blue-900 font-bold text-xl border border-purple-500 py-2 px-4 rounded-full">feels-like : {weather?.feels_like}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Weather;