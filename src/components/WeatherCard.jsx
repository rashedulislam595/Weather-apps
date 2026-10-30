import { MapPin } from 'lucide-react';
import React from 'react';
import StateCard from './StateCard';

const WeatherCard = ({ weather, place }) => {
    const state = [
        {icons:'', label: 'Feels Like', value: weather?.feels_like},
        {icons:'', label: 'Humidity', value: weather?.humidity},
        {icons:'', label: 'Wind Speed', value: weather?.windSpeed}
    ]
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
                        {state.map((item, index) => (<StateCard key={index} label={item.label} value={item.value} />))}
                    </div>
                </div>
    );
};

export default WeatherCard;