import Navigation from "./Navigation";
import Footer from './Footer'
import './footer.css'
import { useContext } from "react";
import {UserContext} from "./context/user.context"
function NavFooter()
{
  const {user} =useContext(UserContext)
return(<div>

  <Navigation />
  <Footer />

</div>)

}
export default NavFooter