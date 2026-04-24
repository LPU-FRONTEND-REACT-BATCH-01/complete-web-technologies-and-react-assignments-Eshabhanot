import React from 'react';

import { Navigate } from 'react-router';
const Profile =()=>{
    const isAuthenicated =true;
    if(!isAuthenicated){
        return <Navigate to={'./signup'}/>
           
    }
    return(
        <div>Profile</div>
    )

}
export default Profile;