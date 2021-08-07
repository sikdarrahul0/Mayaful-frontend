import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './VolunteerList.css';

const VolunteerList = () => {
    const [volunteerList, setVolunteerList] = useState([]);
    const {id} = useParams();
    useEffect(()=>{
        fetch(`https://mayaful.herokuapp.com/volunteer/${id}`)
        .then((res)=> res.json())
        .then((res)=> setVolunteerList(res))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return (
        <section className="container my-5">
              <h2 className="text-center text-danger mb-3">Interested Volunteer List</h2>
            <div className="row d-flex justify-content-center">
                {   volunteerList.length ?
                    volunteerList.map(volunteer=>(
                        <div className="col-md-9 col-11 mb-3">
                            <div className="volunteer-list">
                                <h6 className="d-inline-block me-2">Name: </h6>
                                <p className="d-inline-block ">{volunteer.name}</p><br />
                                <h6 className="d-inline-block  me-2">Email: </h6>
                                <p className="d-inline-block ">{volunteer.email}</p><br />
                                <h6 className="d-inline-block  me-2">Contact No: </h6>
                                <p className="d-inline-block ">{volunteer.mobileNo}</p><br />
                                <h6 className="d-inline-block  me-2">Gender: </h6>
                                <p className="d-inline-block ">{volunteer.gender}</p><br />
                                <h6 className="d-inline-block  me-2">Address: </h6>
                                <p className="d-inline-block ">{volunteer.address}</p><br />
                            </div>
                        </div>)):
                        <h5 className="text-center text-dark"> No one interested</h5>
                }
            
            </div>
        </section>
    );
};

export default VolunteerList;