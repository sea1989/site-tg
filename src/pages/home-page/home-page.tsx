import React from 'react';
import ButtonAppBar from '../../components/AppBar/AppBar';

import MainDash from '../../components/MainDash/MainDash';
import RightSide from '../../components/RightSide/RightSide';
import Sidebar from '../../components/Sidebar/Sidebar';
import './home-page.css';


export const HomePage: React.FC = () => {
    return (
        <div className='home-page'>
            <div className="bar-wrapper">
                 <ButtonAppBar />
            </div>
           
            <div className="AppGlass">
                <Sidebar />
                <MainDash />
                <RightSide />
            </div>
        </div>
    )
}

