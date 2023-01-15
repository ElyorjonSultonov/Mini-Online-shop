import React from "react";
import "./Home.css"
import Products from "../../Component/Products/Products";

function Home() {
  return (
    <div className="home">
      <h2 className="heading">Welcome to the REdux toolkit store</h2>
      <section>
        <h3 className="homeTitle">Products</h3>
        <Products />
      </section>
    </div>
  );
}

export default Home;
