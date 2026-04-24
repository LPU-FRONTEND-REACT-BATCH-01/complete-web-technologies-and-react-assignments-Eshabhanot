import React from "react";
import { createBrowserRouter,RouterProvider } from "react-router";
import Homepage from '../Layouts/Homepage';
import Landing from '../Pages/Landing';
import Products from '../Pages/Products';
import About from '../Pages/About';
import Cart from '../Pages/Cart';
const AppRouter=()=>{
    const  router =createBrowserRouter([
        {
            path:'/',
            element:<Homepage/>,
            children:[
                {
                    path:'landing',
                    element:<Landing/>
                },{
                    path: 'products',
                    element:<Products/>
                },{
                    path: 'about',
                    element:<About/>
                },
                {
                    path: 'cart',
                    element:<Cart/>
                },
              
            ]
        }
    ])
    return (
        <div>
            <RouterProvider router={router}/>
        </div>
    )
}
export default AppRouter;