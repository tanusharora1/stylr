import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const categories = [
    { name: 'Men', image: 'https://images.unsplash.com/photo-1488161628813-04466f872be2?w=800&q=80', href: '/category/men' },
    { name: 'Women', image: 'https://images.unsplash.com/photo-1525845859779-54d477ff291f?w=800&q=80', href: '/category/women' },
    { name: 'Kids', image: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=800&q=80', href: '/category/kids' },
    { name: 'Accessories', image: 'https://images.unsplash.com/photo-1509319117193-57bab727e09d?w=800&q=80', href: '/category/accessories' },
  ];

  const brands = [
    { name: 'Brand 1', logo: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80' },
    { name: 'Brand 2', logo: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80' },
    { name: 'Brand 3', logo: 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?w=800&q=80' },
    { name: 'Brand 4', logo: 'https://images.unsplash.com/photo-1475180098004-ca77a66827be?w=800&q=80' },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center bg-charcoal">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1600&q=80"
            alt="Hero background"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="relative text-center text-iceblue p-8 max-w-3xl mx-auto">
          <h1 className="text-6xl font-light mb-8 tracking-wide">Timeless Style</h1>
          <p className="text-xl mb-10 font-light tracking-wider">Curated collections for the modern individual</p>
          <Link 
            href="/shop"
            className="bg-transparent text-iceblue px-12 py-4 border border-iceblue hover:bg-iceblue hover:text-charcoal transition-all duration-300 tracking-widest text-sm"
          >
            EXPLORE
          </Link>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-light text-center mb-16 tracking-wide">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="group relative overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all"
            >
              <div className="aspect-square relative bg-gray-100">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold">{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-24 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-light text-center mb-16 tracking-wide text-iceblue">Featured Brands</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="relative aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden group"
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-charcoal bg-opacity-30 group-hover:bg-opacity-20 transition-all flex items-center justify-center">
                  <h3 className="text-iceblue text-xl font-semibold">{brand.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 max-w-6xl mx-auto border-t border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
          <div className="p-8">
            <h3 className="text-lg font-light mb-3 tracking-wide">Curated Selection</h3>
            <p className="text-iceblue/70 font-light">Thoughtfully selected pieces for your wardrobe</p>
          </div>
          <div className="p-8">
            <h3 className="text-lg font-light mb-3 tracking-wide">Artisanal Quality</h3>
            <p className="text-iceblue/70 font-light">Crafted with attention to detail and excellence</p>
          </div>
          <div className="p-8">
            <h3 className="text-lg font-light mb-3 tracking-wide">Timeless Design</h3>
            <p className="text-iceblue/70 font-light">Pieces that transcend seasonal trends</p>
          </div>
        </div>
      </section>
    </main>
  );
}
