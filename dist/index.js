import Invoice from "./Classes/Invoice.js";
const exp = (msg, msg2) => msg + msg2;
const printOutStr = (value) => console.log(value);
printOutStr(exp('Brian', ' Ellis'));
const GOOGLE = new Invoice('Google');
printOutStr(GOOGLE.name);
//# sourceMappingURL=index.js.map