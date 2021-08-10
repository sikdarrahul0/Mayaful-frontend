import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DonorReport = () => {
    const [reportList, setReportList] = useState([]);
    useEffect(()=>{
        fetch("https://mayaful.herokuapp.com/report")
        .then((res)=> res.json())
        .then((res)=> setReportList(res))
    },[])
    const deleteReport =(id) => {
      fetch(`https://mayaful.herokuapp.com/report/${id}`,{
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
    const deleteDonor = (donorId, reportId) => {
      fetch(`https://mayaful.herokuapp.com/report/${reportId}`,{
          method: 'DELETE',
          headers: {'Content-Type': 'application/json'}
      })
      fetch(`https://mayaful.herokuapp.com/blood/${donorId}`,{
          method: 'DELETE',
          headers: {'Content-Type': 'application/json'}
      })
      .then(res => res.json())
      .then(res => {
        toast.success(res.message,{
            autoClose: 2700,
        }
        )
      })
    }
    return (
        <div className="my-5">
               <ToastContainer />
           <h2 className="text-center text-danger mb-3">Donor Report</h2>
            <div className="row d-flex justify-content-center">
                {
                    reportList.length ?
                    reportList.map(report =>(
                        <div className="col-md-7 col-11 mb-3">
                            <div className="report-donor">
                                <h6 className="d-inline-block me-2">Name: </h6>
                                <p className="d-inline-block">{report.name}</p><br />
                                <h6 className="d-inline-block me-2">Contact No: </h6>
                                <p className="d-inline-block">{report.mobileNo}</p><br />
                                <h6 className="d-inline-block me-2">Division: </h6>
                                <p className="d-inline-block">{report.division}</p><br />
                                <h6 className="d-inline-block me-2">Group: </h6>
                                <p className="d-inline-block">{report.group}</p><br />
                                <h6 className="d-inline-block me-2">Report:</h6>
                                <p className="d-inline-block">{report.report}</p><br />
                                <button onClick={()=> deleteDonor(report.donarId, report._id)} className="btn btn-danger mb-3 me-5">Delete Donor</button>
                                <button onClick={()=> deleteReport(report._id)} className="btn btn-danger mb-3 me-5">Delete Report</button>
                            </div>
                        </div>
                    )): 
                    <h5 className="text-center text-dark"> No report found</h5>
                }
            </div>
        </div>
    );
};

export default DonorReport;