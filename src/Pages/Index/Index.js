import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Topbar from "../../components/Topbar/Topbar";
import Navbar from "../../components/Navbar/Navbar";
import Landing from "./../../components/Landing/Landing";
import TopCategories from "../../components/TopCategories/TopCategories";
import HandArtSection from "../../components/HandArtSection/HandArtSection";
import ValentineAccessory from "../../components/ValentineAccessory/ValentineAccessory";
import ParsAccessorySection from "../../components/ParsAccessorySection/ParsAccessorySection";
import AccessoryGardanbandSection from "../../components/AccessoryGardanbandSection/AccessoryGardanbandSection";
import AdsBanner from "../../components/AdsBanner/AdsBanner";
import AccessoryDastband from "../../components/AccessoryDastband/AccessoryDastband";
import BannersSection from "../../components/BannersSection/BannersSection";
import AccessoryPorbazdidSection from "../../components/AccessoryPorbazdidSection/AccessoryPorbazdidSection";
import Footer from "../../components/Footer/Footer";
import ContactUsBadge from "../../components/ContactUsBadge/ContactUsBadge";
import MiniNavbar from "../../components/MiniTopNavbar/MiniNavbar";
import MiniBottomNavbar from "../../components/MiniBottomNavbar/MiniBottomNavbar";
import SidebarMenu from "../../components/SidebarMenu/SidebarMenu";

export default function Index() {
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  const [isOverlyActive, setIsOverlyActive] = useState(false);

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
      <Topbar />
      <Navbar />
      <MiniNavbar onMenuClick={toggleSidebar} />
      <SidebarMenu isActive={isSidebarActive} onClose={closeSidebar} />
      <Landing />
      <TopCategories />
      <HandArtSection />
      <ValentineAccessory />
      <ParsAccessorySection />
      <AccessoryGardanbandSection />
      <AdsBanner />
      <AccessoryDastband />
      <BannersSection />
      <AccessoryPorbazdidSection />
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

