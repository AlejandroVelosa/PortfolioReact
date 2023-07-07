import React from 'react'
import Profile from '../../assets/cyber.jpg'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import "../home/Home.css"

const Home = () => {
    return (
        <section className="home section grid">
            <img src={Profile} alt="" className="home_img" />

            <div className="home_content">
                <div className="home_data">
                    <h1 className="home_title">
                        <span>I'm Alejandro Velosa.</span> Web Designer
                    </h1>

                    <p className="home_description">Experienced front-end developer with a high-level of expertise in web design and development, committed to delivering top-notch work.</p>

                    <Link to='/about' className='button'>
                        more About Me
                        <span className='button__icon'>
                            <FaArrowRight />
                        </span>
                    </Link>
                </div>
            </div>

            <div className="color__block"></div>
        </section>
    )
}

export default Home