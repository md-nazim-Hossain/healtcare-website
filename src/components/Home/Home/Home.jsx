import React from 'react';
import Contacts from '../../Contacts/Contacts';
import FindUs from '../FindUs/FindUs';
import HomeServices from '../HomeServices/HomeServices';

const Home = () => {
    return (
        <div>
            <HomeServices></HomeServices>
            <FindUs></FindUs>
            <Contacts></Contacts>
        </div>
    );
};

export default Home;