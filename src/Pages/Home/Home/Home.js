import React from 'react';
import './Home.css';
import NavBar from '../../Shared/NabBar/NabBar';
import Servicess from '../Servicess/Servicess'

const Home = () => {
    return (
        <section className="home-bg">
            <div className='container' >
                <NavBar />
                <Servicess />
            </div>
        </section>
    );
};

export default Home;