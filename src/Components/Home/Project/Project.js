import React from 'react';
import project1 from '../../../images/Project/project1.jpg';
import project2 from '../../../images/Project/project2.jpg';
import project3 from '../../../images/Project/project3.jpg';
import './Project.css';

const Project = () => {
    return (
        <div className="container mt-5">
            <h2 className="bolder text-center text-danger">আমাদের সর্বশেষ প্রকল্পসমুহ</h2>
            <div className="row">
                <div className="col-lg-4 d-flex justify-content-center">
                    <div className="project-design"> 
                    <img src={project1} alt="first-project" />
                    <h5>সুবিধাবঞ্চিত মাঝে শীতবস্ত্র বিতরণ</h5>
                    <p>ইট-পাহাড়ের শহরে শীতের প্রকোপটা বরাবরেই কম থাকে। তবে শীতের মৌসুম শুরু হলেই পাহাড়ী অঞ্চলে ঝেঁকে বসে শীত।ঠান্ডায় আক্রান্ত হয়ে অসুস্থ হয়ে পড়ে শিশু ও বয়স্করা। বান্দরাবানের আলীকদম উপজেলার তিনটি গ্রামের শীতার্তদের পাশে দাঁড়িয়েছি আমরা।</p>
                    </div>
                </div>
                <div className="col-lg-4 d-flex justify-content-center">
                    <div className="project-design"> 
                    <img src={project2} alt="first-project" />
                    <h5>ঈদের আনন্দ হোক সবার</h5>
                    <p>আমাদের ইচ্ছে ছিল আমাদের কুরবানির ঈদের আনন্দ ভাগাভাগি করবো সুবিধাবঞ্চিত মানুষের সাথে। আলহামদুলিল্লাহ আমাদের ইচ্ছেটা কিছুটা হলেও পূরণ হয়েছে। আমাদের কুরবানির মাংস দিয়ে ভাতের ব্যবস্থা হয়েছিল ওদের জন্য।</p>
                    </div>
                </div>
                <div className="col-lg-4 d-flex justify-content-center">
                    <div className="project-design"> 
                    <img src={project3} alt="first-project" />
                    <h5>ভাসমান দরিদ্রদের মাঝে খাবার বিতরণ</h5>
                    <p>করোনা মহামারীর প্রভাবে মানুষের অর্থনৈতিক যে দৈন দশা সে অবস্থায় সামাজিক সংগঠন "মায়াফুল" গত পাঁচ মাস ধরে মানুষের জন্য খাবার বিতরণের কার্যক্রম চালিয়ে আসছে। এরই ধারাবাহিকতায় আবারও কিছু মানুষের হাতে খাবার তুলে দিতে পেরেছি আমরা।</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;