import React from 'react'
import './ShoppingCardSidebar.css'
import { IoClose } from "react-icons/io5";
import emptyImg from './../../Images/empty-cart.svg'
import { Link } from 'react-router-dom';

export default function ShoppingCardSidebar({isOpen , onClose}) {
  return (
    <div className={`shopping-card-sidebar ${isOpen ? 'open' : ''}`}>
      <div className="header">
        <span>شما این محصولات را انتخاب کرده اید</span>
        <IoClose className='close-icon' onClick={onClose}/>
      </div>

      <div className="content">
        <img src={emptyImg} alt="empty image" />
        <h3>هیچ محصولی در سبد خرید نیست.</h3>
        <span>جهت مشاهده محصولات بیشتر به صفحات زیر مراجعه نمایید.</span>
        <div className='links'>
          <Link to='/' className='link main-link'>صفحه اصلی</Link>
          <Link to='/shop' className='link'> فروشگاه</Link>
        </div>
      </div>
    </div>
  )
}
