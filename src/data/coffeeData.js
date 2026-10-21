export const CATEGORIES = ['All Coffee', 'Machiato', 'Latte', 'Americano']

export const COFFEE_ITEMS = [
  {
    id: 'caffe-mocha',
    name: 'Caffe Mocha',
    subtitle: 'Deep Foam',
    category: 'Machiato',
    price: 4.53,
    rating: 4.8,
    reviewsCount: 230,
    type: 'Ice/Hot',
    image: '/images/caffe-mocha.png',
    description:
      'A cappuccino is an approximately 150 ml (5 oz) beverage, with 25 ml of espresso coffee and 85ml of fresh milk the fo..',
    fullDescription:
      'A cappuccino is an approximately 150 ml (5 oz) beverage, with 25 ml of espresso coffee and 85ml of fresh milk the foam. Espresso is topped with velvety microfoam poured carefully to create distinct latte art, offering a silky texture and balanced coffee sweetness in every sip.',
    features: [
      { id: 'delivery', label: 'Fast Delivery' },
      { id: 'bean', label: '100% Arabica' },
      { id: 'milk', label: 'Fresh Milk' },
    ],
  },
  {
    id: 'flat-white',
    name: 'Flat White',
    subtitle: 'Espresso',
    category: 'Latte',
    price: 3.53,
    rating: 4.8,
    reviewsCount: 185,
    type: 'Hot',
    image: '/images/flat-white.png',
    description:
      'A flat white is an espresso-based drink accompanied by microfoam consisting of steamed milk with velvety fine bubbles..',
    fullDescription:
      'A flat white is an espresso-based drink accompanied by microfoam consisting of steamed milk with velvety fine bubbles. It creates a smooth, glossy texture and a rich, coffee-forward experience.',
    features: [
      { id: 'delivery', label: 'Fast Delivery' },
      { id: 'bean', label: 'Single Origin' },
      { id: 'milk', label: 'Steamed Microfoam' },
    ],
  },
  {
    id: 'caramel-macchiato',
    name: 'Caramel Macchiato',
    subtitle: 'Deep Foam',
    category: 'Machiato',
    price: 4.85,
    rating: 4.8,
    reviewsCount: 310,
    type: 'Ice/Hot',
    image: '/images/caramel-macchiato.png',
    description:
      'Freshly steamed milk with vanilla-flavored syrup marked with espresso and topped with decadent caramel drizzle..',
    fullDescription:
      'Freshly steamed milk with vanilla-flavored syrup marked with espresso and topped with decadent caramel drizzle. A layered indulgence that hits all the right sweet and bold notes.',
    features: [
      { id: 'delivery', label: 'Fast Delivery' },
      { id: 'bean', label: 'Dark Roast' },
      { id: 'milk', label: 'Organic Vanilla Milk' },
    ],
  },
  {
    id: 'classic-americano',
    name: 'Caffe Americano',
    subtitle: 'Rich & Dark',
    category: 'Americano',
    price: 3.20,
    rating: 4.8,
    reviewsCount: 142,
    type: 'Ice/Hot',
    image: '/images/americano.png',
    description:
      'Espresso shots topped with hot water produce a light crema layer with deep, aromatic roasted notes..',
    fullDescription:
      'Espresso shots topped with hot water produce a light crema layer with deep, aromatic roasted notes and crisp clarity. Excellent served piping hot or poured over clear ice.',
    features: [
      { id: 'delivery', label: 'Fast Delivery' },
      { id: 'bean', label: 'High Altitude Arabica' },
      { id: 'milk', label: 'Pure Water' },
    ],
  },
]

export const SIZE_OPTIONS = [
  { id: 'S', label: 'S', priceMultiplier: 0.9 },
  { id: 'M', label: 'M', priceMultiplier: 1.0 },
  { id: 'L', label: 'L', priceMultiplier: 1.15 },
]
