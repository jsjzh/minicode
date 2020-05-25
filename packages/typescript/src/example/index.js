"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const random_1 = tslib_1.__importDefault(require("./random"));
const main = () => console.log(random_1.default());
setInterval(main, 300);
