"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let a = 4;
function processValue(value) {
    if (typeof value === "number") {
        return value + 100;
    }
    if (typeof value === "string") {
        return value.charAt(0).toUpperCase() + value.slice(1);
    }
    if (typeof value === "boolean") {
        return !value;
    }
    return value;
}
console.log(processValue(50));
console.log(processValue("hello"));
console.log(processValue(true));
//# sourceMappingURL=app.js.map