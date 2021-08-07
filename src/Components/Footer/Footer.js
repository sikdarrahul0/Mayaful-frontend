import { faFacebook, faGoogle, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCopyright, faMapMarker, faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import logo from '../../logo.png';
import './Footer.css';

const Footer = () => {
    return (
        <section className="footer">
        <div className="container">
        <div className="row">
            <div className="col-lg-5 col-md-12 mb-4">
                <img src={logo} alt="logo" />
                <p className="me-3 pe-3">মায়াফুল একটি অলাভজনক স্বেচ্ছাসেবক সংস্থা। আমরা বিশেষভাবে সুবিধাবঞ্চিত শিশুদের নিয়ে কাজ করে থাকি। এছাড়া আমরা অসহায় দুঃস্থদের প্রতি মায়ার হাত বাড়িয়ে দিই দেওয়ার চেষ্টা করি। </p>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 mb-4 footer-div">
                <h5 className="bolder mb-4">পরিদর্শন</h5>
                <p>প্রকল্পসমুহ</p>
                <p>স্পন্সর</p>
                <p>গ্যালারি</p>
                <p>আগামী কর্মসূচিসমূহ</p>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 mb-4 footer-div">
                <h5 className="bolder mb-4">সাহায্য</h5>
                <p>প্রয়োজনীয় প্রশ্ন</p>
                <p>যোগাযোগ</p>
                <p>আমাদের সম্পর্কে</p>
                <p>আমাদের লক্ষ্য</p>
            </div>
            <div className="col-lg-3 col-md-4">
                <h5 className="bolder mb-4 ">যোগাযোগ করুন</h5>
                <p><FontAwesomeIcon className="me-2" icon={faMapMarker} />মায়াফুল বিদ্যাপীঠ, দক্ষিন কাট্টলী সাগর পাড়, পাহাড়তলী, চট্টগ্রাম। </p>
                <p><FontAwesomeIcon className="me-2" icon={faPhoneSquareAlt} />মোবাইল নং: ০১৮১৯-৩৫০৭৬১, ০১৯৩২-৮৬৮৫৮৮</p>
            </div>
        </div>
        <div className="my-4 d-flex justify-content-center">
                <a href="https://www.facebook.com/mayaful.bd" target="_blank" rel="noreferrer"><FontAwesomeIcon className="icon" icon={faFacebook} /></a>
                <FontAwesomeIcon className="icon" icon={faTwitter} />
                <FontAwesomeIcon className="icon" icon={faInstagram} />
                <FontAwesomeIcon className="icon" icon={faLinkedinIn} />    
                <FontAwesomeIcon className="icon" icon={faGoogle} />         
        </div>
        </div>
        <div className="text-center">
        <a href="https://www.facebook.com/sikdarrahul/" target="_blank" without rel="noreferrer" className="credit-tag"> <FontAwesomeIcon icon={faCopyright} /> {`${new Date().getFullYear()} Rahul Sikdar Pranto`}</a>
        </div>  
       
        </section>
    );
};

export default Footer;