// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Topbar from "../../components/Topbar/Topbar";
// import Navbar from "../../components/Navbar/Navbar";
// import Landing from "./../../components/Landing/Landing";
// import TopCategories from "../../components/TopCategories/TopCategories";
// import HandArtSection from "../../components/HandArtSection/HandArtSection";
// import ValentineAccessory from "../../components/ValentineAccessory/ValentineAccessory";
// import ParsAccessorySection from "../../components/ParsAccessorySection/ParsAccessorySection";
// import AccessoryGardanbandSection from "../../components/AccessoryGardanbandSection/AccessoryGardanbandSection";
// import AdsBanner from "../../components/AdsBanner/AdsBanner";
// import AccessoryDastband from "../../components/AccessoryDastband/AccessoryDastband";
// import BannersSection from "../../components/BannersSection/BannersSection";
// import AccessoryPorbazdidSection from "../../components/AccessoryPorbazdidSection/AccessoryPorbazdidSection";
// import Footer from "../../components/Footer/Footer";
// import ContactUsBadge from "../../components/ContactUsBadge/ContactUsBadge";
// import MiniNavbar from "../../components/MiniTopNavbar/MiniNavbar";
// import MiniBottomNavbar from "../../components/MiniBottomNavbar/MiniBottomNavbar";
// import SidebarMenu from "../../components/SidebarMenu/SidebarMenu";

// export default function Index() {
//   const [isSidebarActive, setIsSidebarActive] = useState(false);
//   const [isOverlyActive, setIsOverlyActive] = useState(false);

//   const [cardItems, setCardItems] = useState([]);
//   const [isShoppingCardSidebarOpen, setIsShoppingCardSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsSidebarActive(!isSidebarActive);
//     setIsOverlyActive(!isOverlyActive);
//   };

//   const closeSidebar = () => {
//     setIsSidebarActive(false);
//     setIsOverlyActive(false);
//   };

//   return (
//     <div>
//       <Topbar setCardItems={setCardItems} cardItems={cardItems} />
//       <Navbar />
//       <MiniNavbar onMenuClick={toggleSidebar} />
//       <SidebarMenu isActive={isSidebarActive} onClose={closeSidebar} />
//       <Landing />
//       <TopCategories />
//       <HandArtSection
//         setCardItems={setCardItems}
//         cardItems={cardItems}
//         isShoppingCardSidebarOpen={isShoppingCardSidebarOpen}
//         setIsShoppingCardSidebarOpen={setIsShoppingCardSidebarOpen}
//       />
//       <ValentineAccessory />
//       <ParsAccessorySection />
//       <AccessoryGardanbandSection
//         setCardItems={setCardItems}
//         cardItems={cardItems}
//         shoppingCardSidebarOpen={isShoppingCardSidebarOpen}
//         setIsShoppingCardSidebarOpen={setIsShoppingCardSidebarOpen}
//       />
//       <AdsBanner />
//       <AccessoryDastband
//         setCardItems={setCardItems}
//         cardItems={cardItems}
//         shoppingCardSidebarOpen={isShoppingCardSidebarOpen}
//         setIsShoppingCardSidebarOpen={setIsShoppingCardSidebarOpen}
//       />
//       <BannersSection />
//       <AccessoryPorbazdidSection />
//       <Footer />
//       <ContactUsBadge />
//       <MiniBottomNavbar />
//       <div
//         className={`overly ${isOverlyActive ? "active" : ""}`}
//         onClick={closeSidebar}
//       ></div>
//     </div>
//   );
// }


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
import ShoppingCardSidebar from "../../components/ShoppingCardSidebar/ShoppingCardSidebar";

export default function Index() {
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  const [isOverlyActive, setIsOverlyActive] = useState(false);

  const [cardItems, setCardItems] = useState([]);
  const [isShoppingCardSidebarOpen, setIsShoppingCardSidebarOpen] = useState(false);

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
      <Landing />
      <TopCategories />
      <HandArtSection
        setCardItems={setCardItems}
        cardItems={cardItems}
        // shoppingCardSidebarOpen={isShoppingCardSidebarOpen}
        setIsShoppingCardSidebarOpen={setIsShoppingCardSidebarOpen}
      />
      <ValentineAccessory />
      <ParsAccessorySection />
      <AccessoryGardanbandSection
        setCardItems={setCardItems}
        cardItems={cardItems}
        // shoppingCardSidebarOpen={isShoppingCardSidebarOpen}
        setIsShoppingCardSidebarOpen={setIsShoppingCardSidebarOpen}
      />
      <AdsBanner />
      <AccessoryDastband
        setCardItems={setCardItems}
        cardItems={cardItems}
        // shoppingCardSidebarOpen={isShoppingCardSidebarOpen}
        setIsShoppingCardSidebarOpen={setIsShoppingCardSidebarOpen}
      />
      <BannersSection />
      <AccessoryPorbazdidSection />
      <Footer />
      <ContactUsBadge />
      <MiniBottomNavbar />
      <ShoppingCardSidebar
        isOpen={isShoppingCardSidebarOpen}
        onClose={() => setIsShoppingCardSidebarOpen(false)}
        cardItems={cardItems}
        setCardItems={setCardItems}
      />
      <div
        className={`overly ${isOverlyActive ? "active" : ""}`}
        onClick={closeSidebar}
      ></div>
    </div>
  );
}
