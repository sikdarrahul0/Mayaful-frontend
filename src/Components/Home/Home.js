import React from 'react';
import Aim from './Aims/Aim';
import CarouselShow from './CarouselShow/CarouselShow';
import Project from './Project/Project';
import UpcommingEvent from './UpcommingEvent/UpcommingEvent';

const Home = () => {
    return (
        <div>
            <CarouselShow />
            <Project />
            <Aim />
            <UpcommingEvent />
        </div>
    );
};

export default Home;