import './App.css'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './pages/Home';
import MainLayout from './layout/MainLayout';
import About from './pages/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path:"about",
        element: <About />,
      }
    ]
  },
]);

function Router() {
  return <RouterProvider router={router} />
}

export default Router
