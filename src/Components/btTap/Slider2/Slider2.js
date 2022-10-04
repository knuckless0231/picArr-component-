import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import Slider02 from './Slider02';
import s from './../Slider.module.css';

// Бібліотека - @material-ui/core: Menu i Button створює викидне меню з характеристиками деталей ракети

function SimpleMenu2(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <p className={s.descrtext}>About Rocket at all</p>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Slider02 state={props.state} />
      </Menu>
    </div>
  );
}

export default SimpleMenu2;