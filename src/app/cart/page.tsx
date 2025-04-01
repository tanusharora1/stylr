'use client';

import { useCart } from '../context/CartContext';
import Image from 'next/image';
import Link from 'next/link';

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-charcoal py-12">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h1 className="text-2xl font-semibold text-iceblue mb-8">Your Cart is Empty</h1>
          <Link
            href="/shop"
            className="inline-block bg-iceblue text-charcoal px-8 py-3 rounded-lg hover:bg-white transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-charcoal py-12">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-2xl font-semibold text-iceblue mb-8">Shopping Cart</h1>
        
        <div className="bg-charcoal/50 rounded-lg shadow-sm overflow-hidden border border-iceblue/20">
          {items.map((item) => (
            <div key={item.id} className="p-6 border-b border-iceblue/20 last:border-0">
              <div className="flex items-center gap-6">
                <div className="w-24 h-24 relative flex-shrink-0 bg-charcoal/30 rounded-md overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="flex-grow">
                  <h3 className="text-lg font-medium text-iceblue">{item.name}</h3>
                  <p className="text-iceblue/70 mt-1">${item.price.toFixed(2)}</p>
                  
                  <div className="flex items-center gap-4 mt-4">
                    <div className="flex items-center border border-iceblue/20 rounded-lg">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-3 py-1 text-iceblue/70 hover:text-iceblue transition-colors"
                      >
                        -
                      </button>
                      <span className="px-3 py-1 text-iceblue">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-3 py-1 text-iceblue/70 hover:text-iceblue transition-colors"
                      >
                        +
                      </button>
                    </div>
                    
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-iceblue/50 hover:text-iceblue/80 transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                </div>
                
                <div className="text-lg font-medium text-iceblue">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 bg-charcoal/50 rounded-lg shadow-sm p-6 border border-iceblue/20">
          <div className="flex justify-between items-center text-lg font-medium text-iceblue">
            <span>Total</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <button
            className="w-full mt-6 bg-iceblue text-charcoal px-8 py-3 rounded-lg hover:bg-white transition-colors"
            onClick={() => alert('Checkout functionality coming soon!')}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}