import { RestoCard } from "./RestoCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = ()=>{ 

    // Local state variable and function
    const [ listOfRestaurants, setListOfRestaurants ] =useState([]);
    const [ filteredRestaurants, setFilteredRestaurants ] =useState([]);
    // normal JS variable to store filtered data
    let filteredList;

    // takes two arguments i.e. callback function and dependency array
    // This callback function is called after rendering the Body component
    useEffect(()=>{
      fetchData();
    },[]);
    
    const fetchData =async()=>{
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0169992&lng=77.7044335&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      setListOfRestaurants(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredRestaurants(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    
    const searchRestaurants =()=>{ 
      const searchText = document.getElementById("searchString")?.value;
              filteredList = listOfRestaurants.filter(restaurant =>
                ( restaurant?.info?.name.toLowerCase().includes(searchText) )
              );
              // setListOfRestaurants(filteredList);
              setFilteredRestaurants(filteredList);
    }

    // Conditional Rendering
    // if(listOfRestaurants.length === 0)
    //   return <Shimmer/>

    return listOfRestaurants.length === 0 ? 
    <Shimmer />
    : (
    <div className="body-container">
       <div className="search">
           <input type="text" placeholder="Search" id="searchString">
           </input>
           <button type="submit" onClick={ searchRestaurants }>Search</button>
       </div>
       <div className="filter-container">
            <button className="filter-btn" onClick={()=>{
                filteredList = listOfRestaurants.filter(
                  (restaurant)=>restaurant.info.avgRating > 4 
                );
              setFilteredRestaurants(filteredList); // updates the state variables with filtered data and re-renders 
            }
        }
            >Top Rating Restaurants </button>
       </div>

       <div className="resto-container">
            {
             filteredRestaurants.map((obj)=> <RestoCard key={obj.info.id} data={obj} /> )
            }
       </div>
    </div>
)};

export default Body;