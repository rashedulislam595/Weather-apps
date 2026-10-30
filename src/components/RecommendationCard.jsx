import React from 'react';

const RecommendationCard = ({ recommendation }) => {
    return (
        <div className="shadow-2xl rounded-2xl p-4 max-w-xl bg-gray-200">
            <h2 className="text-2xl font-bold text-blue-950">Smart Recommendation</h2>

            <p className="text-gray-800 font-medium">{recommendation?.text}</p>
        </div>
    );
};

export default RecommendationCard;