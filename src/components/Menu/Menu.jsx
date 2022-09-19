import React from 'react';
import MenuItem from './Menu-item/MenuItem';
import { menuConfig } from 'constants/menu';

const Menu = () => {
  return (
    <nav>
      <ul>
        {menuConfig &&
          menuConfig.map(({ name, icon }) => (
            <MenuItem key={name} name={name} icon={icon} />
          ))}
      </ul>
    </nav>
  );
};
export default Menu;
