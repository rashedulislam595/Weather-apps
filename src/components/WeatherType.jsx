import React from 'react';

const WeatherType = ({weather,place}) => {
    return (
        <div className="flex flex-col justify-between items-center h-full">
            <h2 className="text-blue-950 font-bold text-2xl">live in {place.name}</h2>


            <div className="flex items-center justify-center">
                <p className="text-2xl font-bold text-blue-950">{weather?.description}</p>
            </div>

            <div className="flex justify-center items-center">
                <span className="text-blue-900 font-bold text-xl border border-purple-500 py-2 px-4 rounded-full">feels-like : {weather?.feels_like}</span>
            </div>
        </div>
    );
};

export default WeatherType;