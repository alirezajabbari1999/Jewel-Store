import React, { useState, useContext } from "react";
import "./Product.css";
import Topbar from "../../components/Topbar/Topbar";
import Navbar from "../../components/Navbar/Navbar";
import MiniNavbar from "../../components/MiniTopNavbar/MiniNavbar";
import SidebarMenu from "../../components/SidebarMenu/SidebarMenu";
import Footer from "../../components/Footer/Footer";
import ContactUsBadge from "../../components/ContactUsBadge/ContactUsBadge";
import MiniBottomNavbar from "../../components/MiniBottomNavbar/MiniBottomNavbar";
import CardContext from "../../components/Context/CardContext";
import ProductInfo from "../../components/ProductInfo/ProductInfo";


export default function Product() {
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  const [isOverlyActive, setIsOverlyActive] = useState(false);

  // این کاردز آیتم رو از کانتکست گرفتم تا محصولات سبد خریدم در تمام کامپوننت ها نمایش داده شه
  const { cardItems, setCardItems } = useContext(CardContext);

  const toggleSidebar = () => {
    setIsSidebarActive(!isSidebarActive);
    setIsOverlyActive(!isOverlyActive);
  };

  const closeSidebar = () => {
    setIsSidebarActive(false);
    setIsOverlyActive(false);
  };

  return (
    <div>
      <Topbar setCardItems={setCardItems} cardItems={cardItems} />
      <Navbar />
      <MiniNavbar onMenuClick={toggleSidebar} />
      <SidebarMenu isActive={isSidebarActive} onClose={closeSidebar} />
      <ProductInfo />
      <Footer />
      <ContactUsBadge />
      <MiniBottomNavbar />
      <div
        className={`overly ${isOverlyActive ? "active" : ""}`}
        onClick={closeSidebar}
      ></div>
    </div>
  );
}
