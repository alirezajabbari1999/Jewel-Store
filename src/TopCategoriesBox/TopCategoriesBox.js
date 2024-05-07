import React from 'react';
import './TopCategoriesBox.css';


// با این کامپوننت ما یدونه باکس ساختیم برای هر عکس
// حالا زمانی که توی کامپوننت 
// TopCategoris 
// نیاز پیدا کردیم میریم روی استیت مربوط به عکس ها مپ میزنیم و به ازای هر رندر یدونه باکسی که اینجا ساختیمو 
// نمایش میدیم و عکس رو هم بهش قاعدتا میدیم که نمایش داده شه
export default function TopCategoriesBox({ image }) {
  return (
    <div className='top-categories-box-container'>
      <img src={image} alt="Top Category" /> 
    </div>
  );
}
