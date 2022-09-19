import React from 'react';
import Menu from 'components/Menu/Menu';

import { HiUserCircle } from 'react-icons/hi';

const Sidebar = () => {
  return (
    <aside>
      <div></div>
      <Menu />
      <div>
        <HiUserCircle />
        <span>User</span>
      </div>
    </aside>
  );
};
export default Sidebar;
