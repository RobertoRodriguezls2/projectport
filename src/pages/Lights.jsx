import React from 'react'

import './Grill.css'


// import Loader from '../components/Loader';
import Navbar from '../components/Navbar';
export default function Lights() {

    return (
        <>
         <Navbar />
          


           <div className='blog-cont'>




                <div className='blog-title'>
                    <h1>Tail Lights Controller</h1>


                </div>
                <div className='blog-img-cont' >
               
                </div>

                <div className='blog-sub'>
                    <h2>Tools used</h2>

                </div>
                <div className='blog-tools'>
                    <ul>
                        <li>
                            ESP32
                        </li>
                        <li>
                            Arduino IDE
                        </li>
                        <li>
                            WS2812b LEDs
                        </li>
                      
                       

                    </ul>
                </div>
                <div >
                    <h2>
                        Purpose
                    </h2>
                </div>
                <p>
                    One of my hobbies is being into cars and anything automotive. I have many friends who have classic cars
                    that they fix up. This project is currently on going but is aimed to take on companies who sell tail 
                    lights with certain features. Those features are things like sequential turn signal animations, the speed
                    of the turn signal, and other animations with the tail lights. My goal is to create a board with firmware
                    the board runs on that will make it easy for users to create their own animations opposed to preset ones from 
                    other manufacturers.

                </p>
   
               
            </div>

            
        </>
    )
}