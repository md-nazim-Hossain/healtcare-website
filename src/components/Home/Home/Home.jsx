import React from 'react';
import Contacts from '../../Contacts/Contacts';
import FindUs from '../FindUs/FindUs';
import HomeServices from '../HomeServices/HomeServices';
import Notify from '../Notify/Notify';

const Home = () => {
    return (
        <div>
            <Notify></Notify>
            <HomeServices></HomeServices>
            <FindUs></FindUs>
            <Contacts></Contacts>
        </div>
    );
};

export default Home;