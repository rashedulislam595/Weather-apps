import React from 'react';

const StateCard = ({ label, value }) => {
    return (
        <div className="text-center shadow-2xl rounded-2xl p-2">
            <p className="text-purple-600 font-bold text-xl">{label}</p>
            <p className="text-purple-600 font-bold text-3xl">{value}</p>
        </div>
    );
};

export default StateCard;