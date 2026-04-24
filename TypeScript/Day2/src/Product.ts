type Products={
id:number,
title : string,
price:number,
category:string;
};


async function fetchProducts(){
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();

    const products:Products[]=data.products;
    const price5000= products.filter(p=>p.price<5000);
    const price10000 = products.filter(p=>p.price>10000);

    const nameAZ =[...products].sort((a,b)=>a.title.localeCompare(b.title));
    const nameZA=[...products].sort((a, b) =>b.title.localeCompare(a.title));

    const menShirt=products.filter(p=>p.category.toLowerCase().includes("mens"));
    const beauty =products.filter(p=>p.category.toLowerCase()==="beauty");

   console.log("Price < 5000:", price5000);
   console.log("Price > 10000:", price10000);
   console.log("A-Z:", nameAZ);
   console.log("Z-A:", nameZA);
   console.log("Menshirt:", menShirt);
   console.log("Beauty:", beauty);
}

fetchProducts();