import s from './../Main.module.css';
import React from 'react';
import SimpleMenu from '../../btTap/Slider0/Slider0'

const Image0 = (props)=>{
    return(
        <div className={s.imgblock}>
        <img className={s.picture} src="https://farm3.staticflickr.com/
2815/32761844973_4b55b27d3c_b.jpg" alt="capsule_logo" />
        <div className={s.element}><SimpleMenu state={props.state} /></div>
    </div> 
    );
}

export default Image0;