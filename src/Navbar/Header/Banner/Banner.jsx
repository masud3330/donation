

const Banner = () => {
    return (
        <div className="h-[50vh] bg-red-300 flex items-center justify-center my-4">
            <div className="text-center  ">
            <h2 className="text-2xl font-bold my-2">I Grow By Helping People In Need</h2>
            <input type="text" placeholder="Search here" className="bg-gray-100 p-2 rounded-lg mr-2" />
            <button className=" p-2 rounded-lg font-semibold text-white " style={{backgroundColor :' #FF444A'}}>Search</button>
        </div>
        </div>
    );
};

export default Banner;