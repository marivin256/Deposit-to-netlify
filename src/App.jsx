// import Porto from "./assets/components/nxtpoto"
// import { BrowserRouter, Routes, Route } from "react-router-dom";

//  import Body from "./assets/components/Body";
//  import Port from "./assets/components/Navport"
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';


import Mainlayout from './Layouts/Mainlayout';
import Page1 from './Portpages/page1';
import Page2 from './Portpages/page2';
// import Homepage from './Pages/Hompage';
// import Jobspage from './Pages/Jobspage';
import Notfoundpage from './Pages/Notfoundpage';

const router = createBrowserRouter(
    createRoutesFromElements(
        
        <Route path='/' element={<Mainlayout/>}>
    
    <Route index element= {<Page1/>}/> 
    <Route path='/about' element={<Page2/>}/>
    <Route path='*' element={<Notfoundpage/>}/>
    
    </Route>
    
    )
)


function App  () {
    return(

<RouterProvider router={router}/>
    )
}

export default App;

