import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import './SingleEvent.css';

const SingleEvent = () => {
    const [event, setEvent] = useState({});
    const {id} = useParams();
    const { register, handleSubmit, formState: { errors } } = useForm();
    useEffect(()=>{
        fetch(`https://mayaful.herokuapp.com/event/${id}`)
        .then((res)=> res.json())
        .then((res)=> setEvent(res[0]))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    const onSubmit = (data) => {
        data.eventId = id;
        fetch("https://mayaful.herokuapp.com/volunteer/",{
            method: 'POST',
            headers: { 'content-type': 'application/json'},
            body: JSON.stringify(data)
          })
          .then((res)=> res.json())
          .then((res)=> {
            alert(res.message);
          })
    }
    return (
        <section className="container my-4">
            <h3 className="text-center bolder my-3">কর্মসূচির বিস্তারিত</h3>
            <div className="row">
                <div className="col-12 p-3 single-event">
                    <h6 className="bolder d-inline me-2">কর্মসূচির নাম:</h6>
                    <p className="d-inline">{event.title}</p>
                    <hr />
                    <h6 className="bolder d-inline me-2">কর্মসূচির বর্ণনা:</h6>
                    <p className="d-inline">{event.description}</p>
                    <hr />
                    <h6 className="bolder d-inline me-2">বিশেষ দ্রষ্টব্য:</h6>
                    <p className="d-inline">আমাদের এই কার্যক্রম সফলভাবে সম্পন্ন করতে {event.volunteer} জন স্বেচ্ছাসেবক  প্রয়োজন। আপনি যদি আমাদের এ কার্যক্রমে  অংশগ্রহণ করতে আগ্রহী হন তাহলে নিচের স্বেচ্ছাসেবক ফর্মটি পূরণ করুন। আমরা মায়াফুল টিম আপনার সাথে যোগাযোগ করব, ধন্যবাদ।</p>
                </div>
            </div>
            <h3 className="text-center bolder mb-3 mt-5">Volunteer Registration Form</h3>
            <div className="row d-flex justify-content-center">
                <div className="col-lg-6">
                    <div className="volunteer-form">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label htmlFor="name">Name:</label><br />
                            <input id="name" placeholder="Full Name" {...register("name", { required: true })} /><br />
                            {errors.name&& <><span className="text-danger">Name is required</span><br/></>}
                            <label htmlFor="email">Email:</label><br />
                            <input id="email" type="email" placeholder="Email" {...register("email", { required: true })} /><br />
                            {errors.email&& <><span className="text-danger">Email is required</span><br/></>}
                            <label htmlFor="mobile">Contact No:</label><br />
                            <input id="mobile" placeholder="01XXXXXXXXX" {...register("mobileNo", { required: true })} /> <br />
                            {errors.mobileNo && <><span className="text-danger">Contact number is required</span><br/></>}
                            <label htmlFor="gender">Gender:</label><br />
                                <select id="gender" {...register("gender", { required: true })}>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Common Gender">Common Gender</option>            
                                </select><br />
                            <label htmlFor="address">Address:</label><br />
                            <textarea id="address" {...register("address", { required: true })} /><br />
                            {errors.address && <><span className="text-danger">Address is required</span><br/></>}
                            <div className="d-flex justify-content-center">
                            <input type="submit" className="volunteer-reg-btn"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SingleEvent;