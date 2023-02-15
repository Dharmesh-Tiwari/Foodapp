import {Outlet,Link} from "react-router-dom";

function Layout() {
  return (
    <>
  
    <Link to ="/">Gotomenu</Link> |
    <Link to ="Signup">Signup</Link> |
    <Link to ="Login">Login</Link> |
    <Link to ="FoodItems">FoodItems</Link> 
    <Link to ="Navbar">Navbar</Link> 
    <Outlet />
    </>
   
  )
}

export default Layout;
