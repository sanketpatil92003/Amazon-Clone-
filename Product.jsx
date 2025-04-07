import "./Products.css";
import StarIcon from '@mui/icons-material/Star';
 import StarHalfIcon from '@mui/icons-material/StarHalf';
 import StarOutlineIcon from '@mui/icons-material/StarOutline';
const Products =({title,price, rating, image}) => {
    let HalfRating = (rating - Math.floor(rating)) * 10;
    
    let outline = 0;
    HalfRating > 0
    ? (outline= 5 - Math.ceil(Rating))
    : (outline = 5-Math.floor(rating));


    
    return (
        <>
        <div className="Products">
            <img // Img Source: https://www.amazon.com and https://www.amazon.in/
              src={image} alt={title}/>
        </div>
        <div className="ProductInfo"></div>
        <p>{title} </p>
            <div className="ProductGroup"></div>
            <p className="ProductPrice">
                <small>$.</small>
                <strong>{price}</strong>
            </p>
            <div className="ProductRating"></div>
            {/* For Full Star */}
            {Array(Math.floor(rating)).fill().map((_,index) => {

         <StarIcon key={index}/>;})}
         {HalfRating  >0?<StarHalfIcon/> :<></>}
         {outline > 0 ? Array(outline).fill().map(_.index) =<StarOutlineIcon key ={index}/>:""}
            <StarIcon/>
            <StarIcon/>
            <StarHalfIcon/>

        <bottom>Add to Cart</bottom>
        </>
    )
}


export default Products;
