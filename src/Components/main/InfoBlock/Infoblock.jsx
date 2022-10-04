import s from './InfoBlock.module.css';
import React from 'react';

const Infoblock = (props) => {
    return (
        <div className={s.div_border}>
        <div className={s.description}>
            <div className={s.description_upper}>
                <p> Something about Space-X project</p>
            </div>
            <div className={s.description_main} >
                {props.state.description}
            </div>
            <div className={s.year}>
                <p>First orbital launch was at 8 December 2010</p>
            </div>
        </div>
    </div >
    );
}

export default Infoblock;