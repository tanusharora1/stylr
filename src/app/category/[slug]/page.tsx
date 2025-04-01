import { notFound } from 'next/navigation';
import Image from 'next/image';

type CategoryParams = {
  params: {
    slug: string;
  };
};

export default function CategoryPage({ params }: CategoryParams) {
  const validCategories = ['men', 'women', 'kids', 'accessories'];
  const { slug } = params;

  if (!validCategories.includes(slug)) {
    notFound();
  }

  // Sample products data - in a real app, this would be filtered from a database
  const products = [
    {
      id: 1,
      name: 'Classic White T-Shirt',
      brand: 'Brand 1',
      price: 29.99,
      image: '/next.svg',
      category: 'men',
    },
    {
      id: 2,
      name: 'Summer Floral Dress',
      brand: 'Brand 2',
      price: 79.99,
      image: '/next.svg',
      category: 'women',
    },
    // Add more sample products
  ].filter(product => product.category === slug);

  const categoryTitles = {
    men: 'Men\'s Fashion',
    women: 'Women\'s Fashion',
    kids: 'Kids\'s Fashion',
    accessories: 'Accessories',
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold">{categoryTitles[slug as keyof typeof categoryTitles]}</h1>
          <p className="text-gray-600 mt-2">Discover the latest trends in {categoryTitles[slug as keyof typeof categoryTitles]}</p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-8">
          <div className="flex flex-wrap gap-4">
            <button className="px-4 py-2 rounded-full border border-gray-200 hover:border-purple-500 hover:text-purple-500 transition-colors">
              All
            </button>
            <button className="px-4 py-2 rounded-full border border-gray-200 hover:border-purple-500 hover:text-purple-500 transition-colors">
              New Arrivals
            </button>
            <button className="px-4 py-2 rounded-full border border-gray-200 hover:border-purple-500 hover:text-purple-500 transition-colors">
              Best Sellers
            </button>
            <button className="px-4 py-2 rounded-full border border-gray-200 hover:border-purple-500 hover:text-purple-500 transition-colors">
              Sale
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="aspect-square relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{product.brand}</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold">${product.price}</span>
                  <button className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm hover:bg-purple-700 transition-colors">
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