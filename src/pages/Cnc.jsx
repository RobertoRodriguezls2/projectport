import React from 'react'
import { useState, useEffect } from 'react';
import './Grill.css'

import {
    getStorage,
    ref,
    getDownloadURL,
    list
} from 'firebase/storage';
import Loader from '../components/Loader';
import Navbar from '../components/Navbar';
export default function Cnc() {
    const [imgAr, setImgAr] = useState([])
    const [isBusy, setBusy] = useState(false)


    useEffect(() => {
        async function getData() {
            const storage = getStorage();
            const listRef = ref(storage, '/cnc');


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
                    <h1>CNC Machine</h1>


                </div>
                <div className='blog-img-cont' >
                    <img loading='lazy' className="blog-img-title" src={imgAr.filter(a => a.includes("a14a2ea8-d829-4971-a2ce-1897fe7eb97a"))} alt='' />
                    

                </div>

                <div className='blog-sub'>
                    <h2>Tools used</h2>

                </div>
                <div className='blog-tools'>
                    <ul>
                        <li>
                            Arduino Nano Running Grbl
                        </li>
                        <li>
                            Workbee 750X750 Frame
                        </li>
                        <li>
                            (4)DM556 Stepper Motor Drivers
                        </li>
                        <li>
                            (4)Nema 23 Stepper Motors
                        </li>
                        <li>
                            24v Power Supply
                        </li>
                        <li>
                            16 gauge wire
                        </li>
                        <li>
                            Drag Chains
                        </li>

                    </ul>
                </div>
                <div >
                    <h2>
                        Layout
                    </h2>
                </div>
                <p>
                    This CNC build started as an impulse buy where I found the frame and motors for sale locally for $400.
                    Knowing nothing about cnc except what they were capable of I knew I had to get it. Having bought it, I soon started
                    searching up ways on how to control it and get it running under its own power. Here is where the first problems
                    came and the 2 major roads to go down.
                </p>
                <div >
                    <h2>
                        Premade Controllers? Open Source? Mach3?
                    </h2>
                </div>
                

                <p>
                    How to get the machine to move on its own was the first major issue. Theres 2 ways most hobbyist go, one using a paid
                    software called Mach 3 and the other using GRBL's open source firmware. I chose to go with GRBL since it was free
                    and to me Mach 3 didn't have anything I couldn't do with GRBL. Going the GRBL route I now had to choose a controller.
                    There's plenty of premade controllers that utilize GRBL and all ranging in price but ultimately they all work the same.
                    Since GRBL is made to run on an Atmega128 chip, Arduino Nano's can run GRBL without any extra components aside From
                    stepper drivers. Arduino nanos also cost around $10 while dedicated GRBL controllers go for around $30.
                </p>
                <img loading='lazy' className="blog-img-title" src={imgAr.filter(a => a.includes("9df2a2a9-2a82-4795-9350-1fe47d161244"))} alt='' />

                <div>
                    <h2>Wiring the Motors</h2>
                </div>
                <p>
                    Now that I had chosen a board, I could finally work on getting the machine to move on its own. Since I knew nothing about
                    CNC machines that meant I had to figure out all the wiring. To start the Stepper motors had 4 wires which I had to figure
                    out their pairs in order to wire them up correctly with the stepper drivers. Once that was sorted out I had to wire the
                    stepper drivers accordingly to the pinout that GRBL uses with the Nano. Using the GRBL wiki page on Github makes wiring everything together
                    pretty straight forward.
                </p>
                <img loading='lazy' className="blog-img" src={imgAr.filter(a => a.includes("2fcb7b08-14ff-4ad0-af18-70bbeaafe244"))} alt='' />
               
                <div>
                    <h2>
                        Getting it Moving
                    </h2>
                </div>
                <p>
                    Once all the motors were connected to their drivers, the drivers connected to the Nano and the power supply
                    connected to the drivers, it was finally time to try getting the machine to move on its own. In order to do that
                    I had to get a way to send Gcode to the Nano and to do that I used Universal Gcode Sender. Once I went through the
                    setup it was finally time to give it its first command. A simple X jog movement at a feed rate of 1000 mm/s was more than
                    enough to get me excited of all the possibilities I had with this machine. This small movement was such a big milestone
                    as I had known nothing at all about these machines and here I was getting one to move all on its own.
                </p>
                <div>
                    <h2>Fine Tuning</h2>
                </div>
                <p>
                    Once I had the machine moving on its own I spent a good amount of time cleaning things up such as the wiring, adding
                    drag chains and adding limit switches. During all this one of the things I did was adjust the microstepping on all the
                    stepper drivers. Another Thing I had to do was enable Normally closed limit switches in GRBL's code. By default these are
                    set to Normally open and were giving me issues when I had wired mine up normally closed. To eliminate the risk of a false
                    trip capacitors were added along with some resistors to filter noise.
                </p>
                <img loading='lazy' className="blog-img" src={imgAr.filter(a => a.includes("20e46f2e-0d13-41df-a053-96d298d351cc"))} alt='' />
                
                <div>
                    <h2>Final Setup</h2>
                </div>
                <p>
                    Once everything was running realiably and I had gotten more experienced with Gcode, I decided to build a custom board that only uses
                    the arduino nano. The design was simple and made it cleaner and easier to connect wires directly to the Nano. While designing the board
                    I also included the limit switches diagram inorder to filter out noise. I had a lot of fun with this project and the things I can
                    do with it are pretty limitless. The biggest success from this is that I knew nothing at all about CNC machines or programming them
                    to now being able to run multiple jobs and even incorporated a laser module.

                </p>

                
                <img loading='lazy' className="blog-img" src={imgAr.filter(a => a.includes("516572c5-b247-4b2c-8b2e-bd5129c0ded2"))} alt='' />
                <img loading='lazy' className="blog-img" src={imgAr.filter(a => a.includes("b18befc4-58d4-44ca-a81b-9ff06df24433"))} alt='' />
                <img loading='lazy' className="blog-img" src={imgAr.filter(a => a.includes("e1a78702-e0f3-4c03-b4ac-97ebed0cae92"))} alt='' />
                
            </div>
            }
        </>
    )
}