import { MapPin } from 'lucide-react';
import React from 'react';

const WeatherCard = ({ weather, place }) => {
    return (
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
    );
};

export default WeatherCard;