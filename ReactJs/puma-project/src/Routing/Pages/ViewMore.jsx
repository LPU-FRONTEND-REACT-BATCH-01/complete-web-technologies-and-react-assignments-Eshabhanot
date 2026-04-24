// import React ,{useEffect,useState} from 'react';
// import { useParams } from "react-router";
// import axios from "axios";

// const View =()=>{

//     const param = useParams();
//     const[data,setData] = useState({});

//     useEffect(()=>
//         {
//             const fetchData = async()=>{
//                 try{
//                 const res = await axios.get(`https://dummyjson.com/products/mens-shirts/${param.id}`);
//                 console.log(res);
//                 setData(res.data)
//                 }catch(err){
//                     console.log(err);
//                 }
                
//             }
//             fetchData()
//         }
        

//     ,[param.id]);

//     return(
//         <div>
//             <h2>Products items : {param.id}</h2>
            
//             {data.map((item) => (
//            <p key={item.id}>{item.title}</p>
//                    ))}
             
//         </div>

//     )
// }
// export default View;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

const View = () => {
  const { id } = useParams();

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`https://dummyjson.com/products/${id}`);
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [id]);

  if (!data) return <h2>Loading...</h2>;

  return (
    <div>
      <h2>Product Details</h2>

      <h3>{data.title}</h3>
      <p>Price: ₹{data.price}</p>
      <p>{data.description}</p>

      <img src={data.thumbnail} alt={data.title} />
    </div>
  );
};

export default View;