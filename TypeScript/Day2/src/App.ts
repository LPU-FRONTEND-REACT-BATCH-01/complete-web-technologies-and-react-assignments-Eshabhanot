// interface User{
//     id:number,
//     name:string
// }

// let user1:User={
//     id:1,
//     name:"Nick"
// }

interface Product{
    id:number,
    title:string,
    price:number
}

let products:Product[]=[];

products.push({
  id: 1,
  title: "Face Wash",
  price: 300
});


// products.push({
//     id:2,
//     title:"makeup"
// });

console.log(products);


type numString=[number,string]


//optional email 
function display(name:string,age:number,email?:string ){
    return `Name is ${name} and his age is ${age} and his email is ${email}`;
}
// function display(name:string,age:number,email:string ="Not resnet"){
//     return `Name is ${name} and his age is ${age} and his e`
// }


type add =(a:number,b:number)=>{}


// upi->10%
// card:5%
// cod 50 extra 
// net banking -> same amount

