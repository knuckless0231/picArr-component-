import s from './../Slider.module.css';
import React from 'react';

const Slider02 = (props) => {
  return <div>
    <span>

      <ol className={s.ol}>
        Launch payload mass :
      </ol>
      <li className={s.li}>
        kg: {props.state.launch_payload_mass.kg}
      </li>
      <li className={s.li}>
        lb: {props.state.launch_payload_mass.lb}
      </li>

      <ol className={s.ol}>
        Launch payload vol :
      </ol>
      <li className={s.li}>
        cubic meters: {props.state.launch_payload_vol.cubic_meters}
      </li>
      <li className={s.li}>
        cubic feet: {props.state.launch_payload_vol.cubic_feet}
      </li>

      <ol className={s.ol}>
        Return payload mass :
      </ol>
      <li className={s.li}>
        kg: {props.state.launch_payload_mass.kg}
      </li>
      <li className={s.li}>
        lb: {props.state.launch_payload_mass.lb}
      </li>

      <ol className={s.ol}>
        return_payload_vol:
      </ol>
      <li className={s.li}>
        cubic_meters: {props.state.return_payload_vol.cubic_meters}
      </li>
      <li className={s.li}>
        cubic_feet: {props.state.return_payload_vol.cubic_feet}
      </li>

      <ol className={s.ol}>
        height_w_trunk:
      </ol>
      <li className={s.li}>
        cubic_meters: {props.state.return_payload_vol.cubic_meters}
      </li>
      <li className={s.li}>
        cubic_feet: {props.state.return_payload_vol.cubic_feet}
      </li>

    </span>
  </div>
}

export default Slider02;