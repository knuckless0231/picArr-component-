import s from './../Main.module.css';
import React from 'react';
import SimpleMenu1 from '../../btTap/Slider1/Slider1'

const Image1 = (props)=>{
    return(
        <div className={s.imgblock}>
        <img className={s.picture} src="http://spaceflight101.com/dragon-spx10/
wp-content/uploads/sites/141/2017/02/
Hexapod_and_SAGEIII_in_Dragon_compartment.png" alt="trunk_logo" />
        <div className={s.element}><SimpleMenu1 state={props.state} /></div>
    </div> 
    );
}

export default Image1;