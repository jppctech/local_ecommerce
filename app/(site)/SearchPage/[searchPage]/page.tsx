"use client";

import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import ProductCards from "../../_components/product_card";
import SearchCard from "../components/SearchCard";

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
      <div className="flex flex-col gap-4">
        {/* address  */}
        <div>
          <p className="text-sm">Home / Search results for {`"${searchString}"`}</p>
        </div>
        {/* second word  */}
        <div>
          <p className="text-3xl font-[600]">Search results</p>
        </div>
        {/* search bar  */}
        {/* <div>
          searchBar
        </div> */}
        {/* number of results  */}
        <div>
          <p className="text-sm text-gray-700">{searchResults.length}
          {searchResults.length === 1? " result ": " results "}
          found for {`"${searchString}"`}</p>
        </div>
        <div className="text-[18px] font-[500]">
          Products {`(${searchResults.length})`}
        </div>
      </div>
      {/* search product card  */}
      <div className=" py-6 flex-wrap">
        {searchResults.map((items,index)=> (
          <SearchCard
            key={index}
            img={items.img_url}
            title={items.title}
            head={items.head}
            price={items.price}
          />
        ))}
      </div>
    </div>
  );
}

export default SearchPage;
