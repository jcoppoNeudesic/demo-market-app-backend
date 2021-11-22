"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("./routes/auth"));
const app = (0, express_1.default)();
app.use('/api/auth', auth_1.default);
app.get('/', (req, res) => {
    res.send('Welcome to Demo Market backend!');
});
app.listen(3000, () => {
    console.log('Demo Market backend is listening on port 3000!');
});
