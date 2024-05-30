"use client";

import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface SearchPageProps{
  title: string,
  img_url: string,
  subtitle: string,
  price: number,
  reviews: number,
  rating: number,
  head: string,
  bestseller: Boolean,
  _id: string,
  description: string,
  allergens: Array<any>,
  category: string
}

function SearchPage() {

  const [searchResults, setSearchResults] = useState<SearchPageProps[]>([])
  const params = useParams();
  let searchString = params.searchPage;

  if (Array.isArray(searchString)) {
    searchString = searchString.join(' '); 
  }

  searchString = decodeURIComponent(searchString);

  useEffect(()=> {
    const reqData = async()=>{
      const res = await axios.post("/api/searchProducts", {searchString})
      setSearchResults(res.data.data);
    }
    reqData()
    console.log(searchResults)
  },[])

  return (
    <div className="px-2 md:px-[4%] lg:px-[14%]">
      <div>
        <p>Home / Search results for {`"${searchString}"`}</p>
        {searchResults.map((items)=> (
          <div key={items._id}>
            {items.title}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchPage;
