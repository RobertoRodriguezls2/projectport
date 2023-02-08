import React from 'react'
import { useState, useEffect } from 'react';

import './Grill.css'

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
            const listRef = ref(storage, '/grill');


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
                    <h1>Car Grill</h1>


                </div>
                <div className='blog-img-cont' >
                    <img loading='lazy' className="blog-img-title" src={imgAr.filter(a => a.includes("https://firebasestorage.googleapis.com/v0/b/gigspot-d9384.appspot.com/o/grill%2FGrills.jpg?alt=media&token=a69b7e32-104e-44fe-b4dc-ddb5f4eac3a6"))} alt='' />
                    <img loading='lazy' className="blog-img-title" src={imgAr.filter(a => a.includes("a8c32523-c587-4b1f-bc1f-aba129591ec5"))} alt='' />

                </div>

                <div className='blog-sub'>
                    <h2>Tools used</h2>

                </div>
                <div className='blog-tools'>
                    <ul>
                        <li>
                            Precision Calipers
                        </li>
                        <li>
                            3D Scanner
                        </li>
                        <li>
                            Fusion 360
                        </li>
                        <li>
                            3D printer
                        </li>
                        <li>
                            ABS Filament
                        </li>
                    </ul>
                </div>
                <div className='blog-body'>
                    <h2>
                        Process
                    </h2>
                </div>
                <p>I started this process since one day I randomly lost one of the grills on my car. I thought it would be a good chance
                    to practice with CAD along with a 3D scanner I had recently bought. To start I first 3D scanned the grill I had using my Revopoint mini.
                    This was surprisingly a harder process than I thought it would be but eventually I dialed in some settings and slowed down my movement when going along.

                </p>


                <p>Moving on to the fun part I brought the scan data in to Fusion 360. Here I started by first making a sketch outlining the general shape.
                    To get the pattern I created a hexagon that closely fit the scan data dimensions. From there I was able to create another sketch pattern that
                    I extended outwards to cover the shape outline. Next I created a guide line that was at a slight angle since the original part has a angle as it rises towards the top.
                    Using this guide I extruded the first sketch up towards the desired height. Afterwards I extruded the 2nd sketch to cut out the pattern in the part.

                </p>
                <img loading='lazy' className="blog-img" src={imgAr.filter(a => a.includes("dcbd4e51-e7ec-4a3f-b77e-ded70943c890"))} alt='' />
                <img loading='lazy' className="blog-img" src={imgAr.filter(a => a.includes("ed39ffc3-9785-46f0-9660-e94c93885249"))} alt='' />
                <p>
                    The final part to all this was to 3d print the design. I decided on using ABS filament since this part would be on my hood
                    and would be subject to the engines heat along with sun exposure. The total print time takes around 2 hours and I'm very satisfied
                    with the results.
                </p>
                <img loading='lazy' className="blog-img" src={imgAr.filter(a => a.includes("6f45a420-f28d-4ee7-b684-28962619c3ab"))} alt='' />

            </div>
            }
        </>
    )
}
