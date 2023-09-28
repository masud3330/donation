

const DonationCard = ({donation}) => {
    const {category, cover_img, description    }= donation;
    // console.log(donation)
    return (
        <div>
           <div className="card card-compact w-72 bg-base-100 shadow-xl">
  <img src={cover_img} alt={category} className='w-full'/>
  <div className="card-body">
    <h2 className="card-title">{category}</h2>
    <p>{description}</p>
  </div>
</div>
        </div>
    );
};

export default DonationCard;