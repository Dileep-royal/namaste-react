import {IMG_URL } from "../utils/constants"

export const RestoCard=(props)=>{
    const { data } =props;
    const { name, cuisines, cloudinaryImageId, avgRating,costForTwo,sla } = data?.info;

    return(
    <div className="card">
        <img src={IMG_URL+cloudinaryImageId} />
        <div className="card-info">
            <h3>{name}</h3>
            <h6>{cuisines.join(", ")}</h6>
            <h4>{costForTwo}</h4>
            <h4>{avgRating} Stars</h4>
            <h4>{sla.deliveryTime} Minutes</h4>
        </div>
    </div>
);
}

export default RestoCard;
