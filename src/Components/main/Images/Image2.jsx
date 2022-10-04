import s from './../Main.module.css';
import React from 'react';
import SimpleMenu2 from '../../btTap/Slider2/Slider2'

const Image2 = (props)=>{
    return(
        <div className={s.imgblock}>
        <img className={s.picture} src="https://gordonua.com/img/article/6392/
86_tn.jpg?v1546776155" alt="logo_rocket" />
        <div className={s.element}><SimpleMenu2 state={props.state} /></div>
    </div>
    );
}

export default Image2;