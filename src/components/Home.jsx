import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "./Product";
import Slider from "./Slider";
import NavBar from "./NavBar";
import { useSelector } from "react-redux";
import Pagination from "./Pagination";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage,setCurrentPage]=useState(1)
  const [perPage,setPerPage]=useState(18)
  const logged = useSelector(state=>state.user)
 
  const getData = async () => {
    await axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);
 const lastPostIndex =currentPage*perPage
 const firstPostIndex=lastPostIndex-perPage
 const currentPosts =products.slice(firstPostIndex,lastPostIndex)
 
 const filteredData = currentPosts.filter((item) =>
  item.title.toLowerCase().includes(search.toLowerCase())
);
  

  return (
    <>
      <div className="fixed ">
        <NavBar />
        <div className=" flex justify-end ">
        <input
          type="text"
          placeholder="Product search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border-yellow-500 border-4 w-80"
        />
      </div>
      </div>
     
      <div className="p-0">

      <Slider products={products} />
      </div>
      <div >
        <Product item={filteredData} />
        <Pagination totalPost={products.length}
        postsPerPage={perPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}/>
      </div>
      
    </>
  );
};

export default Home;
