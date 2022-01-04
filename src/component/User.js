import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import emailSvg from '../assets/email.svg'
import locationSvg from '../assets/location.svg'
import phoneSvg from '../assets/phone.svg'
import './User.css'

const User = () => {

const [user, setUser] = useState([])
const {title, first, last, email, phone, city, country, age, date, large} = user;
const getData = async () => {
    const res = await axios.get('https://randomuser.me/api/')
    const info = await res.data.results[0]
    // console.log(info);
    const {name: {title, first, last}, email, phone, location: {city, country}, dob: {age, date}, picture: {large}} = info;
    setUser({title, first, last, email, phone, city, country, age, date : date.substring(0,10), large})   
}

useEffect(() => {
    getData();
}, [])

const handleClick = () => {
    getData()
}



    return (
        <div>
            <div className="container">
                <div className="card">
                    <div className="info">
                        <div className='leftPart'>
                            <img className='userImg' src={large} alt={first} />
                        </div>
                        <div className='rightPart'>
                            <h3>{title} {first} {last}</h3>
                        </div>
                    </div>
                    <div className="info">
                        <div className="leftPart">
                            <img src={emailSvg} alt="email" />
                        </div>
                        <div className="rightPart">
                            <h4>{email}</h4>                        
                        </div>
                    </div>
                    <div className="info">
                        <div className="leftPart">
                            <img src={phoneSvg} alt="phone" />
                        </div>
                        <div className="rightPart">
                            <h4>{phone}</h4>                        
                        </div>                                            
                    </div>
                    <div className="info">
                        <div className="leftPart">
                            <img src={locationSvg} alt="location" />
                        </div>
                        <div className="rightPart">
                            <h4>{city} - {country} </h4>                        
                        </div>                          
                    </div>
                    <div className="info">
                        <h4>Age: {age}</h4>
                    </div>
                    <div className="info">
                        <h4>Register Date: {date}</h4>
                    </div>
                </div>
                <button onClick={handleClick}>Random User</button>
            </div>
        </div>
    )}

export default User
