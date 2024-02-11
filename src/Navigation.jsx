import { Outlet,Link } from "react-router-dom"

function Navigation()
{
 return(<div>
 
   <Link to= '/'>
   Home
   </Link>
   <Link to= 'about'>
   About
   </Link>
   <Link to= 'contact'>
   Contact
   </Link>
   <Link to= 'login'>
   Login
   </Link>
   {/* Used to specify where in the document will index element be represented */}
   <Outlet />
 
 </div>)

}
export default Navigation