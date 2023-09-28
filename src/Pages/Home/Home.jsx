import { useLoaderData } from "react-router-dom";
import Categories from "../../Components/Categories/Categories";
import Banner from "../../Navbar/Header/Banner/Banner";

const Home = () => {

    const allCategories= useLoaderData();
// console.log(allCategories)
    return (
        <div className=" md:mx-12 mx-5">
           
            <Banner></Banner>
           <Categories allCategories= {allCategories} ></Categories>
         
            
        </div>
    );
};

export default Home;