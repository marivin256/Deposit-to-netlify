import { NavLink } from "react-router-dom";
function Port (){
  const linkClass = ({isActive})=> isActive
  ?'border-b border-yellow-600 text-yellow-600 rounded-md px-3 py-2'
  :'text-white hover:border-b border-yellow-600 hover:text-yellow-600 rounded-md px-3 py-2'
    return(

<div className="bg-black">
 <nav className=" border-b border-yellow-500">
       <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-">
         <div className="flex h-20 items-center justify-between">
           <div
            className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                <div className="md:ml-auto">
              <div className="flex space-x-2">
                <NavLink
                  to="/"
                  className={linkClass}
                  >Home</NavLink>
                
                <NavLink
                  to="/about"
                  className={linkClass}
                  >About</NavLink>
                
                <NavLink
                  to="/services"
                  className={linkClass}
                  >Services</NavLink>
                
                <NavLink
                  to="/skills"
                  className={linkClass}
                  >Skills</NavLink>
                
                
                <NavLink
                  to="/contact"
                  className={linkClass}
                  >Contact</NavLink>
                
              </div>
            </div>

           </div>
        </div>        
       </div>
   </nav>
</div>

    )
}
export default Port;