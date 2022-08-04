import React from 'react';
import Hero from "../Hero/Hero";;

const AboutView = () => {
    return (
        <>
            <Hero text="About us"/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 my-5">
                       <p className="lead">Hi</p> 
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutView;