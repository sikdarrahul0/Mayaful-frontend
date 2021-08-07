import React from 'react';
import image1 from '../../images/Gallery/image1.jpg';
import image10 from '../../images/Gallery/image10.jpg';
import image11 from '../../images/Gallery/image11.jpg';
import image12 from '../../images/Gallery/image12.jpg';
import image13 from '../../images/Gallery/image13.jpg';
import image14 from '../../images/Gallery/image14.jpg';
import image15 from '../../images/Gallery/image15.jpg';
import image2 from '../../images/Gallery/image2.jpg';
import image3 from '../../images/Gallery/image3.jpg';
import image4 from '../../images/Gallery/image4.jpg';
import image5 from '../../images/Gallery/image5.jpg';
import image6 from '../../images/Gallery/image6.jpg';
import image7 from '../../images/Gallery/image7.jpg';
import image8 from '../../images/Gallery/image8.jpg';
import image9 from '../../images/Gallery/image9.jpg';
import smile1 from '../../images/Gallery/smile/smile1.jpg';
import smile2 from '../../images/Gallery/smile/smile2.jpg';
import smile3 from '../../images/Gallery/smile/smile3.jpg';
import smile4 from '../../images/Gallery/smile/smile4.jpg';
import smile5 from '../../images/Gallery/smile/smile5.jpg';
import smile6 from '../../images/Gallery/smile/smile6.jpg';
import './Gallery.css';


const Gallery = () => {
    const imageList = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15];
    const smileList = [smile1, smile2, smile3, smile4, smile5, smile6];
    return (
        <section className="container my-5">
            <h3 className="bolder text-danger text-center my-3">কিছু সুন্দর মুহূর্তের ছবি</h3>
            <div className="row d-flex justify-content-center">
                {
                    imageList.map(img =>(
                     <div className="col-md-6 col-xl-4">
                        <div className="gallery">
                          <img className="gallery-img" src={img} alt="gallery-img" />
                        </div>
                     </div>
                    ))
                }
                
            </div>
            <h3 className="bolder text-danger text-center mt-5 mb-3">কিছু প্রাণবন্ত ছবি</h3>
            <div className="row d-flex justify-content-center">
                {
                    smileList.map(img =>(
                     <div className="col-md-6 col-xl-4">
                        <div className="gallery">
                          <img className="smile-img" src={img} alt="gallery-img" />
                        </div>
                     </div>
                    ))
                }
                
            </div>
        </section>
    );
};

export default Gallery;