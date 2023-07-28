import React, { useState } from 'react';
import './Sidebar.css';

function Sidebar(props) {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded)
    props.updateExpandedState(!isExpanded)
  }

  return (
    <div className={`sidebar ${isExpanded ? 'expanded' : 'minimized'}`}>
      <ul>
        <li>Menu Item 1</li>
        <li>Menu Item 2</li>
        <li>Menu Item 3</li>
        <li>Menu Item 4</li>
      </ul>
      <button onClick={toggleSidebar}>
        {isExpanded ? 'Minimize' : 'Expand'}
      </button>
    </div>
  );
}

export default Sidebar;