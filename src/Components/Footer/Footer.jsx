import s from "./Footer.module.css"
import React from "react";
import {Link } from 'react-router-dom';


const Footer = (props) => {
    return (
        <div className={s.foo}>
                <Link to="/Picarr" className={s.foo_click}>Сlick to go to additional task</Link>
    </div >
    );
}

export default Footer;


