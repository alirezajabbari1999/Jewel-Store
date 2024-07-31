import Index from './Pages/Index/Index';
import Shop from './Pages/Shop/Shop';
import Checkout from './Pages/Checkout/Checkout'
import Product from './Pages/Product/Product';


let routes = [
  {path: '/', element: <Index />},
  {path: '/shop', element: <Shop />},
  {path: '/checkout', element: <Checkout />},
  {path: '/product/:paramsId', element: <Product />},
]

export default routes;

