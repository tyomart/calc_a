import { Route, Routes } from "react-router-dom";
import { Outlet, Link } from 'react-router-dom';

import'./navigator-style.scss'

const Navigator = () => {

   
    
    return ( <>

    <div className="nav0-box">
            {/* <Link className='main-link' to='/'> MAIN</Link> */}
        


            {/* <div className="navi-links"> */}
                <Link className='n-link' to='calc_a/calculator'> CALCULATOR </Link>
           
                <Link className='n-link' to='calc_a/quotamat'> QUOTAMAT </Link>
                
                {/* <Link className='n-link' to='/markdown'> MARKDOWN </Link> */}
                {/* <Link className='n-link' to='/test'> TEST </Link> */}
            {/* </div> */}

        
    </div>

         <Outlet />
         </>
    )
    
}

export default Navigator;