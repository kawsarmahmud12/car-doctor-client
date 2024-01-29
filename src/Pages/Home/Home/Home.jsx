/* eslint-disable no-unused-vars */
import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Services from '../Service/Services';
import ContactInfo from '../contactInfo/ContactInfo';
import Team from '../../Team/Team';
import Product from '../../Product/Product';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <ContactInfo></ContactInfo>
            <Product></Product>
            <Team></Team>
        </div>
    );
};

export default Home;