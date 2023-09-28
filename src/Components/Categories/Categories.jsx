import Categorie from "../Categorie/Categorie";


const Categories = ({allCategories}) => {
    return (
        <div  className=" grid md:grid-cols-4 gap-3 mb-10">
             {
                allCategories.map(categorie => <Categorie key={categorie.id} categorie={categorie}></Categorie>)
            }
        </div>
    );
};

export default Categories;