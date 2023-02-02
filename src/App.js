import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Services from "./components/Services"
import Footer from "./components/Footer"

const Layout=()=>{
  return(
    <div className="app">
      <Navbar />
      <Outlet />
    </div>
  )
}
const router=createBrowserRouter([
  {
    path:"/",
    element:<Layout />,
    children:[
      {
        path:"/",
        element:<Home />
      },
      {
        path:"/about",
        element:<About />
      },
      {
        path:"/contact",
        element:<Contact />
      },
      {
        path:"/services",
        element:<Services />
      },
      ]
  }
])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
export default App;
