import s from './Main.module.css';
import React from 'react';
import Infoblock from "./InfoBlock/Infoblock";
import Image0 from './Images/Image0'
import Image1 from './Images/Image1'
import Image2 from './Images/Image2'


const Main = (props) => {
    return (
        <div className={s.main}>
            <div className={s.content}>
                <Image0 state={props.state} />
                <Image1 state={props.state} />
                <Image2 state={props.state} />
            </div>
                <div>
                <Infoblock state={props.state} />
                </div>
            </div>
       

    );
}

export default Main;