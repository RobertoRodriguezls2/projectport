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
export default function CncAcc() {
    const [imgAr, setImgAr] = useState([])
    const [isBusy, setBusy] = useState(false)


    useEffect(() => {
        async function getData() {
            const storage = getStorage();
            const listRef = ref(storage, '/cncAcc');


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
                    <h1>CNC Accessories</h1>


                </div>
                <div className='blog-img-cont' >
                    <img loading='lazy' className="blog-img-title" src={imgAr.filter(a => a.includes("539dd3dc-f86a-4185-a12b-79e841585290"))} alt='' />
                    

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
                        <li>
                            PLA Filament
                        </li>
                       

                    </ul>
                </div>
                <div >
                    <h2>
                        Layout
                    </h2>
                </div>
                <p>
                    This is a sort of continuation to the CNC build that I wrote about. These are all accessories that I 
                    designed and printed for the CNC.

                </p>
                <div >
                    <h2>
                        Limit Switches
                    </h2>
                </div>
                

                <p>
                   Here are the limit switch holders I made and used. They work really well and so far have had no issues
                   with them breaking or falling off. I had to create a different one for the Z axis since it would be mounted
                   and activated differently.
                </p>
                <img loading='lazy' className="blog-img-title" src={imgAr.filter(a => a.includes("def59629-5172-4b98-8feb-a98ac120d677"))} alt='' />
                <img loading='lazy' className="blog-img-title" src={imgAr.filter(a => a.includes("61b207b9-b877-4a88-a4a3-091836895622"))} alt='' />
                <div>
                    <h2>Router Mount</h2>
                </div>
                <p>
                    Since I was going to be using a Dewalt router as my cutting tool I had to make this mount as 
                    I couldn't find one online for a decent price. It took a couple test prints to make a mount that
                    hugged the router tight enough but eventually I was able to get it. My first design secured the mount
                    to the C beam extrusion from the side but I later updated it to go through the middle. So far the mount 
                    has had no issues at all given that it was also printed in PLA and has run multiple hour long jobs.
                </p>
                <img loading='lazy' className="blog-img" src={imgAr.filter(a => a.includes("e8268b5f-96ca-42fe-a5e0-08564b4af761"))} alt='' />
               
                <div>
                    <h2>
                        Drag Chain
                    </h2>
                </div>
                <p>
                    I didn't have a drag chain at first so I thought I would try making one instead of buying one.
                    This is one of the things where "just because you can, doesn't mean you should" applies.
                    While I was able to make one that worked, each link took about 20 minutes to print and that was
                    with an open top.I decided against this since they weren't big enough once I started adding more
                    wires so I did end up just buying some. Overall a nice attempt that worked but for convenience it was
                    better to buy some.
                </p>
                <img loading='lazy' className="blog-img" src={imgAr.filter(a => a.includes("5c36c32c-7b9f-4fa0-ba88-632e8fb9d0ff"))} alt='' />
               
            </div>
            }
        </>
    )
}