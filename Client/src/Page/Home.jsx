import React from 'react'
import Nav from '../Components/Nav'
import Banner from '../Components/Home/Banner'
import Delivery from '../Components/Home/Delivery'
import About from '../Components/Home/About'
import Contact from '../Components/Home/Contact'
import Footer from '../Components/Footer'
import Menu from '../Components/Home/Menu'

const Home = () => {
    return (
        <div>
            <Nav />
            <Banner />
            <Delivery />
            <div id="menu">
                <Menu />
            </div>
            <div id="about">
                <About />
            </div>
            <div id="contact">
                <Contact />
            </div>
            <Footer />
        </div>
    )
}

export default Home