import React from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './BloodRegistration.css';

const BloodRegistration = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    fetch("https://mayaful.herokuapp.com/blood/",{
      method: 'POST',
      headers: { 'content-type': 'application/json'},
      body: JSON.stringify(data)
    })
    .then((res)=> res.json())
    .then((res)=>{
      toast.success(res.message,{
        autoClose: 3000,
    }
    )
    } )
  }
  return (
    <section className="container my-5">
       <ToastContainer />
        <h2 className="text-danger text-center my-3">Donar Registration Form</h2>
        <div className="d-flex justify-content-center">
          <div className="donar-form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name">Name:</label><br />
              <input id="name" placeholder="Full Name" {...register("name", { required: true })} /><br />
              {errors.name&& <><span className="text-danger">Name is required</span><br/></>}
              <label htmlFor="mobile">Contact No:</label><br />
              <input id="mobile" placeholder="01XXXXXXXXX" {...register("mobileNo", { required: true })} /> <br />
              {errors.mobileNo && <><span className="text-danger">Mobile number is required</span><br/></>}
              <label htmlFor="division">Division:</label><br />
                <select id="division" {...register("division", { required: true })}>
                  <option value="Dhaka">Dhaka</option>
                  <option value="Chattagram">Chattagram</option>
                  <option value="Barisal">Barisal</option>
                  <option value="Khulna">Khulna</option>
                  <option value="Rajshahi">Rajshahi</option>
                  <option value="Rangpur">Rangpur</option>
                  <option value="Sylhet">Sylhet</option>
                  <option value="Mymensingh">Mymensingh</option>                    
                </select><br />
                <label htmlFor="group">Blood Group:</label><br />
                <select id="group" {...register("group", { required: true })}>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                </select> <br />
            <input type="submit" className="donar-reg-btn"/>
        </form>
        </div>
        </div>
    </section>
  );
};

export default BloodRegistration;