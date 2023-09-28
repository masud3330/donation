import { Link } from "react-router-dom";



const Categorie = ({categorie}) => {

    const {id, btn_color, card_bg_color, category, cover_img,  description,price, text_color, title}= categorie;
    // console.log(categorie)

    return (
        <div>
            <Link to={`/Categories/${id}`}>
            <div className="card w-72  shadow-sm rounded-xl" style={{backgroundColor: card_bg_color }}>
  <img src={cover_img} alt=""  className="w-full"/>
  <div className="card-body p-2">
  <div className="card-actions justify-end">
      <button className=" p-2 rounded-lg font-medium  my-3 " style={{backgroundColor: btn_color , color:text_color}}>{category}</button>
    </div>
    <p>{title}</p>
    
  </div>
</div>
            
            </Link>
        
        </div>
    );
};

export default Categorie;