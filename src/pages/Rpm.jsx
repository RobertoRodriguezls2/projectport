import React from 'react'
import { useState, useEffect } from 'react';
import './Grill.css'
import { Link } from 'react-router-dom'


import {
    getStorage,
    ref,
    getDownloadURL,
    list,
} from 'firebase/storage';
import Loader from '../components/Loader';
import Navbar from '../components/Navbar';
export default function Grill() {
    const [imgAr, setImgAr] = useState([])
    const [isBusy, setBusy] = useState(false)


    useEffect(() => {
        async function getData() {
            const storage = getStorage();
            const listRef = ref(storage, '/rpm');


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
                    <h1>Rpm ShiftLight</h1>


                </div>
                <div className='blog-img-cont' >
                    <img loading='lazy' className="blog-img-title" src={imgAr.filter(a => a.includes("ff86a20c-bea9-4ba0-86e7-6abb75f6c54c"))} alt='' />

                </div>

                <div className='blog-sub'>
                    <h2>Tools used</h2>

                </div>
                <div className='blog-tools'>
                    <ul>
                        <li>
                            ESP-32
                        </li>
                        <li>
                            WS2812 LEDs
                        </li>
                        <li>
                            Fusion 360
                        </li>
                        <li>
                            3D printer
                        </li>
                        <li>
                            PLA Filament
                        </li>
                        <li>
                            Arduino IDE
                        </li>
                        <li>
                            ELM 327 Bluetooth Module
                        </li>
                    </ul>
                </div>
                <div >
                    <h2>
                        Process
                    </h2>
                </div>
                <p>
                    I wanted to create a shift light for my car similar to race cars. The layout seemed pretty straight forward.
                    Have an ELM 327 connected to the cars OBD!! port, Have the Arduino connect to the ELM 327 and read its data.
                    Once I had the cars data I could use that to activate the LEDs accordingly.
                </p>

                <div>
                    <h2>
                        Connecting to the Car
                    </h2>
                </div>
                <p>
                    The first thing I had to was be able to get data from the car. The ELM 327 allows me to do that through bluetooth so
                    now I had to find a way for the ESP32 to connect to it. Thankfully there is a library available that simplifies this
                    written by PowerBroker2 called "ELMduino". This made it simple to connect to the ESP32 and get the data I wanted From
                    the car.
                </p>
                <div>
                    <h2>
                        Outputting Data
                    </h2>
                </div>
                <p>
                    The hardest part of this project was getting everything to work together. Since I was using bluetooth and live 
                    data to almost instanlty output results there was a huge lag at first. Reading the the data had no issues and getting the
                    LEDs to light up along side that wasn't much of an issue either. However the issue started when I wanted to display
                    the cars RPM on the ESP32's screen. Writing text to the screen was very heavy on processing power and would result in data lag.
                    In order to fix this I learned how to use the Dual Cores the ESP32 has. I dedicated one core to connect to the ELM327 and activate
                    the LEDs. The other core was in charge of writing the cars RPM to the ESP32's screen. 
                </p>
                <div>
                    <h2>
                        Interface
                    </h2>
                </div>
                <p>
                    In order to control the activation point of when the LEDs would start along with when they should change color. 
                    I had the ESP32 act as an access point which would then serve a static web app once connected to it. Here a user
                    could change the settings to the LEDs such as the brightness and activation points. I decided to go this way since it
                    would be easier than to create a mobile app.
                </p>

                <div>
                    <h2>
                        Result
                    </h2>
                </div>
                <p>
                    Overall I'm happy with the result of the program. The main issue I had was the 3d printed enclosure which wasn't really
                    designed with looks in mind since I just wanted an easy way to look at all the components. Another issue was the screen 
                    is a simple 64x128 screen so it's also not too pretty to look at. In the future I plan to work on the aesthetic more
                    and maybe implement some more features while I'm at it. 
                </p>
                <Link to={'https://youtu.be/z6IbzuHRPtE'}> <img loading='lazy' className="blog-img-title" src={imgAr.filter(a => a.includes("91d3c26b-dfd1-44b9-bcd5-12ea31d8b6ca"))} alt='' /></Link>

            </div>
            }
        </>
    )
}
