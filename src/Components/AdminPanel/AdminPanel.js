import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './AdminPanel.css';
import DonarReport from './DonarReport/DonarReport';

const AdminPanel = () => {
  const [eventList, setEventList] = useState([])
  const { register, handleSubmit, formState: { errors } } = useForm();
  useEffect(()=>{
    fetch("http://localhost:7000/event")
    .then((res)=> res.json())
    .then((res)=> setEventList(res))
  },[])
  const onSubmit = data => {
    fetch("http://localhost:7000/event/",{
      method: 'POST',
      headers: { 'content-type': 'application/json'},
      body: JSON.stringify(data)
    })
    .then((res)=> res.json())
    .then((res)=> {
      toast.success(res.message,{
        autoClose: 2500,
    }
    )
    })
  }
  const deleteEvent = (id) => {
    fetch(`http://localhost:7000/event/${id}`,{
          method: 'DELETE',
          headers: {'Content-Type': 'application/json'}
      })
      .then(res => res.json())
      .then(res => {
        toast.success(res.message,{
          autoClose: 2500,
      }
      )
      })
  }
  return (
    <section className="container my-5">
       <ToastContainer />
        <h2 className="text-danger text-center my-3">New Event Form</h2>
          <div className="event-form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name">Title:</label><br />
              <input id="title" placeholder="Event Title" {...register("title", { required: true })} /><br />
              {errors.title&& <><span className="text-danger">Title is required</span><br/></>}
              <label htmlFor="description">Description:</label><br />
              <textarea id="description" {...register("description", { required: true })} /><br />
              {errors.description && <><span className="text-danger">Description is required</span><br/></>}
              <label htmlFor="volunteer">Required volunteer:</label><br />
              <input id="volunteer" placeholder="XX" {...register("volunteer", { required: true })} /> <br />
              {errors.volunteer && <><span className="text-danger">Volunteer is required</span><br/></>}
              <div className="d-flex justify-content-center">
                 <input type="submit" className="event-submit-btn"/>
              </div>
        </form>
        </div>
        <div className="my-5">
          <h2 className="text-center text-danger mb-3">Upcomming Event</h2>
          <div className="row">
          {
            eventList.map(event => (
              <div className="col-lg-4 col-md-5 col-sm-12">
                <div className="single-event-post">
                    <h4 className="bolder text-white">{event.title}</h4>
                    <NavLink to={`/volunteer/list/${event._id}`}><button  className="btn btn-dark mb-2 me-3">Interested Volunteer</button></NavLink> 
                    <button onClick={()=> deleteEvent(event._id)} className="btn btn-danger mb-2">Delete Event</button>
                </div>
              </div>
            ))
          }
          </div>
        </div>
        <DonarReport />        
    </section>
  );
};

export default AdminPanel;