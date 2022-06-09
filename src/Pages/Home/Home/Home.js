import React from 'react';
import './Home.css';
import NavBar from '../../Shared/NabBar/NabBar';
import Servicess from '../Servicess/Servicess'

const Home = () => {
    return (
        <section style={{ height: '630px' }} className="home-bg">
            <main className='container'>
                <NavBar />
                <Servicess />
            </main>
        </section>
    );
};

export default Home;