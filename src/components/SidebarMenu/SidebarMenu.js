import React, { useState, useEffect } from "react";
import "./SidebarMenu.css";
import { IoIosArrowBack } from "react-icons/io";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function SidebarMenu({ isActive,onClose }) {
  const [sidebarData, setSidebarData] = useState([]);
  const [submenuData, setSubmenuData] = useState([]);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  useEffect(() => {
    fetch("http://localhost:1000/megaMenuData")
      .then((res) => res.json())
      .then((data) => setSidebarData(data));
  }, []);

  const handleItemClick = (subItems) => {
    setSubmenuData(subItems);
    setIsSubmenuOpen(true);
  };

  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };

  return (
    <div className={`sidebar-menu-container ${isActive ? 'open' : ''}`}>
      {sidebarData.map((item) => (
        <div key={item.id} className="sidebar-item" onClick={() => handleItemClick(item.subItems)}>
          <span className="title">{item.title}</span>
          <span className="icon-box">
            <IoIosArrowBack className="icon" />
          </span>
        </div>
      ))}

      <div className={`submenu-sidebar ${isSubmenuOpen ? 'open' : ''}`}>
        <div className="submenu-header">
          <button onClick={closeSubmenu}><FaArrowLeftLong /></button>
        </div>
        {submenuData.map((subitem) => (
          <div className="sidebar-submenu" key={subitem.id}>
            <Link to={subitem.url}>{subitem.title}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
