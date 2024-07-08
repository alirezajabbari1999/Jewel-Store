// import React, { useState, useEffect } from "react";
// import Topbar from "../../components/Topbar/Topbar";
// import Navbar from "../../components/Navbar/Navbar";
// import MiniNavbar from "../../components/MiniTopNavbar/MiniNavbar";
// import SidebarMenu from "../../components/SidebarMenu/SidebarMenu";
// import Footer from "../../components/Footer/Footer";
// import ContactUsBadge from "../../components/ContactUsBadge/ContactUsBadge";
// import MiniBottomNavbar from "../../components/MiniBottomNavbar/MiniBottomNavbar";
// import ShopHeader from "../../components/ShopHeader/ShopHeader";
// import ShopCardContainer from "../../components/ShopCardContainer/ShopCardContainer";

// export default function Shop() {
//   const [isSidebarActive, setIsSidebarActive] = useState(false);
//   const [isOverlyActive, setIsOverlyActive] = useState(false);

//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   // const [cardItems, setCardItems] = useState([]);


//   const toggleSidebar = () => {
//     setIsSidebarActive(!isSidebarActive);
//     setIsOverlyActive(!isOverlyActive);
//   };

//   const closeSidebar = () => {
//     setIsSidebarActive(false);
//     setIsOverlyActive(false);
//   };

//   useEffect(() => {
//     fetch("http://localhost:1000/allProducts")
//       .then((res) => res.json())
//       .then((data) => {
//         setProducts(data);
//         setFilteredProducts(data);
//       });
//   }, []);

//   const sortProducts = (type) => {
//     // اگه دکمه پیش فرض فشرده شده تمام محصولات نمایش داده میشود در فروشگاه
//     if (type === "all") {
//       setFilteredProducts(products);
//     }
//     // اگه دکمه محبوب ترین فشرده شد اون هایی که محبوب تر بودن نمایش داده میشن
//     else if (type === "popular") {
//       let sortedProducts = [...products].sort((a, b) => b.popular - a.popular);
//       setFilteredProducts(sortedProducts);
//     }
//     // اگه دکمه جدیدترین فشرده شد اونایی که جدیدتر بودن نمایش داده میشن
//     else if (type === "new") {
//       let sortedProducts = [...products].sort((a, b) => b.new - a.new);
//       setFilteredProducts(sortedProducts);
//     }
//     // اگه دکمه جدیدترین فشرده شد اونایی که ارزان تر بودن نمایش داده میشن
//     else if (type === "inexpensive") {
//       let sortedProducts = [...products].sort((a, b) => a.price - b.price);
//       setFilteredProducts(sortedProducts);
//     }
//     // اگه دکمه جدیدترین فشرده شد اونایی که گرانتر بودن نمایش داده میشن
//     else if (type === "expensive") {
//       let sortedProducts = [...products].sort((a, b) => b.price - a.price);
//       setFilteredProducts(sortedProducts);
//     }
//   };

//   return (
//     <div className="shop-container">
//       <Topbar setCardItems={setCardItems} cardItems={cardItems}/>
//       <Navbar />
//       <MiniNavbar onMenuClick={toggleSidebar} />
//       <SidebarMenu isActive={isSidebarActive} onClose={closeSidebar} />
//       <ShopHeader sortProducts={sortProducts} />
//       <ShopCardContainer products={filteredProducts} />
//       <Footer />
//       <ContactUsBadge />
//       <MiniBottomNavbar />
//     </div>
//   );
// }



import React, { useState, useEffect, useContext } from "react";
import Topbar from "../../components/Topbar/Topbar";
import Navbar from "../../components/Navbar/Navbar";
import MiniNavbar from "../../components/MiniTopNavbar/MiniNavbar";
import SidebarMenu from "../../components/SidebarMenu/SidebarMenu";
import Footer from "../../components/Footer/Footer";
import ContactUsBadge from "../../components/ContactUsBadge/ContactUsBadge";
import MiniBottomNavbar from "../../components/MiniBottomNavbar/MiniBottomNavbar";
import ShopHeader from "../../components/ShopHeader/ShopHeader";
import ShopCardContainer from "../../components/ShopCardContainer/ShopCardContainer";
import CardContext from "../../components/Context/CardContext";

export default function Shop() {
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  const [isOverlyActive, setIsOverlyActive] = useState(false);

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  
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

  useEffect(() => {
    fetch("http://localhost:1000/allProducts")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      });
  }, []);

  const sortProducts = (type) => {
    // اگه دکمه پیش فرض فشرده شده تمام محصولات نمایش داده میشود در فروشگاه
    if (type === "all") {
      setFilteredProducts(products);
    }
    // اگه دکمه محبوب ترین فشرده شد اون هایی که محبوب تر بودن نمایش داده میشن
    else if (type === "popular") {
      let sortedProducts = [...products].sort((a, b) => b.popular - a.popular);
      setFilteredProducts(sortedProducts);
    }
    // اگه دکمه جدیدترین فشرده شد اونایی که جدیدتر بودن نمایش داده میشن
    else if (type === "new") {
      let sortedProducts = [...products].sort((a, b) => b.new - a.new);
      setFilteredProducts(sortedProducts);
    }
    // اگه دکمه جدیدترین فشرده شد اونایی که ارزان تر بودن نمایش داده میشن
    else if (type === "inexpensive") {
      let sortedProducts = [...products].sort((a, b) => a.price - b.price);
      setFilteredProducts(sortedProducts);
    }
    // اگه دکمه جدیدترین فشرده شد اونایی که گرانتر بودن نمایش داده میشن
    else if (type === "expensive") {
      let sortedProducts = [...products].sort((a, b) => b.price - a.price);
      setFilteredProducts(sortedProducts);
    }
  };

  return (
    <div className="shop-container">
      <Topbar setCardItems={setCardItems} cardItems={cardItems}/>
      <Navbar />
      <MiniNavbar onMenuClick={toggleSidebar} />
      <SidebarMenu isActive={isSidebarActive} onClose={closeSidebar} />
      <ShopHeader sortProducts={sortProducts} />
      <ShopCardContainer products={filteredProducts} />
      <Footer />
      <ContactUsBadge />
      <MiniBottomNavbar />
    </div>
  );
}
