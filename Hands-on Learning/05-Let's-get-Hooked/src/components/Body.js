import { RestoCard } from "./RestoCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = ()=>{ 

    // Local state variable and function
    const [ listOfRestaurants, setListOfRestaurants ] =useState(resList);

    // normal JS variable to store filtered data
    let filteredList;

    return ( 
    <div className="body-container">
       <div className="search">
           <input type="text" placeholder="Search" id="searchString"></input>
           <button type="submit">Search</button>
       </div>
       <div className="filter-container">
            <button className="filter-btn" onClick={()=>{
                filteredList = listOfRestaurants.filter(
                  (restaurant)=>restaurant.info.avgRating > 4.2 
                );
              setListOfRestaurants(filteredList); // updates the state variables with filtered data and re-renders 
            }
        }
            >Top Rating Restaurants </button>
       </div>

       <div className="resto-container">
            {
             listOfRestaurants.map((obj)=> <RestoCard key={obj.info.id} data={obj} /> )
            }
       </div>
    </div>
)};

export default Body;