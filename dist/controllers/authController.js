"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const User_1 = __importDefault(require("../models/User"));
const generateToken = (id) => jsonwebtoken_1.default.sign({ id }, process.env.JWT_SECRET, { expiresIn: '7d' });
const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const exists = await User_1.default.findOne({ email });
        if (exists)
            return res.status(400).json({ message: 'Email already exists' });
        const user = await User_1.default.create({ name, email, password });
        res.status(201).json({ token: generateToken(user.id), user: { id: user.id, name, email } });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};
exports.register = register;
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User_1.default.findOne({ email });
        if (!user || !(await user.comparePassword(password)))
            return res.status(401).json({ message: 'Invalid credentials' });
        res.json({ token: generateToken(user.id), user: { id: user.id, name: user.name, email } });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};
exports.login = login;
