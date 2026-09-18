import { useState } from "react";
import LocationModal from "../components/locationModal";

const Home = () => {
    const [clicked, setClicked] = useState(false);
    

    return (
        <div className='text-center'>
            <h2 className='text-4xl font-extrabold text-blue-500'>Next level <span className='text-blue-700'>Weather App</span></h2>
            <p className='text-lg text-gray-600 mt-4'>check the weather in your city</p>

            <div className='mt-8'>
                <button
                onClick={() => setClicked(!clicked)} 
                type="button" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                    Check Weather 
                </button>
            </div>

            {clicked && <LocationModal close={()=> setClicked(false)} />}
        </div>
    );
};

export default Home;