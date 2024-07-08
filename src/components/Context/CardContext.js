// این کانتکست ساخته شده برای اینکه در استیت اون محصولات
// سبد خرید ذخیره بشه و تمام کامپوننت ها بتونن ازش استفاده کنن
// به این منظور که اگه ما در صفحه ایندکس محصولی رو به سبد خرید 
// اضافه کردیم با رقتنمون به صفحه شاپ سبد خریدمون خالی نشه
import React, { createContext, useState } from 'react';

const CardContext = createContext();

export const CardProvider = ({ children }) => {
  const [cardItems, setCardItems] = useState([]);

  return (
    <CardContext.Provider value={{ cardItems, setCardItems }}>
      {children}
    </CardContext.Provider>
  );
};

export default CardContext;
