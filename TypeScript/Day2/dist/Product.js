"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function fetchProducts() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch("https://dummyjson.com/products");
        const data = yield res.json();
        const products = data.products;
        const price5000 = products.filter(p => p.price < 5000);
        const price10000 = products.filter(p => p.price > 10000);
        const nameAZ = [...products].sort((a, b) => a.title.localeCompare(b.title));
        const nameZA = [...products].sort((a, b) => b.title.localeCompare(a.title));
        const menShirt = products.filter(p => p.category.toLowerCase().includes("mens"));
        const beauty = products.filter(p => p.category.toLowerCase() === "beauty");
        console.log("Price < 5000:", price5000);
        console.log("Price > 10000:", price10000);
        console.log("A-Z:", nameAZ);
        console.log("Z-A:", nameZA);
        console.log("Menshirt:", menShirt);
        console.log("Beauty:", beauty);
    });
}
fetchProducts();
