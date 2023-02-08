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
export default function Compress() {
    const [imgAr, setImgAr] = useState([])
    const [isBusy, setBusy] = useState(false)


    useEffect(() => {
        async function getData() {
            const storage = getStorage();
            const listRef = ref(storage, '/comp');


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
                    <h1>Image Compressor</h1>


                </div>
                <div className='blog-img-cont' >
                    <img loading='lazy' className="blog-img-title" src={imgAr.filter(a => a.includes("b14d73bf-3b5f-455b-acef-9cd58a1fc8ec"))} alt='' />
                    

                </div>

                <div className='blog-sub'>
                    <h2>Tools used</h2>

                </div>
                <div className='blog-tools'>
                    <ul>
                        <li>
                            Python
                        </li>
                        <li>
                            Tkinter, Pil Libraries
                        </li>
                      
                       

                    </ul>
                </div>
                <div >
                    <h2>
                        Purpose
                    </h2>
                </div>
                <p>
                    While Creating my first Photography website I had to compress many of my images in bulk.
                    On top of compressing them I wanted to rename them numerically and doing all that would take a 
                    long time. Online image converters work but limit you on usage along with slow donwload speeds
                    when donwloading the finished results. I made this python GUI tool to speed all this up. 

                </p>
                <div >
                    <h2>
                        Design
                    </h2>
                </div>
                <p>
                    I first got a script to work where given a folder path the script would go through and compress 
                    each image along with renaming it and saving it to a new path. Once that was done I started working
                    on the GUI. Some key components I thought were necessary were allowing a user to select a folder,
                    letting them choose a save destination, having them choose a format to save as and letting them 
                    choose the quality to save it as.
                </p>
                
                <div >
                    <h2>
                        Result
                    </h2>
                </div>
                <p>
                    This script has worked very well and sped up my workflow a lot. Something I plan on adding in the
                    future is a prefix or name to add as it renames the files but for now it works well enough for me.
                </p>
               
               
            </div>

            }
        </>
    )
}