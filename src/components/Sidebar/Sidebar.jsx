import React from 'react';
import { menuConfig } from 'constants/menu';
import { HiUserCircle } from 'react-icons/hi';

const Sidebar = () => {
  return (
    <aside>
      <div></div>
      <nav>
        <ul>
          {menuConfig &&
            menuConfig.map(el => (
              <li key={el.name}>
                {el.icon}
                {el.name}
              </li>
            ))}
        </ul>
      </nav>
      <div>
        <HiUserCircle />
        <span>User</span>
      </div>
    </aside>
  );
};
export default Sidebar;
