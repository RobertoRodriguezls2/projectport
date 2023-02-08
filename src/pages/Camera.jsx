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

export default function Camera() {
    const [imgAr, setImgAr] = useState([])
    const [isBusy, setBusy] = useState(false)


    useEffect(() => {
        async function getData() {
            const storage = getStorage();
            const listRef = ref(storage, '/car');


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
                    <h1>Camera Stabilizer</h1>


                </div>
                <div className='blog-img-cont' >
                    <img loading='lazy' className="blog-img-title" src={imgAr.filter(a => a.includes("e2534108-337b-42e2-baed-12d84e94b057"))} alt='' />
                    

                </div>

                <div className='blog-sub'>
                    <h2>Tools used</h2>

                </div>
                <div className='blog-tools'>
                    <ul>
                        <li>
                            Hardware
                        </li>
                        <li>
                            Fusion 360
                        </li>
                        <li>
                            3/4 inch Drill Bit
                        </li>
                       

                    </ul>
                </div>
                <div >
                    <h2>
                        Purpose
                    </h2>
                </div>
                <p>
                    One of my hobbies is photography and video making. Mainly filming cars, which would require me to hang
                    myself and my equipment out the car. Aside from this being dangerous it wouldn't result in the best 
                    results. I decided on this build so that I can mount it on a tow hitch securely and not have to worry
                    about dropping myself or my equipment on to the road.

                </p>
                <div >
                    <h2>
                        Design
                    </h2>
                </div>

                <p>
                   I wanted this to be relatively cheap to commercial products so I went with 1 inch square tubing
                   as the frame, cut into 4, 3ft sections. Parts would be welded in pairs like an L and joined together
                   in the middle with bolts running through them. The camera would mount on to a plate that was made of 
                   2 parts. The top part would bolt on to the steel tube. While the bottom part was suspended using steel
                   cables. The steel cables would also be what helps absorb vibrations on the road.
                </p>
                <img loading='lazy' className="blog-img-title" src={imgAr.filter(a => a.includes("7adbdb20-4a74-44c6-84cb-cfbb5aafa3bb"))} alt='' />

                <div>
                    <h2>Plate Design</h2>
                </div>
                <p>
                    The plate was designed in mind with having plenty of mounting holes for accessories. For me the 
                    specific holes I needed were to mount my gimbal on it so they're located in the center. I used
                    2 1/4 inch steel plates since they'd be sturdy enough to hold all the weight without warping.
                </p>
                <img loading='lazy' className="blog-img" src={imgAr.filter(a => a.includes("d179645a-11b0-4486-9633-69269679cbf5"))} alt='' />
               
                <div>
                    <h2>
                        Result
                    </h2>
                </div>
                <p>
                    Unfortunatley I haven't had the chance to use it that often since it takes a lot of time
                    and planning for a car video to use this. However the times I have used it the results have
                    been very smooth. My camera has no image stabilization so I have to rely heavily on gimbals
                    and things like this. Given that my camera has no image stabilization if this didn't work well
                    you would be able to see a lot of the vibrations but there are little to none.
                </p>
               
            </div>
            }
        </>
    )
}