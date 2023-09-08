import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Notfound from './pages/Notfound';
import Test from './pages/Test';

const Router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/test', element: <Test /> },
  { path: '/404', element: <Notfound /> },
  { path: '*', element: <Notfound /> },
]);

export default Router;