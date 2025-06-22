import React from 'react';
import Navbar from '../../SharedComponents/Navbar/Navbar';
import Footer from '../../SharedComponents/Footer/Footer';
import Banner from '../../Components/Banner';
import HowItWorks from '../../Components/HowItWorks';
import OurServices from '../../Components/OurServices';
import OurClients from '../../Components/OurClients';
import TestimonialSlider from '../../Components/TestimonialSlider';
import Faq from '../../Components/Faq';

const Home = () => {
                return (
                                <div>
                                         <Navbar></Navbar>
                                         <Banner></Banner>
                                         <HowItWorks></HowItWorks>
                                         <OurServices></OurServices>
                                         <OurClients></OurClients>
                                         <TestimonialSlider></TestimonialSlider>
                                         <Faq></Faq>
                                         <Footer></Footer>     
                                </div>
                );
};

export default Home;