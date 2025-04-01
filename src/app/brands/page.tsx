'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function BrandsPage() {
  const brands = [
    {
      id: 1,
      name: 'Essential Wear',
      description: 'Timeless pieces for the minimalist wardrobe',
      logo: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
      collections: ['Minimalist Edit', 'Essentials Collection', 'Studio Series']
    },
    {
      id: 2,
      name: 'Urban Style',
      description: 'Refined silhouettes for the modern individual',
      logo: 'https://images.unsplash.com/photo-1525845859779-54d477ff291f?w=800&q=80',
      collections: ['Architectural Line', 'Modern Elements', 'Urban Poetry']
    },
    {
      id: 3,
      name: 'Luxe Accessories',
      description: 'Artisanal accessories with timeless appeal',
      logo: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80',
      collections: ['Artisan Series', 'Heritage Collection', 'Curated Edit']
    },
    {
      id: 4,
      name: 'Little Fashion',
      description: 'Organic essentials for the little ones',
      logo: 'https://images.unsplash.com/photo-1445796886651-d31a2c15f3c9?w=800&q=80',
      collections: ['Natural Collection', 'Organic Basics', 'Pure Series']
    }
  ];

  return (
    <div className="min-h-screen bg-white py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-24">
          <h1 className="text-5xl font-extralight text-gray-900 mb-6 tracking-wide">Our Brands</h1>
          <p className="text-gray-500 max-w-2xl mx-auto font-light tracking-wider">A thoughtfully curated selection of artisanal fashion houses, each dedicated to the pursuit of timeless elegance.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {brands.map((brand) => (
            <div key={brand.id} className="group">
              <div className="aspect-[4/3] relative mb-8 overflow-hidden">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h2 className="text-2xl font-extralight text-gray-900 mb-3 tracking-wide">{brand.name}</h2>
              <p className="text-gray-500 mb-8 font-light tracking-wider">{brand.description}</p>
              <div className="space-y-3 mb-8">
                <h3 className="text-xs uppercase tracking-widest text-gray-400">Collections</h3>
                {brand.collections.map((collection) => (
                  <div
                    key={collection}
                    className="text-gray-600 font-light tracking-wide"
                  >
                    {collection}
                  </div>
                ))}
              </div>
              <Link
                href={`/shop?brand=${encodeURIComponent(brand.name)}`}
                className="inline-block text-sm text-gray-900 tracking-widest hover:text-gray-500 transition-colors duration-300"
              >
                EXPLORE COLLECTION
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}