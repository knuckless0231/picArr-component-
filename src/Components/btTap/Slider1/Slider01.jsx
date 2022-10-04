import s from './../Slider.module.css';
import React from 'react';

const Slider01 = (props) => {
   return <div>
      <span>
         <ol className={s.ol}>
            Trunk
         </ol>
         <li className={s.li}>
            trunk volume : {props.state.trunk.trunk_volume.cubic_meters}
         </li>
         <li className={s.li}>
            cubic feet : {props.state.trunk.trunk_volume.cubic_feet}
         </li>
         <ol className={s.ol}>
            Cargo:
         </ol>
         <li className={s.li}>
            solar array: {props.state.trunk.cargo.solar_array}
         </li>
         <li>
            unpressurized cargo: true
         </li>

         <ol className={s.ol}>
            height_w_trunk:
         </ol>
         <li className={s.li}>
            meters: {props.state.height_w_trunk.meters}
         </li>
         <li className={s.li}>
            feet: {props.state.height_w_trunk.feet}
         </li>

         <ol className={s.ol}>
            diameter:
         </ol>
         <li className={s.li}>
            meters: {props.state.diameter.meters}
         </li>
         <li className={s.li}>
            feet: {props.state.diameter.feet}
         </li>

      </span>

   </div>
}
export default Slider01;