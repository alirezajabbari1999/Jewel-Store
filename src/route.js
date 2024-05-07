import Index from './Pages/Index/Index';
import Shop from './Pages/Shop/Shop';
import Checkout from './Pages/Checkout/Checkout'

let routes = [
  {path: '/', element: <Index />},
  {path: '/shop', element: <Shop />},
  {path: '/checkout', element: <Checkout />}
]

export default routes;