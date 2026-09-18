import { Outlet } from "react-router";

const MainLayout = () => {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen bg-linear-to-b from-blue-100 to-blue-300'>
            <Outlet />
        </div>

    );
};

export default MainLayout;