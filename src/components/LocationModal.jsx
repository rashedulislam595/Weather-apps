import { X } from "lucide-react";
import { useState } from "react";

const LocationModal = ({ close }) => {
    const [city, setCity] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const value = city.trim();
        console.log("City submitted:", value);
    };
    
    const handleGeoLocation = ()=>{
        // console.log(navigator.geolocation.getCurrentPosition) 

        navigator.geolocation.getCurrentPosition(
            (positions)=>{
                // console.log("Geolocation position:", positions.coords);
                const { latitude, longitude } = positions.coords;
                console.log({ latitude, longitude });
            },
            (error)=>{
                console.log("Error getting geolocation:", error);
            },{
                timeout: 10000,
            })
    }

    return (
        <div className='fixed inset-0 flex items-center justify-center bg-gray-950/80 '>
            <div className='w-96 h-96 bg-white p-8 rounded-lg shadow-lg'>
                {/* header */}
                <div className='flex justify-center relative'>
                    <h2 className="text-xl font-bold">Where are you Today?</h2>
                    <div onClick={close} className="bg-red-200 text-red-500 font-bold p-1 rounded-full hover:text-red-700 hover:font-extrabold cursor-pointer absolute -top-4 -right-4"><X /></div>
                </div>

                {/* form */}
                <form className='mt-8' onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        placeholder='Enter your city'
                        value={city}
                        onChange={(e) => setCity(e.target.value)} 
                        className='w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500' 
                     /> 
                    <button type="submit" className='mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Submit</button>
                </form>
                <div className="text-center font-bold py-2">Or</div>
                <div>
                    <button
                    onClick={handleGeoLocation}
                    className='w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>Use Current Location</button>
                </div>
            </div>
        </div>
    );
};

export default LocationModal;