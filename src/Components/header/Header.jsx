import React from "react";
import s from "./Header.module.css"
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <div className={s.header}>

            {/* Logo link to main content below */}
            <Link to="/Main"><img className={s.headerLogo} src="https://upload.wikimedia.
org/wikipedia/commons/thumb/3/36/SpaceX-Logo-Xonly.svg/1280px-SpaceX-Logo-Xonly.svg.png" alt="logo" /></Link>

            {/* Link to Wikipedia about Space-X */}
            <a className={s.link} href={props.state.wikipedia}>About Space-X</a>
        </div>);
}

export default Header;