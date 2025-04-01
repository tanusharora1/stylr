'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '../context/CartContext';

export default function ShopPage() {
  const { addToCart } = useCart();

  // Sample product data - in a real app, this would come from an API
  const products = [
    {
      id: 1,
      name: 'Minimalist Cotton Shirt',
      brand: 'Essential Wear',
      price: 29.99,
      image: 'https://images.unsplash.com/photo-1604695573706-53170668f6a6?w=800&q=80',
      category: 'men',
    },
    {
      id: 2,
      name: 'Silk Slip Dress',
      brand: 'Urban Style',
      price: 79.99,
      image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&q=80',
      category: 'women',
    },
    {
      id: 3,
      name: 'Structured Leather Tote',
      brand: 'Luxe Accessories',
      price: 129.99,
      image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80',
      category: 'accessories',
    },
    {
      id: 4,
      name: 'Organic Cotton Playsuit',
      brand: 'Little Fashion',
      price: 49.99,
      image: 'https://images.unsplash.com/photo-1522771930-78848d163029?w=800&q=80',
      category: 'kids',
    },
    {
      id: 5,
      name: 'Wool Blend Trousers',
      brand: 'Essential Wear',
      price: 59.99,
      image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&q=80',
      category: 'men',
    },
    {
      id: 6,
      name: 'Cashmere Wrap Cardigan',
      brand: 'Urban Style',
      price: 89.99,
      image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&q=80',
      category: 'women',
    },
    {
      id: 7,
      name: 'Minimalist Timepiece',
      brand: 'Luxe Accessories',
      price: 199.99,
      image: 'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?w=800&q=80',
      category: 'accessories',
    },
    {
      id: 8,
      name: 'Natural Canvas Shoes',
      brand: 'Little Fashion',
      price: 39.99,
      image: 'https://images.unsplash.com/photo-1514989771522-458c9b6c035a?w=800&q=80',
      category: 'kids',
    }
  ];

  const categories = [
    { name: 'All', value: 'all' },
    { name: 'Men', value: 'men' },
    { name: 'Women', value: 'women' },
    { name: 'Kids', value: 'kids' },
    { name: 'Accessories', value: 'accessories' },
  ];

  return (
    <div className="min-h-screen bg-charcoal py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-light text-iceblue mb-4 tracking-wide">Collection</h1>
          <p className="text-iceblue/70 font-light tracking-wider">Curated pieces for the modern wardrobe</p>
        </div>

        {/* Filters */}
        <div className="border-t border-b border-gray-100 py-8 mb-16">
          <div className="flex flex-wrap justify-center gap-8">
            {categories.map((category) => (
              <button
                key={category.value}
                className="px-6 py-2 text-sm tracking-wider text-iceblue/70 hover:text-iceblue transition-colors duration-300"
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
          {products.map((product) => (
            <div
              key={product.id}
              className="group"
            >
              <div className="aspect-[4/5] relative overflow-hidden mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-2">
                <h3 className="font-light text-iceblue tracking-wide">{product.name}</h3>
                <p className="text-iceblue/70 text-sm tracking-wider">{product.brand}</p>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-iceblue tracking-wider">${product.price.toFixed(2)}</span>
                  <button 
                    onClick={() => addToCart(product)}
                    className="text-sm tracking-wider text-iceblue hover:text-white transition-colors duration-300"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}