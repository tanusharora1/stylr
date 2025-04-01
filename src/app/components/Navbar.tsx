'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <nav className="bg-charcoal shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-iceblue">
            Stylr
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/shop" className="text-iceblue hover:text-white font-light tracking-wide transition-colors">
              Shop
            </Link>
            <Link href="/brands" className="text-iceblue hover:text-white font-light tracking-wide transition-colors">
              Brands
            </Link>
            <Link href="/category/men" className="text-iceblue hover:text-white font-light tracking-wide transition-colors">
              Men
            </Link>
            <Link href="/category/women" className="text-iceblue hover:text-white font-light tracking-wide transition-colors">
              Women
            </Link>
            <Link href="/category/kids" className="text-iceblue hover:text-white font-light tracking-wide transition-colors">
              Kids
            </Link>
            <Link href="/category/accessories" className="text-iceblue hover:text-white font-light tracking-wide transition-colors">
              Accessories
            </Link>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            {/* Cart */}
            <Link 
              href="/cart" 
              className="text-iceblue hover:text-white transition-colors relative"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-iceblue text-charcoal text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* User Menu */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-iceblue hover:text-white transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-iceblue hover:text-white transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/shop"
                className="text-gray-800 hover:text-black font-light tracking-wide transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </Link>
              <Link 
                href="/brands"
                className="text-gray-800 hover:text-black font-light tracking-wide transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Brands
              </Link>
              <Link 
                href="/category/men"
                className="text-gray-800 hover:text-black font-light tracking-wide transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Men
              </Link>
              <Link 
                href="/category/women"
                className="text-gray-800 hover:text-black font-light tracking-wide transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Women
              </Link>
              <Link 
                href="/category/kids"
                className="text-gray-800 hover:text-black font-light tracking-wide transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Kids
              </Link>
              <Link 
                href="/category/accessories"
                className="text-gray-800 hover:text-black font-light tracking-wide transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Accessories
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}