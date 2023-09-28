import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CategorieCard from "../Categorie/CategorieCard";




const DetailsCard = () => {
   const [detailsDonationCard, setDetailsDonationCard]= useState({});
    
    const {id}= useParams();
//  console.log(id)
    const donatios= useLoaderData();
    // console.log(donatios)
    useEffect(()=>{
        const findDonation= donatios ?.find(detailsDonationCard => detailsDonationCard.id == id);
        // console.log(findDonation)
        setDetailsDonationCard(findDonation)

    }, [id, donatios])
    console.log(detailsDonationCard)



    return (
        <div className="m-12">
       <CategorieCard detailsDonationCard={detailsDonationCard}></CategorieCard>
          
        </div>
    );
};

export default DetailsCard;