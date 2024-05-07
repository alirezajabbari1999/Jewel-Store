import React from "react";
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

export default function Index() {
  return (
    <div>
      <Topbar />
      <Navbar />
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
    </div>
  );
}
