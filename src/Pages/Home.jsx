import React, { useEffect, useState } from "react";
import Product from "../Components/Product";
import Spinner from "../Components/Spinner";
function Home() {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  async function fetchData() {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      console.log(data);
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {loading ? (
        <Spinner></Spinner>
      ) : posts.length > 0 ? (
        <div>
          {posts.map((post) => {
            return <Product key={post.id} post={post}></Product>;
          })}
        </div>
      ) : (
        <div>No posts Found</div>
      )}
    </div>
  );
}

export default Home;
