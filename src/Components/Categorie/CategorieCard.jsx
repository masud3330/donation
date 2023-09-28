import { json } from "react-router-dom";
import swal from 'sweetalert';



const CategorieCard = ({detailsDonationCard}) => {
    console.log(detailsDonationCard)
    const {id, btn_color, card_bg_color, category, cover_img,  description,price, text_color, title}= detailsDonationCard;
    console.log(cover_img)

    const handleAddToDonation =()=>{
      const addDonationItem=[];
   const addDonation=  JSON.parse(localStorage.getItem("Donations"));

      if(!addDonation){
        addDonationItem.push(detailsDonationCard);
        localStorage.setItem("Donations" , JSON.stringify(addDonationItem));
        // alert('product added');
        swal("Good job!", "You clicked the button!", "success");

      }
      else{
        const isExit= addDonation.find(donation=> donation.id==id);
      if(!isExit){
        addDonationItem.push ( ...addDonation, detailsDonationCard );
        localStorage.setItem('Donations',JSON.stringify(addDonationItem) );
        // alert('product added');
        swal("Good job!", " dontation Successfull", "success");
      }

        else{
          // alert('already added')
          swal("Error!", "Already donated", "error");
        }
        
      }
    console.log(addDonationItem)
    }
    return (
       
            <div className="flex flex-col ">
                <div className="card h-50vh   bg-white rounded-lg border-gray-300 shadow-lg md:w-1/2">
  <img src={cover_img} alt={category} className="w-full "/>
  <div className="card-body">
  <div className="card-actions justify-end  bg-black   relative -top-16 p-2   ">
      <button onClick={handleAddToDonation} className=" p-2 font-semibold text-white rounded-lg " style={{backgroundColor:text_color}}>Donation  {price} $</button>
    </div>
   <div className="px-2 pb-2">
   <h2 className="card-title text-3xl font-bold">{category}</h2>
    <p>{description}</p>
   </div>
    
  </div>
</div>



            </div>
       
    );
};

export default CategorieCard;

