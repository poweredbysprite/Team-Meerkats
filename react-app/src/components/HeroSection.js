import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import search from './SVG-Items/Search.svg';
import create from './SVG-Items/Create.svg';
import saved from './SVG-Items/Saved.svg';
import Featured from './SVG-Items/Featured Itenararies.svg';
import Popular from './SVG-Items/Popular Activities.svg';
import NearMe from './SVG-Items/Near me.svg';


function HeroSection() {
  return (
    <div class="hero-container">
        <div class="wrapper">
            <header>
                <div class="main-content">
                    <h1>Sugar and Spice and Everything Nice</h1>
                    
                    <div class="header-icons">
                      <Link to='/searchActivities' className='icon-links'>
                        <img src={search} alt="" srcset="" className='mainImg'/>
                      </Link>

                      <Link to='/createItinerary' className='icon-links'>
                        <img src={create} alt="" srcset="" className='mainImg'/>
                      </Link>

                      <Link to='/viewSavedItinerary' className='icon-links'>
                        <img src={saved} alt="" srcset="" className='mainImg'/>
                      </Link>
                    </div>
                    
                </div>
            </header>

            <div class="firsttwo">
                <div class="featured-itinerary">  
                  <img src={Featured} alt="" srcset="" className='mainImg'/>
                </div>
                <div class="popular">
                  <img src={Popular} alt="" srcset="" className='mainImg'/>
                </div>
            </div>
            <div class="nearme">
                <img src={NearMe} alt="" srcset="" className='mainImg'/>
            </div>
        </div>
    </div>
  );
}

export default HeroSection;
