import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Blood.css';

const Blood = () => {
    const [show, setShow] = useState(false);
    const [reportDonar, setReportDonar] = useState({});
    const [bloodList, setBloodList] = useState([]);
    const [report, setReport] = useState();
    const [division, setDivision] = useState(undefined);
    const [group, setGroup] = useState(undefined);

useEffect(()=>{
    fetch("http://localhost:7000/blood/undefined/undefined")
    .then((res)=> res.json())
    .then((res)=> setBloodList(res))
},[])
  const handleClose = () => setShow(false);
  const handleShow = (donar) =>{
    setShow(true);
    setReportDonar(donar);
  } 
  const handleSearch = (e) =>{
      e.preventDefault();
    fetch(`http://localhost:7000/blood/${division}/${group}`)
    .then((res)=> res.json())
    .then((res)=> setBloodList(res))
  }
  const handleSubmit = () => {
      const newReport = {...reportDonar};
      newReport.donarId = reportDonar._id;
      delete newReport._id;
      newReport.report = report;
      fetch("http://localhost:7000/report/",{
      method: 'POST',
      headers: { 'content-type': 'application/json'},
      body: JSON.stringify(newReport)
    })
    .then((res)=> res.json())
    .then((res)=> {
        toast.success(res.message,{
            autoClose: 2700,
        }
        )
    })
      setReport();
      setShow(false);
  }
  
    return (
        <section className="container my-5">
              <ToastContainer />
            <h2 className="bolder text-center text-danger mb-3">ব্লাড ব্যাংক</h2>
            <p className="bolder text-center text-danger mb-1">আপনি যদি ব্লাড ডোনার  হয়ে থাকেন  তাহলে রেজিস্ট্রেশন করুন</p>
            <div className="text-center">
            <NavLink to="/donar/registration/"><button className="btn btn-danger m-0"> Registration</button></NavLink>
            </div>
            <div className="text-center my-3">
                <form onSubmit={handleSearch}>
                    <label className="text-danger me-2" htmlFor="division">Division:</label>
                    <select className="select-design" id="division" onChange={(e)=>setDivision(e.target.value)} required>
                        <option value="undefined">All</option>
                        <option value="Dhaka">Dhaka</option>
                        <option value="Chattagram">Chattagram</option>
                        <option value="Barisal">Barisal</option>
                        <option value="Khulna">Khulna</option>
                        <option value="Rajshahi">Rajshahi</option>
                        <option value="Rangpur">Rangpur</option>
                        <option value="Sylhet">Sylhet</option>
                        <option value="Mymensingh">Mymensingh</option>
                    </select>
                    <label className="text-danger me-2" htmlFor="group">Group:</label>
                    <select className="select-design" id="group" onChange={(e)=>setGroup(e.target.value)} required>
                        <option value="undefined">All</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                    </select>
                    <input className="blood-search" type="submit" value="Search" />
                </form>
            </div>
            <div className="blood">
            <div className="blood-table">
                <table>
                    <tr>
                    <th>Name</th>
                    <th>Mobile Number</th>
                    <th>Division</th>
                    <th>Blood Group</th>
                    </tr>
                    {
                        bloodList.length?
                        bloodList.map(blood => (
                        <tr onClick={()=> handleShow(blood)}>
                             <td>{blood.name}</td>
                             <td>{blood.mobileNo}</td>
                             <td>{blood.division}</td>
                             <td>{blood.group}</td>
                        </tr>     
                        )):
                        <tr>
                            <td></td>
                            <td style={{ textAlign: 'center'}}>No donar available</td>
                            <td></td>
                            <td></td>
                        </tr>
                    }
                </table>
            </div>
            </div>
            <Modal
               
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Body  className="report" closeButton>
                <h5 className="text-white">Report Form</h5>
                <textarea rows="4" onChange={(e)=> setReport(e.target.value)} placeholder="Type your report" />< br/>
                <Button variant="secondary me-3 mt-3" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="success mt-3" onClick={handleSubmit}>Submit</Button>
                </Modal.Body>
            </Modal>
        </section>
    );
};

export default Blood;