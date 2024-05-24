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
           {/* Passing props Individually as key-value pairs*/}
             {/* <RestoCard name="Ramappa Restaurant" cost={400}  ratings={4.5} deliveryTime={30} />
             <RestoCard name="Ramappa Restaurant" cost={500}  ratings={4.5} deliveryTime={30} /> */}

             {/* Passing props as an object */}
             {/* <RestoCard data={resObj} /> */}
              
              {/* Popoulating a list of card by giving data to props as an object */}
            {
             listOfRestaurants.map((obj)=> <RestoCard key={obj.info.id} data={obj} /> )
            }
       </div>
    </div>
)};

export default Body;