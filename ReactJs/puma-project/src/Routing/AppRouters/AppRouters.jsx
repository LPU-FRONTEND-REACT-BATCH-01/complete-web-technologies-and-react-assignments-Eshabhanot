import React from 'react';
import { createBrowserRouter,RouterProvider } from 'react-router';
import HomePage from '../Layouts/HomePage';
import Landing from '../Pages/Landing';
import Products from '../Pages/Products';
import About from '../Pages/About';
import Cart from '../Pages/Cart';
import CategoryProducts from '../Pages/CategoryProducts';
import ViewMore from '../Pages/ViewMore';
const AppRouter=()=>{
    const router =createBrowserRouter([
        {
            path:'/',
            element:<HomePage/>,
            children:[
                {
                    path:'landing',
                    element:<Landing/>
                },{
                  path: "products",
                element: <Products />,
               children: [
                {
                    path: ":id",
                   element: <ViewMore />

                },
                  {
               path: ":category",   
               element: <CategoryProducts />,
               },{
                path:'/products/:category/:id',
                element:<ViewMore/>
               }
                ]},
                {
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
    return(
        <div>
            <RouterProvider router={router}/>
        </div>
    )
}
export default AppRouter;
