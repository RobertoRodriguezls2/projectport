import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import './Grill.css'

import {
    getStorage,
    ref,
    getDownloadURL,
    list,
} from 'firebase/storage';
import Loader from '../components/Loader';
import Navbar from '../components/Navbar';
export default function Rgb() {
    const [imgAr, setImgAr] = useState([])
    const [isBusy, setBusy] = useState(false)


    useEffect(() => {
        async function getData() {
            const storage = getStorage();
            const listRef = ref(storage, '/rgb');


            await list(listRef).then(res => {
                console.log(res.items)
                res.items.map(async (a) => {
                    const b = JSON.stringify(a.fullPath)
                    console.log(b)
                    const storage = getStorage();
                    await getDownloadURL(ref(storage, a.fullPath)).then(url => {
                        console.log("Link is" + url)
                        setImgAr(prevState => [...prevState, url]);
                        setBusy(true)

                    }).catch((error) => {
                        console.log(error)
                    })
                })

            })
        }
        getData()

        console.log(isBusy)

    }, [isBusy])

    return (
        <>
         <Navbar />
            {!isBusy && <div className='load'><Loader /></div>}


            {isBusy && <div className='blog-cont'>




                <div className='blog-title'>
                    <h1>Rgb TubeLight</h1>


                </div>
                <div className='blog-img-cont' >
                    <img loading='lazy' className="blog-img-title" src={imgAr.filter(a => a.includes("ba26bc4b-fab6-49b0-b4e4-30b222c55ec8"))} alt='' />
                    

                </div>

                <div className='blog-sub'>
                    <h2>Tools used</h2>

                </div>
                <div className='blog-tools'>
                    <ul>
                        <li>
                            Arduino Mega
                        </li>
                        <li>
                            Flutter
                        </li>
                        <li>
                            HC05 Bluetooth Module
                        </li>
                        <li>
                            Arduino IDE
                        </li>
                        <li>
                            WS2812 LED strip
                        </li>
                       

                    </ul>
                </div>
                <div >
                    <h2>
                        Purpose
                    </h2>
                </div>
                <p>
                    This is my senior project for my last class in my Computer Science undergrad program. I chose this
                    project because I thought it would be fun to do along with learning how to incoporate hardware with 
                    software, getting introduced to mobile development, and learning basic wiring schematics.

                </p>
                <div >
                    <h2>
                        Design
                    </h2>
                </div>
                <p>
                    My first thought of this project was trying to figure out to communicate the arduino with my phone
                    through bluetooth. Once that would be figured out the next step would be to develop an app that can
                    connect to the arduino and send simple messages. Once all that was sorted I could work on the functionality
                    of making a menu system and controlling the lights.
                </p>
                
                <div >
                    <h2>
                        Mobile App
                    </h2>
                </div>
                <p>
                    The hardest part of this project was the mobile app. In order to create an android and apple app 
                    I chose to go with flutter. While it was a good learning experience I feel like there was a learning 
                    curve to it since I've never done any mobile development. That paired with flutter being less than 
                    5 years old, led to me having a lot of trouble and limitations. I had to juggle between the UI breaking
                    and certain commands not going through to the arduino. Eventually I got the app working with only a
                    couple of issues. One of the biggest issues that I couldn't end up fixing was when sliding through a color 
                    wheel, the colors would lag behind being sent and it would not update in real time.
                </p>
                <img loading='lazy' className="blog-img-title" src={imgAr.filter(a => a.includes("7c884067-fbec-4492-8b7d-5a5fd9a1fabc"))} alt='' />
                <div >
                    <h2>
                        Arduino Code
                    </h2>
                </div>
                <p>
                    Programming the Arduino was slightly easier since it was just acting as a reciever for the most
                    part. The part that was difficult was getting the arduino to be able to parse commands accurately 
                    and quickly. Eventually I was able to figure out how to send strings of messages that were
                    then parsed correctly. These strings would be inputs for functions to either navigate through 
                    the arduinos menu that I programmed or to trigger the lights to turn on. The main issue I had that 
                    I never got to was, how to handle data when it was sent in too fast to. This would result in incorrect
                    colors in the color wheel menu.
                </p>

                <div >
                    <h2>
                        Result
                    </h2>
                </div>
                <p>
                    By the end of the semster when I had to present my project it was functional for the most part. I 
                    considered what I got done a success considering I knew nothing about mobile development and got a 
                    working project in just 5 weeks of work. The only issues I had left when the deadline came was in the
                    color wheel menu, when scrolling to select a color. The color where your finger last was is what would
                    be sent to the arduino and shown. That and small UI bugs such as small buttons or components bigger than 
                    usual depending on the device would appear. You can View a demo of my project below.
                </p>
                <Link to={"https://youtu.be/ndP7aVbPUag"}><img loading='lazy' className="blog-img-title" src={imgAr.filter(a => a.includes("e4684e74-6395-4902-a54a-7ffd01063135"))} alt='' /></Link>
                
            </div>

            }
        </>
    )
}