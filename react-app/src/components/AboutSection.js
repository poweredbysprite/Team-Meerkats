import React from 'react';
import '../App.css';
import './AboutSection.css';


function AboutSection() {
    return (
    <div class="header">
        <h1 className='about'>About Us</h1>
        <div class = "contents">
            <p>
                PaktorGoWhere is our unique site to find
                the best date ideas for you and your loved one
                in Singapore! We have a wide variety of activities
                for all age groups and all price points. Enjoy planning
                your dream day itinerary with PaktorGoWhere and have
                a blast!
            </p>
            <img src="/havingFun.jpg" alt="" srcSet="" className='mainImg'/>
             
            
        </div>   
    </div>
    

    );
}

export default AboutSection