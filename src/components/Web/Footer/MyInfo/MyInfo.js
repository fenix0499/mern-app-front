import React from "react";
import Logo from '../../../../assets/img/png/fsociety-mask.png';
import SocialLinks from '../../SocialLinks';

import "./MyInfo.scss";

export default function MyInfo() {
  return (
    <div className='my-info'>
      <img src={Logo} alt='fen1x' />
      <h4>
        Entra en el mundo del desarrollo web y disfruta creando proyectos de todo tipo!
      </h4>
      <SocialLinks />
    </div>
  );
}
