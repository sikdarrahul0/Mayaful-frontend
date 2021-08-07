import React, { useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserContext } from '../../App';
import './Login.css';

const Login = () => {
    // eslint-disable-next-line no-unused-vars
    const [loggedInAdmin, setLoggedInAdmin] = useContext(UserContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: '/' } };

    const notify1 = (message) => toast.error(message);
    const notify2 = (message, time) => toast.success(message,{
        autoClose: time,
    });

    const handleLogin = (e)=>{
        e.preventDefault();
        const loginData = {
            username,
            password,
        }
        fetch(`https://mayaful.herokuapp.com/admin/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(loginData),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.error) {
                    notify1(result.error);
                } 
                else{
                    notify2(result.message, 2000);
                    setTimeout(()=> {
                        localStorage.setItem('mayaful_token', result.access_token);
                        setLoggedInAdmin(result.access_token);
                        history.replace(from);
                    }, 2100);
                }
            });
    }
    return (
        <section className="container my-5">
             <ToastContainer />
               <h3 className="text-danger text-center mb-4">Admin Log In</h3>
            <div className="d-flex justify-content-center"> 
                <div className="login-panel">
                    <form onSubmit={handleLogin}>
                        <label className="mb-2" htmlFor="username">Username:</label><br />
                        <input type="email" id="username" placeholder="Email" className="form-control mb-3" onChange={(e)=> setUsername(e.target.value)} required/>
                        <label className="mb-2" htmlFor="password">Password:</label><br />
                        <input type="password" id="password" placeholder="Password" className="form-control mb-3" onChange={(e)=> setPassword(e.target.value)} required/>
                        <div className="d-flex justify-content-center"> 
                        <input type="submit" value="Log In" className="login-btn" />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Login;