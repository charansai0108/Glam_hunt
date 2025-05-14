import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Classic Cotton T-Shirt',
    price: 599,
    images: [
      'https://images.pexels.com/photos/6311652/pexels-photo-6311652.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/6311603/pexels-photo-6311603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    category: 't-shirts',
    description: 'Our classic cotton t-shirt is a versatile essential for any wardrobe. Made from 100% premium cotton, it offers exceptional comfort and breathability for all-day wear. The relaxed fit and durable construction ensure it will become your go-to tee for casual outings, workouts, or simply lounging at home.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Black', value: '#000000' },
      { name: 'White', value: '#FFFFFF' },
      { name: 'Navy', value: '#0A142F' },
      { name: 'Gray', value: '#808080' },
    ],
    inStock: true,
    featured: true,
    rating: 4.7,
    reviews: 124,
  },
  {
    id: '2',
    name: 'Urban Street Hoodie',
    price: 1299,
    salePrice: 999,
    images: [
      'https://images.pexels.com/photos/6311387/pexels-photo-6311387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/6311641/pexels-photo-6311641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    category: 'hoodies',
    description: 'Stay warm and stylish with our Urban Street Hoodie. Crafted from a premium cotton-polyester blend that provides excellent insulation while maintaining breathability. The spacious hood and front pocket offer practical functionality, while the modern cut and clean lines deliver a fashionable urban aesthetic.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Black', value: '#000000' },
      { name: 'Gray Melange', value: '#AAAAAA' },
      { name: 'Forest Green', value: '#228B22' },
    ],
    inStock: true,
    newArrival: true,
    rating: 4.9,
    reviews: 87,
  },
  {
    id: '3',
    name: 'Graphic Print Tee',
    price: 799,
    images: [
      'https://images.pexels.com/photos/5709661/pexels-photo-5709661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/5709665/pexels-photo-5709665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    category: 't-shirts',
    description: 'Express your individuality with our Graphic Print Tee featuring original artwork by talented independent artists. The vibrant, durable print is set on our premium cotton fabric to ensure both comfort and style. Each design tells a story and makes a statement wherever you go.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'White', value: '#FFFFFF' },
      { name: 'Black', value: '#000000' },
      { name: 'Light Blue', value: '#ADD8E6' },
    ],
    inStock: true,
    rating: 4.5,
    reviews: 62,
  },
  {
    id: '4',
    name: 'Premium Zip-Up Hoodie',
    price: 1499,
    images: [
      'https://images.pexels.com/photos/5709656/pexels-photo-5709656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/5709639/pexels-photo-5709639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    category: 'hoodies',
    description: 'Upgrade your casual wardrobe with our Premium Zip-Up Hoodie. Meticulously crafted from heavyweight fabric with a soft inner lining, it provides exceptional warmth without bulk. The full-length zipper offers versatile styling options, while reinforced seams ensure durability for years of wear.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Black', value: '#000000' },
      { name: 'Burgundy', value: '#800020' },
      { name: 'Heather Gray', value: '#D3D3D3' },
    ],
    inStock: true,
    featured: true,
    rating: 4.8,
    reviews: 104,
  },
  {
    id: '5',
    name: 'Minimalist Logo Cap',
    price: 399,
    images: [
      'https://images.pexels.com/photos/6311586/pexels-photo-6311586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/5709659/pexels-photo-5709659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    category: 'accessories',
    description: 'Complete your look with our Minimalist Logo Cap. The clean design featuring our subtle embroidered logo offers understated style, while the adjustable strap provides a comfortable fit for all head sizes. Made from durable, lightweight materials, it\'s perfect for sunny days or adding a finishing touch to your outfit.',
    sizes: ['One Size'],
    colors: [
      { name: 'Black', value: '#000000' },
      { name: 'White', value: '#FFFFFF' },
      { name: 'Navy', value: '#0A142F' },
      { name: 'Khaki', value: '#C3B091' },
    ],
    inStock: true,
    newArrival: true,
    rating: 4.6,
    reviews: 45,
  },
  {
    id: '6',
    name: 'Vintage Washed Tee',
    price: 699,
    images: [
      'https://images.pexels.com/photos/6311167/pexels-photo-6311167.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/6310927/pexels-photo-6310927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    category: 't-shirts',
    description: 'Experience the comfort of our Vintage Washed Tee, pre-washed for that perfect lived-in softness from the first wear. The slightly faded look gives it authentic character, while the relaxed cut provides an effortlessly cool silhouette. It\'s the perfect balance of casual style and all-day comfort.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Washed Black', value: '#333333' },
      { name: 'Washed Blue', value: '#6B8CAE' },
      { name: 'Washed Red', value: '#C45B52' },
    ],
    inStock: true,
    rating: 4.7,
    reviews: 78,
  },
  {
    id: '7',
    name: 'Eco-Friendly Tote Bag',
    price: 349,
    images: [
      'https://images.pexels.com/photos/6311166/pexels-photo-6311166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/6310924/pexels-photo-6310924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    category: 'accessories',
    description: 'Make a positive impact with our Eco-Friendly Tote Bag, crafted from 100% organic cotton canvas. The spacious interior and sturdy construction make it practical for shopping, beach trips, or daily commutes. Featuring our artistic designs printed with eco-conscious inks, it\'s a stylish way to reduce plastic use.',
    sizes: ['One Size'],
    colors: [
      { name: 'Natural', value: '#F5F5DC' },
      { name: 'Black', value: '#000000' },
    ],
    inStock: true,
    featured: true,
    rating: 4.9,
    reviews: 56,
  },
  {
    id: '8',
    name: 'Performance Long Sleeve Tee',
    price: 899,
    images: [
      'https://images.pexels.com/photos/6310883/pexels-photo-6310883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/6310971/pexels-photo-6310971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    category: 't-shirts',
    description: 'Engineered for active lifestyles, our Performance Long Sleeve Tee combines technical fabrics with contemporary style. The moisture-wicking material keeps you dry during workouts, while the four-way stretch construction allows unrestricted movement. The sleek design transitions seamlessly from the gym to casual outings.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Black', value: '#000000' },
      { name: 'Gray', value: '#808080' },
      { name: 'Blue', value: '#0000FF' },
    ],
    inStock: true,
    newArrival: true,
    rating: 4.8,
    reviews: 39,
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getNewArrivals = (): Product[] => {
  return products.filter(product => product.newArrival);
};