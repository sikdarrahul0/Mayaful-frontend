import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './UpcommingEvent.css';

const UpcommingEvent = () => {
    const [eventList, setEventList] = useState([]);
    useEffect(()=>{
        fetch("https://mayaful.herokuapp.com/event")
        .then((res)=> res.json())
        .then((res)=> setEventList(res))
    },[])
    return (
        <section className="container my-5">
            <h2 className="bolder text-center text-danger">আমাদের আগামী কর্মসূচিসমূহ</h2>
            <div className="row my-3 d-flex justify-content-center">
               {
                   eventList.map(event=>(
                    <div className="col-lg-4">
                    <div className="event-design">
                            <h5 className="my-2">{event.title}</h5>
                            <div className="event-description">{event.description}</div>
                            <NavLink to={`/single/event/${event._id}`}><button className="reg-btn">আরো জানুন</button></NavLink> 
                        </div>
                    </div>
                   ))
               }                
            </div>
        </section>
    );
};

export default UpcommingEvent;