import s from './../Slider.module.css';
import React from 'react';

const Slider00 = (props) => {
    return <div>
        <span>
            <ol className={s.ol}>
                Heat shield:
            </ol>
            <li className={s.li}>
                material : {props.state.heat_shield.material}
            </li>
            <li className={s.li}>
                size meters : {props.state.heat_shield.size_meters}
            </li>
            <li className={s.li}>
                temp degrees : {props.state.heat_shield.temp_degrees}
            </li>
            <li className={s.li}>
                dev partner : {props.state.heat_shield.dev_partner}
            </li>


            <ol className={s.ol}>
                Pressurized capsule:
            </ol>
            <li className={s.li}>
                payload volume : {props.state.pressurized_capsule.payload_volume}
            </li>
            <li className={s.li}>
                cubic meters : {props.state.pressurized_capsule.cubic_meters}
            </li>



            <ol className={s.ol}>
                Сharacteristics of the capsule:
            </ol>
            <li className={s.li}>
                Name: {props.state.name}
            </li>
            <li className={s.li}>
                Type: {props.state.type}
            </li>
            <li className={s.li}>
                active: true
            </li>
            <li className={s.li}>
                crew_capacity: {props.state.crew_capacity}
            </li>
            <li className={s.li}>
                sidewall_angle_deg: {props.state.sidewall_angle_deg}
            </li>
            <li className={s.li}>
                orbit_duration_yr: {props.state.orbit_duration_yr}
            </li>
            <li className={s.li}>
                dry_mass_kg: {props.state.dry_mass_kg}
            </li>
            <li className={s.li}>
                dry_mass_lb: {props.state.dry_mass_lb}
            </li>

            <ol className={s.ol}>
                Thrusters:
            </ol>
            <li className={s.li}>
                type : {props.state.thrusters.type}
            </li>
            <li className={s.li}>
                amount: {props.state.thrusters.amount}
            </li>
            <li className={s.li}>
                pods: {props.state.thrusters.pods}
            </li>
            <li className={s.li}>
                fuel_1: {props.state.thrusters.fuel_1}
            </li>
            <li className={s.li}>
                fuel_2: {props.state.thrusters.fuel_2}
            </li>
            <li className={s.li}>
                isp: {props.state.thrusters.isp}
            </li>


            <ol className={s.ol}>
                Thrust:
            </ol>
            <li className={s.li}>
                kN: {props.state.thrusters.thrust.kN}
            </li>
            <li className={s.li}>
                lbf: {props.state.thrusters.thrust.lbf}
            </li>

        </span>
    </div>

}

export default Slider00;