import React, { useEffect, useState } from 'react';
import Profile from '../../assets/newMe.png';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import './Home.css';
import Aos from 'aos';
import 'aos/dist/aos.css'

const Home = () => {
    const [profession, setProfession] = useState('Web Designer');
    const [currentIndex, setCurrentIndex] = useState(0);
    const professions = ['Front-End Developer', 'Future Ux Designer', 'Future Full Stack'];


    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])

    // este me sirve para hacer el texto  como si fuer amaquina de escribir 
    useEffect(() => {
        const typingInterval = setInterval(() => {
            const currentProfession = professions[currentIndex];
            const currentText = currentProfession.substring(0, profession.length + 1);

            setProfession(currentText);

            if (currentText === currentProfession) {
                clearInterval(typingInterval);
                setTimeout(() => {
                    setCurrentIndex((prevIndex) => (prevIndex === professions.length - 1 ? 0 : prevIndex + 1));
                    setProfession(''); // Reiniciar el texto después de completar una profesión
                }, 1500);
            }
        }, 100);

        return () => clearInterval(typingInterval);
    }, [currentIndex, profession, professions]);

    return (
        <section className="home section grid">
            <img src={Profile} alt="" className="home_img  " data-aos="fade-right" />

            <div className="home_content" data-aos="fade-left">
                <div className="home_data">
                    <div className="profession_container" >
                        <h1 className="home_title">
                            <span>I'm Alejandro Velosa.</span> <span className="professions">{profession}</span>
                        </h1>
                    </div>

                    <p className="home_description">
                        Experienced front-end developer with a high-level of expertise in web design and development, committed to delivering top-notch work.
                    </p>

                    <Link to="/about" className="button">
                        more About Me
                        <span className="button__icon">
                            <FaArrowRight />
                        </span>
                    </Link>
                </div>
            </div>

            <div className="color__block"></div>
        </section>
    );
};

export default Home;
