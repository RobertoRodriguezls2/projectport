import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css'


export default function Card({ Title, Body, Image, Location, Tag1, Tag2, Tag3, Tag4 }) {
    return (

<>

<div className="card-container">
            
            <div className="img-container">
                <div className='img-hold'>
                    <img className="display-img" src={Image} alt="" />
                </div>
                <div className="txt-container">
                    <h5 className="card-title">{Title}</h5>
                    <p className="card-paragraph">
                        {Body}
                        
                    </p>
                    <Link to={Location}><button type="button" className="card-btn">View</button></Link>
                    <div className='tags-cont'>

                        {Tag1 && <span className='tags'>
                            {Tag1}
                        </span>}
                        
                        
                        {Tag2 && <span className='tags'>
                            {Tag2}
                        </span>}
                        {Tag3 && <span className='tags'>
                            {Tag3}
                        </span>}
                        {Tag4 && <span className='tags'>
                            {Tag4}
                        </span>}
                    </div>


                </div>
            </div>
        </div>
</>
        
    )
}
