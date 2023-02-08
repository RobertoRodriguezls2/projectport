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
export default function Laser() {
    const [imgAr, setImgAr] = useState([])
    const [isBusy, setBusy] = useState(false)


    useEffect(() => {
        async function getData() {
            const storage = getStorage();
            const listRef = ref(storage, '/laser');


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
                    <h1>Laser Rotary</h1>


                </div>
                <div className='blog-img-cont' >
                    <img loading='lazy' className="blog-img-title" src={imgAr.filter(a => a.includes("c692d148-e495-49ad-aca6-47535a989044"))} alt='' />
                    

                </div>

                <div className='blog-sub'>
                    <h2>Tools used</h2>

                </div>
                <div className='blog-tools'>
                    <ul>
                        <li>
                            3D printer
                        </li>
                        <li>
                            Fusion 360
                        </li>
                      
                       

                    </ul>
                </div>
                <div >
                    <h2>
                        Purpose
                    </h2>
                </div>
                <p>
                    After getting the CNC to work and move I had bought a Laser module to cut and engrave things.
                    In order to engrave cylindrical objects I had to get a rotary attachment. Most commercial ones 
                    were about $100+ for essentially it just being an extra stepper motor with a rod attached to it.


                </p>
                <div >
                    <h2>
                        Design
                    </h2>
                </div>
                <p>
                    Making this wasn't too bad, the hardest part was finding an object that would roll with
                    the stepper motor when attached to it. Luckily for me I found giant rubber rollers that help guide
                    gates were a good use.
                </p>
                <img loading='lazy' className="blog-img-title" src={imgAr.filter(a => a.includes("da6be671-eb27-484c-8b5d-dff467c52690"))} alt='' />
                <div >
                    <h2>
                        Result
                    </h2>
                </div>
                <p>
                    When finished I had to calibrate the attachment for its steps per mm in order to get accurate
                    engravings. Once calibrated the laser rotary worked very well and could do hour long jobs without any issues.
                </p>
                <Link to={"https://youtu.be/rmjKO0JR8uE"}> <img loading='lazy' className="blog-img-title" src={imgAr.filter(a => a.includes("a22d6017-44d0-4e8e-89c4-19f7740c805a"))} alt='' /></Link>
               
            </div>

            }
        </>
    )
}