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
export default function Gauge() {
    const [imgAr, setImgAr] = useState([])
    const [isBusy, setBusy] = useState(false)


    useEffect(() => {
        async function getData() {
            const storage = getStorage();
            const listRef = ref(storage, '/pod');


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
                    <h1>Gauge Pod Cluster</h1>


                </div>
                <div className='blog-img-cont' >
                    <img loading='lazy' className="blog-img-title" src={imgAr.filter(a => a.includes("093a8fbf-b420-44f4-8ba3-767f72da2c60"))} alt='' />


                </div>

                <div className='blog-sub'>
                    <h2>Tools used</h2>

                </div>
                <div className='blog-tools'>
                    <ul>
                        <li>
                            3D Scanner
                        </li>
                        <li>
                            Precision Calipers
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
                <p>This project was commissioned to me by someone who needed a gauge pod cluster to directly fit into
                    their center console. There was no style or criteria to meet aside from needing it to fit 3
                    gauge pods. I began this by first going through google images of other trio gauge pod clusters
                    and getting design ideas.

                </p>


                <p>
                    After getting some ideas of what to do I 3d scanned the center dash console. Given that the part I was scanning was
                    symmetrical it made sense to scan half and just mirror the rest in Fusion. I started by first making a test outline of the scanned part
                    to test how accurate the scan data was. I 3d printed this test outline and once I saw everything lined up perfectly I continued on with
                    the rest of the design.
                </p>
                <div className='blog-body-img'>
                    <img loading='lazy' className="blog-img" src={imgAr.filter(a => a.includes("ecd1ee73-8150-4bc4-9eb8-531857ad6272"))} alt='' />
                    <img loading='lazy' className="blog-img" src={imgAr.filter(a => a.includes("aa8d8e99-43e3-4411-983d-cfa59a8feaa1"))} alt='' />

                </div>

                <p>
                    Before actually starting any of the design I first test printed some rings in different diameters to see what tolerances
                    my 3D printer would be capable of. Once I found a diameter I was happy with, then I was able to start on the design.
                </p>

                <p>
                    Starting the design was pretty straight forward however the challenges came with joining faces the way I wanted them to look.
                    The overall shape for all the designs were done with a loft and guide rails. This method resulted in multiple sketches
                    to be used and led to crowded work areas. Eventually I came to a design that I liked which would also fit the gauges with room
                    behind them to spare.
                </p>
                <div className='blog-body-img'>
                    <img loading='lazy' className="blog-img" src={imgAr.filter(a => a.includes("66d02f4c-0a50-452b-b2a6-c94f3c421bcd"))} alt='' />
                    <img loading='lazy' className="blog-img" src={imgAr.filter(a => a.includes("6f4df8f4-7c48-4043-bdf2-9fc8a13361b5"))} alt='' />

                </div>

                <p>
                    Finally after being happy with a design I decided that would be the model I used to print. Printing this model was pretty
                    difficult since I was trying to be efficient with the filament usage. I had to mess with support settings a lot and considering
                    that it was ABS I had to keep in mind that the material cools and shrinks fast. I eventually cut the model in two pieces to print
                    separately in order to save filament and reduce print time. Overall I was satisfied with the results and fitment of all the parts.
                </p>

                <div className='blog-body-img'>
                    <img loading='lazy' className="blog-img" src={imgAr.filter(a => a.includes("eaa98f38-6f60-4411-941e-2aae1ed28e64"))} alt='' />
                    <img loading='lazy' className="blog-img" src={imgAr.filter(a => a.includes("074b67db-1614-4179-9ff7-4195dd4770af"))} alt='' />

                </div>
                <h2>Bonus prototypes</h2>
                <div className='blog-body-img'>
                    <img loading='lazy' className="blog-img" src={imgAr.filter(a => a.includes("19abd809-d6df-43f8-9141-e42ca50acb5e"))} alt='' />
                    <img loading='lazy' className="blog-img" src={imgAr.filter(a => a.includes("ad8590ee-1fc8-4df0-8149-1dd4283dfe9a"))} alt='' />
                    <img loading='lazy' className="blog-img" src={imgAr.filter(a => a.includes("ad6ad352-395e-4002-9938-2f8ed76efff9"))} alt='' />
                </div>
            </div>
            }
        </>
    )
}
