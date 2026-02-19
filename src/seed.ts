import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from './models/Product';

dotenv.config();

const products = [
  { name: 'iPhone 15 Pro', description: 'Flagship Apple smartphone with A17 Pro chip', price: 999, image: 'https://picsum.photos/seed/iphone/400/300', category: 'Electronics', stock: 50, available: true },
  { name: 'MacBook Air M3', description: 'Ultra-thin laptop with Apple Silicon', price: 1299, image: 'https://picsum.photos/seed/macbook/400/300', category: 'Electronics', stock: 30, available: true },
  { name: 'Nike Air Max 270', description: 'Comfortable running shoes with Air cushioning', price: 150, image: 'https://picsum.photos/seed/nike/400/300', category: 'Shoes', stock: 0, available: false },
  { name: 'Sony WH-1000XM5', description: 'Industry-leading noise cancelling headphones', price: 399, image: 'https://picsum.photos/seed/sony/400/300', category: 'Electronics', stock: 25, available: true },
  { name: 'Leather Wallet', description: 'Slim genuine leather bifold wallet', price: 45, image: 'https://picsum.photos/seed/wallet/400/300', category: 'Accessories', stock: 100, available: true },
  { name: 'Coffee Maker', description: 'Programmable 12-cup drip coffee maker', price: 79, image: 'https://picsum.photos/seed/coffee/400/300', category: 'Kitchen', stock: 15, available: true },
];

async function seed() {
  await mongoose.connect(process.env.MONGODB_URI as string);
  await Product.deleteMany({});
  await Product.insertMany(products);
  console.log('✅ Seeded successfully!');
  process.exit(0);
}

seed();