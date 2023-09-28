import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Donations from "../Pages/Donations/Donations";
import Statistics from "../Pages/statistics/statistics";
import Errorpage from "../Pages/ErrorPage/Errorpage";
import DetailsCard from "../Components/DetailsCard/DetailsCard";



const MyCreatedRouter = createBrowserRouter ([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <Errorpage></Errorpage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: ()=> fetch('Categories.json'),
            },
            {
                path: "/donations",
                element: <Donations></Donations>
            },
            {
                path: "/statistics",
                element: <Statistics></Statistics>
            },
            {
                path: "/Categories/:id",
                element: <DetailsCard></DetailsCard>,
                loader: ()=> fetch('Categories.json'),
            },
           

        ],
    },
])
export default MyCreatedRouter;