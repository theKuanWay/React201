import React from "react";
import Hero from "../Hero/Hero";

const Home = () => {
    return (
        <>
            <Hero text="Welcome to React 201" />
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 my-5">
                       <p className="lead">Lol</p> 
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;