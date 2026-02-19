"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.createProduct = exports.getProductById = exports.getProducts = void 0;
const Product_1 = __importDefault(require("../models/Product"));
// GET /products
const getProducts = async (req, res) => {
    try {
        const { search, category, page = 1, limit = 10 } = req.query;
        const query = {};
        if (search)
            query.$text = { $search: search };
        if (category)
            query.category = category;
        const skip = (Number(page) - 1) * Number(limit);
        const [products, total] = await Promise.all([
            Product_1.default.find(query).skip(skip).limit(Number(limit)).sort({ createdAt: -1 }),
            Product_1.default.countDocuments(query),
        ]);
        res.json({ success: true, data: products, total, page: Number(page) });
    }
    catch (error) {
        res.status(500).json({ success: false, message: 'Server error' });
    }
};
exports.getProducts = getProducts;
// GET /products/:id
const getProductById = async (req, res) => {
    try {
        const product = await Product_1.default.findById(req.params.id);
        if (!product)
            return res.status(404).json({ success: false, message: 'Product not found' });
        res.json({ success: true, data: product });
    }
    catch (error) {
        res.status(500).json({ success: false, message: 'Server error' });
    }
};
exports.getProductById = getProductById;
// POST /products
const createProduct = async (req, res) => {
    try {
        const product = await Product_1.default.create(req.body);
        res.status(201).json({ success: true, data: product });
    }
    catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
exports.createProduct = createProduct;
// PUT /products/:id
const updateProduct = async (req, res) => {
    try {
        const product = await Product_1.default.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!product)
            return res.status(404).json({ success: false, message: 'Product not found' });
        res.json({ success: true, data: product });
    }
    catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
exports.updateProduct = updateProduct;
// DELETE /products/:id
const deleteProduct = async (req, res) => {
    try {
        const product = await Product_1.default.findByIdAndDelete(req.params.id);
        if (!product)
            return res.status(404).json({ success: false, message: 'Product not found' });
        res.json({ success: true, message: 'Product deleted' });
    }
    catch (error) {
        res.status(500).json({ success: false, message: 'Server error' });
    }
};
exports.deleteProduct = deleteProduct;
