import { useEffect, useState } from "react";

import DonationCard from "../../Components/DonationCard/DonationCard";



const Donations = () => {
    const [donation, setDonation]= useState([]);
    const [noData, setNoData]= useState("");

    useEffect(()=>{
        const addDonation=  JSON.parse(localStorage.getItem("Donations"));
        if(addDonation){
            setDonation(addDonation)
        }
        else{
            setNoData('No data found')
        }
       
    },[])
    // console.log(donation)
    return (
        <div>
            {noData ? <p  className="h-[100vh] font-bold flex items-center justify-center text-3xl text-red-600" >{noData}</p>: 
            <div>

                    <div className="grid md:grid-cols-2 gap-5 mx-12" >
                        {
                            donation.map(donation=><DonationCard key={donation.id} donation={donation} ></DonationCard>)
                        }
                       </div>

            </div>
            }
        </div>
    );
};

export default Donations;