const { useState, useEffect, createContext, useContext, useMemo } = React;

// --- SVG Icons (Lucide-compatible) ---
const createIcon = (svgContent, defaultClass = "w-5 h-5") => {
  return ({ className = defaultClass, ...props }) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {svgContent}
    </svg>
  );
};

const UtensilsCrossed = createIcon(
  <>
    <path d="m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8Z" />
    <path d="M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7" />
    <path d="m2.1 21.8 6.4-6.3" />
    <path d="m19 5-7 7" />
  </>
);

const MenuIcon = createIcon(
  <>
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </>
);

const TagIcon = createIcon(
  <>
    <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
    <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
  </>
);

const HeartIcon = ({ className = "w-5 h-5", ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);

const Settings2Icon = createIcon(
  <>
    <path d="M20 7h-9" />
    <path d="M14 17H5" />
    <circle cx="17" cy="17" r="3" />
    <circle cx="7" cy="7" r="3" />
  </>
);

const ShoppingBagIcon = createIcon(
  <>
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
    <path d="M3 6h18" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </>
);

const SearchIcon = createIcon(
  <>
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </>
);

const FlameIcon = createIcon(
  <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
);

const ArrowRightIcon = createIcon(
  <>
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </>
);

const StarIcon = ({ className = "w-4 h-4", ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const PlusIcon = createIcon(
  <>
    <path d="M5 12h14" />
    <path d="M12 5v14" />
  </>
);

const MinusIcon = createIcon(<path d="M5 12h14" />);

const XIcon = createIcon(
  <>
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </>
);

const Trash2Icon = createIcon(
  <>
    <path d="M3 6h18" />
    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    <line x1="10" x2="10" y1="11" y2="17" />
    <line x1="14" x2="14" y1="11" y2="17" />
  </>
);

const CheckIcon = createIcon(<path d="M20 6 9 17l-5-5" />);

const CheckCircle2Icon = createIcon(
  <>
    <circle cx="12" cy="12" r="10" />
    <path d="m9 12 2 2 4-4" />
  </>
);

const ClockIcon = createIcon(
  <>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </>
);

const MapPinIcon = createIcon(
  <>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </>
);

const PhoneIcon = createIcon(
  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
);

const UserIcon = createIcon(
  <>
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </>
);

const CreditCardIcon = createIcon(
  <>
    <rect width="20" height="14" x="2" y="5" rx="2" />
    <line x1="2" x2="22" y1="10" y2="10" />
  </>
);

const BanknoteIcon = createIcon(
  <>
    <rect width="20" height="12" x="2" y="6" rx="2" />
    <circle cx="12" cy="12" r="2" />
    <path d="M6 12h.01M18 12h.01" />
  </>
);

const ShieldCheckIcon = createIcon(
  <>
    <path d="M20 13c0 5-8 9-8 9s-8-4-8-9V5l8-3 8 3v8Z" />
    <path d="m9 12 2 2 4-4" />
  </>
);

const ChevronLeftIcon = createIcon(<path d="m15 18-6-6 6-6" />);
const SparklesIcon = createIcon(
  <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z" />
);

const Edit2Icon = createIcon(
  <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
);

const RotateCcwIcon = createIcon(
  <>
    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
    <path d="M3 3v5h5" />
  </>
);

// --- Category Custom SVGs ---
const CategoryIcon = ({ category, isSelected = false, className = "w-7 h-7" }) => {
  const accentColor = isSelected ? '#ffffff' : '#f59e0b';
  const secondaryColor = isSelected ? '#fed7aa' : '#fb923c';

  switch (category) {
    case 'burger':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M3 11c0-4.418 3.582-7 9-7s9 2.582 9 7v1H3v-1z" fill={isSelected ? '#fed7aa' : '#fb923c'} fillOpacity={isSelected ? '0.35' : '0.2'} stroke={accentColor} />
          <circle cx="8" cy="7" r="0.8" fill={accentColor} stroke="none" />
          <circle cx="12" cy="6" r="0.8" fill={accentColor} stroke="none" />
          <circle cx="16" cy="7.5" r="0.8" fill={accentColor} stroke="none" />
          <path d="M4 15h16" stroke={accentColor} strokeWidth="2.2" />
          <path d="M7 15l2 3 3-3" stroke={secondaryColor} strokeWidth="1.6" />
          <path d="M4 18c0 1.657 3.582 3 8 3s8-1.343 8-3v-1H4v1z" fill={isSelected ? '#fed7aa' : '#fb923c'} fillOpacity={isSelected ? '0.35' : '0.2'} stroke={accentColor} />
        </svg>
      );
    case 'pizza':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M12 21L3 6a15.8 15.8 0 0118 0l-9 15z" fill={isSelected ? '#fed7aa' : '#fb923c'} fillOpacity={isSelected ? '0.35' : '0.2'} stroke={accentColor} />
          <path d="M4.5 7.5a13.5 13.5 0 0115 0" stroke={secondaryColor} strokeWidth="2" />
          <circle cx="10" cy="11" r="1.3" fill={accentColor} stroke="none" />
          <circle cx="14" cy="14" r="1.2" fill={accentColor} stroke="none" />
          <circle cx="11.5" cy="16.5" r="1" fill={accentColor} stroke="none" />
        </svg>
      );
    case 'chicken':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M14.5 4.5c2.5 2.5 3 6.5 1 9.5l-4 4c-3 2-7 1.5-9.5-1-2.5-2.5-3-6.5-1-9.5l4-4c3-2 7-1.5 9.5 1z" fill={isSelected ? '#fed7aa' : '#fb923c'} fillOpacity={isSelected ? '0.35' : '0.2'} stroke={accentColor} />
          <path d="M15.5 14l5 5" stroke={secondaryColor} strokeWidth="2" />
          <circle cx="20.5" cy="19" r="1.2" stroke={secondaryColor} strokeWidth="1.5" />
          <circle cx="19" cy="20.5" r="1.2" stroke={secondaryColor} strokeWidth="1.5" />
        </svg>
      );
    case 'fries':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M6 10l1.8 11h8.4L18 10c-3 1.5-9 1.5-12 0z" fill={isSelected ? '#ef4444' : '#dc2626'} fillOpacity={isSelected ? '0.85' : '0.65'} stroke={accentColor} />
          <path d="M8 10V4" stroke={secondaryColor} strokeWidth="2.2" strokeLinecap="round" />
          <path d="M11 10V2" stroke={accentColor} strokeWidth="2.2" strokeLinecap="round" />
          <path d="M13.5 10V3" stroke={secondaryColor} strokeWidth="2.2" strokeLinecap="round" />
          <path d="M16 10V5" stroke={accentColor} strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      );
    case 'drink':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M6 8l1.5 13h9L18 8H6z" fill={isSelected ? '#ef4444' : '#b91c1c'} fillOpacity={isSelected ? '0.8' : '0.6'} stroke={accentColor} />
          <path d="M5 8h14v-2H5v2z" stroke={accentColor} strokeWidth="1.6" />
          <path d="M12 6V2l3-1" stroke={secondaryColor} strokeWidth="2" strokeLinecap="round" />
          <circle cx="12" cy="14" r="2" fill="#ffffff" fillOpacity="0.4" stroke="none" />
        </svg>
      );
    default:
      return null;
  }
};

// --- Initial Menu Data & Constants ---
const DEFAULT_SIZES = [
  { id: 'regular', name: 'Regular', priceMultiplier: 1.0, priceOffsetUSD: 0, priceOffsetPKR: 0 },
  { id: 'large', name: 'Large', priceMultiplier: 1.25, priceOffsetUSD: 1.5, priceOffsetPKR: 150 },
  { id: 'xlarge', name: 'X Large', priceMultiplier: 1.5, priceOffsetUSD: 3.0, priceOffsetPKR: 300 },
];

const BURGER_ADDONS = [
  { id: 'cheese', name: 'Add Cheese', priceUSD: 1.0, pricePKR: 100, defaultChecked: true },
  { id: 'patty', name: 'Extra Patty', priceUSD: 2.0, pricePKR: 150, defaultChecked: false },
  { id: 'bacon', name: 'Add Bacon', priceUSD: 1.5, pricePKR: 120, defaultChecked: true },
  { id: 'sauce', name: 'Special Spicy Garlic Dip', priceUSD: 0.8, pricePKR: 60, defaultChecked: false },
];

const INITIAL_MENU = [
  {
    id: 'spicy-chicken-burger',
    title: 'Spicy Chicken Burger',
    category: 'burger',
    description: 'Crispy spicy chicken patty with fresh lettuce, tomato, onion and our special house sauce.',
    basePriceUSD: 6.49,
    basePricePKR: 450,
    rating: 4.8,
    reviewsCount: 120,
    imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=900&auto=format&fit=crop',
    isSpicy: true,
    isPopular: true,
    available: true,
    sizes: DEFAULT_SIZES,
    addOns: BURGER_ADDONS,
  },
  {
    id: 'cheese-burger',
    title: 'Classic Cheese Burger',
    category: 'burger',
    description: 'Classic beef patty grilled to perfection with melted cheddar, crisp lettuce, pickles and house glaze.',
    basePriceUSD: 5.49,
    basePricePKR: 380,
    rating: 4.7,
    reviewsCount: 94,
    imageUrl: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=900&auto=format&fit=crop',
    isPopular: true,
    available: true,
    sizes: DEFAULT_SIZES,
    addOns: BURGER_ADDONS,
  },
  {
    id: 'double-beef-burger',
    title: 'Double Beef Burger',
    category: 'burger',
    description: 'Two smashed prime beef patties, double Monterey Jack cheese, caramelized onions, and smoky signature spread.',
    basePriceUSD: 7.49,
    basePricePKR: 520,
    rating: 4.9,
    reviewsCount: 180,
    imageUrl: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?q=80&w=900&auto=format&fit=crop',
    isPopular: true,
    available: true,
    sizes: DEFAULT_SIZES,
    addOns: BURGER_ADDONS,
  },
  {
    id: 'spicy-burger-combo',
    title: 'Spicy Burger Combo',
    category: 'burger',
    description: 'Ultimate meal bundle: Spicy Chicken Burger + Crispy Golden Fries + Iced Chilled Craft Drink.',
    basePriceUSD: 8.99,
    basePricePKR: 620,
    rating: 4.9,
    reviewsCount: 310,
    imageUrl: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=900&auto=format&fit=crop',
    isSpicy: true,
    isOffer: true,
    discountBadge: '20% OFF',
    available: true,
    sizes: DEFAULT_SIZES,
    addOns: BURGER_ADDONS,
  },
  {
    id: 'truffle-smash-burger',
    title: 'Truffle Mushroom Smash',
    category: 'burger',
    description: 'Sautéed portobello mushrooms, black truffle aioli, Swiss cheese, and arugula on a toasted brioche bun.',
    basePriceUSD: 7.99,
    basePricePKR: 550,
    rating: 4.8,
    reviewsCount: 88,
    imageUrl: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=900&auto=format&fit=crop',
    isPopular: false,
    available: true,
    sizes: DEFAULT_SIZES,
    addOns: BURGER_ADDONS,
  },
  {
    id: 'firehouse-pepperoni-pizza',
    title: 'Firehouse Pepperoni Pizza',
    category: 'pizza',
    description: 'Crisp hand-tossed artisan dough with crushed San Marzano tomato sauce, spicy pepperoni, and fresh mozzarella.',
    basePriceUSD: 9.99,
    basePricePKR: 850,
    rating: 4.9,
    reviewsCount: 145,
    imageUrl: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=900&auto=format&fit=crop',
    isSpicy: true,
    isPopular: true,
    available: true,
    sizes: [
      { id: 'small', name: 'Small (8")', priceMultiplier: 1.0, priceOffsetUSD: 0, priceOffsetPKR: 0 },
      { id: 'medium', name: 'Medium (12")', priceMultiplier: 1.4, priceOffsetUSD: 3.5, priceOffsetPKR: 300 },
      { id: 'large', name: 'Large (16")', priceMultiplier: 1.8, priceOffsetUSD: 6.0, priceOffsetPKR: 500 },
    ],
    addOns: [
      { id: 'extra-cheese', name: 'Double Mozzarella', priceUSD: 1.5, pricePKR: 120, defaultChecked: true },
      { id: 'jalapeno', name: 'Spicy Jalapeño', priceUSD: 0.8, pricePKR: 70, defaultChecked: false },
      { id: 'garlic-crust', name: 'Stuffed Garlic Crust', priceUSD: 2.0, pricePKR: 160, defaultChecked: false },
    ],
  },
  {
    id: 'crispy-hot-wings',
    title: 'Fiery Crispy Fried Wings',
    category: 'chicken',
    description: 'Golden crunchy chicken wings tossed in secret smoky hot habanero sauce served with cool ranch.',
    basePriceUSD: 6.99,
    basePricePKR: 480,
    rating: 4.7,
    reviewsCount: 160,
    imageUrl: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?q=80&w=900&auto=format&fit=crop',
    isSpicy: true,
    isPopular: true,
    available: true,
    sizes: [
      { id: '6pcs', name: '6 Pcs', priceMultiplier: 1.0, priceOffsetUSD: 0, priceOffsetPKR: 0 },
      { id: '12pcs', name: '12 Pcs', priceMultiplier: 1.8, priceOffsetUSD: 4.5, priceOffsetPKR: 350 },
      { id: '18pcs', name: '18 Pcs', priceMultiplier: 2.5, priceOffsetUSD: 8.0, priceOffsetPKR: 600 },
    ],
    addOns: [
      { id: 'ranch', name: 'Extra Cool Ranch', priceUSD: 0.75, pricePKR: 60, defaultChecked: true },
      { id: 'blue-cheese', name: 'Gourmet Blue Cheese Dip', priceUSD: 1.0, pricePKR: 80, defaultChecked: false },
    ],
  },
  {
    id: 'loaded-parmesan-fries',
    title: 'Loaded Truffle Fries',
    category: 'fries',
    description: 'Crispy hand-cut potato fries showered in parmesan shavings, truffle oil, and smoked paprika.',
    basePriceUSD: 3.99,
    basePricePKR: 280,
    rating: 4.6,
    reviewsCount: 77,
    imageUrl: 'https://images.unsplash.com/photo-1576107232684-1279f3908594?q=80&w=900&auto=format&fit=crop',
    isPopular: false,
    available: true,
    sizes: DEFAULT_SIZES,
    addOns: [
      { id: 'melted-cheese', name: 'Liquid Cheddar Sauce', priceUSD: 0.9, pricePKR: 80, defaultChecked: true },
      { id: 'jalapeno', name: 'Chopped Jalapeños', priceUSD: 0.5, pricePKR: 40, defaultChecked: false },
    ],
  },
  {
    id: 'chilled-caramel-shake',
    title: 'Salted Caramel Thick Shake',
    category: 'drink',
    description: 'Velvety cream gelato blended with slow-cooked butter caramel and sea salt flakes.',
    basePriceUSD: 3.49,
    basePricePKR: 260,
    rating: 4.9,
    reviewsCount: 112,
    imageUrl: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=900&auto=format&fit=crop',
    isPopular: false,
    available: true,
    sizes: DEFAULT_SIZES,
    addOns: [
      { id: 'whipped-cream', name: 'Extra Whipped Cream', priceUSD: 0.5, pricePKR: 40, defaultChecked: true },
      { id: 'choc-drizzle', name: 'Belgian Chocolate Drizzle', priceUSD: 0.6, pricePKR: 50, defaultChecked: false },
    ],
  },
];

// --- Pricing Utilities ---
function calculateItemUnitPrice(basePrice, size, selectedAddOns = []) {
  const multiplier = size?.priceMultiplier ?? 1;
  const offset = size?.priceOffset ?? 0;
  const baseWithSize = basePrice * multiplier + offset;
  const addOnsTotal = selectedAddOns.reduce((sum, item) => sum + item.price, 0);
  return Math.round((baseWithSize + addOnsTotal) * 100) / 100;
}

function calculateLineTotal(unitPrice, quantity) {
  const validQty = Math.max(1, Math.floor(quantity));
  return Math.round(unitPrice * validQty * 100) / 100;
}

function calculateOrderSummary({ lineTotals, discountPercentage = 0, deliveryFee = 2.0, taxRate = 0.08 }) {
  const subtotal = Math.round(lineTotals.reduce((acc, curr) => acc + curr, 0) * 100) / 100;
  const discountAmount = Math.round((subtotal * (discountPercentage / 100)) * 100) / 100;
  const discountedSubtotal = Math.max(0, subtotal - discountAmount);
  const tax = Math.round((discountedSubtotal * taxRate) * 100) / 100;
  const total = Math.round((discountedSubtotal + (subtotal > 0 ? deliveryFee : 0) + tax) * 100) / 100;

  return {
    subtotal,
    discountAmount,
    discountedSubtotal,
    deliveryFee: subtotal > 0 ? deliveryFee : 0,
    tax,
    total,
  };
}

function formatPrice(amount, currency = 'USD') {
  if (currency === 'PKR') {
    return `Rs. ${Math.round(amount).toLocaleString('en-PK', { maximumFractionDigits: 0 })}`;
  }
  return `$ ${amount.toFixed(2)}`;
}

// --- Food Context & State ---
const FoodContext = createContext(null);

const STORAGE_KEYS = {
  MENU: 'aurabite_menu_items_v2',
  CART: 'aurabite_cart_v2',
  FAVORITES: 'aurabite_favorites_v2',
  CURRENCY: 'aurabite_currency_v2',
};

const FoodProvider = ({ children }) => {
  const [menuItems, setMenuItems] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.MENU);
      return saved ? JSON.parse(saved) : INITIAL_MENU;
    } catch {
      return INITIAL_MENU;
    }
  });

  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.FAVORITES);
      return saved ? JSON.parse(saved) : ['spicy-chicken-burger', 'spicy-burger-combo'];
    } catch {
      return ['spicy-chicken-burger', 'spicy-burger-combo'];
    }
  });

  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.CART);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [currency, setCurrencyState] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.CURRENCY);
      return saved === 'PKR' ? 'PKR' : 'USD';
    } catch {
      return 'USD';
    }
  });

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [customizingItem, setCustomizingItem] = useState(null);
  const [activeTab, setActiveTab] = useState('home');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [confirmedOrder, setConfirmedOrder] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.MENU, JSON.stringify(menuItems));
    } catch {}
  }, [menuItems]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(favorites));
    } catch {}
  }, [favorites]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(cart));
    } catch {}
  }, [cart]);

  const setCurrency = (c) => {
    setCurrencyState(c);
    try {
      localStorage.setItem(STORAGE_KEYS.CURRENCY, c);
    } catch {}
  };

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const openCustomizer = (item) => setCustomizingItem(item);
  const closeCustomizer = () => setCustomizingItem(null);

  const addToCart = (foodItem, size, addOns, quantity, instructions = '') => {
    const unitPriceUSD = calculateItemUnitPrice(
      foodItem.basePriceUSD,
      { priceMultiplier: size.priceMultiplier, priceOffset: size.priceOffsetUSD },
      addOns.map((a) => ({ price: a.priceUSD }))
    );

    const unitPricePKR = calculateItemUnitPrice(
      foodItem.basePricePKR,
      { priceMultiplier: size.priceMultiplier, priceOffset: size.priceOffsetPKR },
      addOns.map((a) => ({ price: a.pricePKR }))
    );

    const lineTotalUSD = calculateLineTotal(unitPriceUSD, quantity);
    const lineTotalPKR = calculateLineTotal(unitPricePKR, quantity);

    const cartItemId = `${foodItem.id}-${size.id}-${addOns.map((a) => a.id).sort().join('_')}-${Date.now()}`;

    const newCartItem = {
      cartItemId,
      foodItem,
      customization: {
        selectedSize: size,
        selectedAddOns: addOns,
        specialInstructions: instructions,
      },
      quantity,
      unitPriceUSD,
      unitPricePKR,
      lineTotalUSD,
      lineTotalPKR,
    };

    setCart((prev) => [...prev, newCartItem]);
    setIsCartOpen(true);
  };

  const removeFromCart = (cartItemId) => {
    setCart((prev) => prev.filter((item) => item.cartItemId !== cartItemId));
  };

  const updateCartQuantity = (cartItemId, delta) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.cartItemId === cartItemId) {
            const newQty = item.quantity + delta;
            if (newQty <= 0) return null;
            return {
              ...item,
              quantity: newQty,
              lineTotalUSD: calculateLineTotal(item.unitPriceUSD, newQty),
              lineTotalPKR: calculateLineTotal(item.unitPricePKR, newQty),
            };
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const clearCart = () => setCart([]);

  const lineTotals = cart.map((i) => (currency === 'PKR' ? i.lineTotalPKR : i.lineTotalUSD));
  const cartTotals = calculateOrderSummary({
    lineTotals,
    discountPercentage: 0,
    deliveryFee: currency === 'PKR' ? 150 : 2.0,
    taxRate: currency === 'PKR' ? 0.05 : 0.08,
  });

  const totalCartItemCount = cart.reduce((acc, curr) => acc + curr.quantity, 0);

  const placeOrder = (customer, paymentMethod) => {
    const orderId = `AB-${Math.floor(100000 + Math.random() * 900000)}`;
    const newOrder = {
      id: orderId,
      items: [...cart],
      subtotal: cartTotals.subtotal,
      discount: cartTotals.discountAmount,
      deliveryFee: cartTotals.deliveryFee,
      tax: cartTotals.tax,
      total: cartTotals.total,
      currency,
      customer,
      paymentMethod,
      status: 'confirmed',
      createdAt: new Date().toISOString(),
      estimatedDeliveryMinutes: 30,
    };

    setConfirmedOrder(newOrder);
    setCart([]);
    setIsCheckoutOpen(false);
    return newOrder;
  };

  const updateMenuItem = (item) => {
    setMenuItems((prev) => prev.map((i) => (i.id === item.id ? item : i)));
  };

  const addMenuItem = (item) => {
    setMenuItems((prev) => [item, ...prev]);
  };

  const resetMenu = () => {
    setMenuItems(INITIAL_MENU);
    try {
      localStorage.setItem(STORAGE_KEYS.MENU, JSON.stringify(INITIAL_MENU));
    } catch {}
  };

  const value = {
    menuItems,
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    favorites,
    toggleFavorite,
    customizingItem,
    openCustomizer,
    closeCustomizer,
    cart,
    addToCart,
    removeFromCart,
    updateCartQuantity,
    clearCart,
    currency,
    setCurrency,
    activeTab,
    setActiveTab,
    isCartOpen,
    setIsCartOpen,
    isCheckoutOpen,
    setIsCheckoutOpen,
    isAdminOpen,
    setIsAdminOpen,
    confirmedOrder,
    setConfirmedOrder,
    placeOrder,
    updateMenuItem,
    addMenuItem,
    resetMenu,
    cartTotals,
    totalCartItemCount,
  };

  return <FoodContext.Provider value={value}>{children}</FoodContext.Provider>;
};

const useFood = () => useContext(FoodContext);

// --- Component: CustomizationModal ---
const CustomizationModal = ({ item, onClose }) => {
  const { favorites, toggleFavorite, addToCart, currency } = useFood();

  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedAddOns, setSelectedAddOns] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [addedAnimation, setAddedAnimation] = useState(false);

  useEffect(() => {
    if (item) {
      setSelectedSize(item.sizes?.[0] || null);
      setSelectedAddOns(item.addOns?.filter((a) => a.defaultChecked) || []);
      setQuantity(1);
    }
  }, [item?.id]);

  if (!item) return null;

  const isFav = favorites.includes(item.id);

  const toggleAddOn = (addon) => {
    setSelectedAddOns((prev) =>
      prev.some((a) => a.id === addon.id)
        ? prev.filter((a) => a.id !== addon.id)
        : [...prev, addon]
    );
  };

  const basePrice = currency === 'PKR' ? item.basePricePKR : item.basePriceUSD;
  const sizeOption = selectedSize
    ? {
        priceMultiplier: selectedSize.priceMultiplier,
        priceOffset: currency === 'PKR' ? selectedSize.priceOffsetPKR : selectedSize.priceOffsetUSD,
      }
    : undefined;

  const addOnPricing = selectedAddOns.map((a) => ({
    price: currency === 'PKR' ? a.pricePKR : a.priceUSD,
  }));

  const unitPrice = calculateItemUnitPrice(basePrice, sizeOption, addOnPricing);
  const totalPrice = calculateLineTotal(unitPrice, quantity);

  const handleAddToCart = () => {
    if (!selectedSize) return;
    addToCart(item, selectedSize, selectedAddOns, quantity);
    setAddedAnimation(true);
    setTimeout(() => {
      setAddedAnimation(false);
      onClose();
    }, 450);
  };

  return (
    <div className="relative flex flex-col h-full text-white overflow-y-auto no-scrollbar select-none bg-[#14110f]">
      {/* Top Floating Controls */}
      <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-auto">
        <button
          onClick={onClose}
          className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-stone-200 hover:text-white hover:bg-white/10 active:scale-95 transition-all shadow-lg"
        >
          <ChevronLeftIcon className="w-5 h-5" />
        </button>

        <button
          onClick={() => toggleFavorite(item.id)}
          className="w-10 h-10 rounded-full glass-card flex items-center justify-center active:scale-95 transition-all shadow-lg"
        >
          <HeartIcon className={`w-5 h-5 transition-colors ${isFav ? 'text-red-500 fill-red-500' : 'text-stone-300'}`} />
        </button>
      </div>

      {/* Hero Product Image */}
      <div className="relative w-full h-72 sm:h-80 flex-shrink-0 overflow-hidden bg-gradient-to-b from-stone-900 via-[#1c1714] to-[#14110f] flex items-center justify-center p-6">
        <div className="absolute inset-0 bg-gradient-to-t from-[#14110f] via-transparent to-black/40 z-10" />
        <img
          src={item.imageUrl}
          alt={item.title}
          className="w-full h-full object-cover rounded-3xl drop-shadow-[0_20px_35px_rgba(0,0,0,0.8)]"
        />
      </div>

      {/* Product Info & Options */}
      <div className="p-6 space-y-6 flex-1 flex flex-col justify-between">
        <div className="space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="flex items-center gap-1 text-xs font-bold text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
                  <StarIcon className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  {item.rating} ({item.reviewsCount}+)
                </span>
                {item.isSpicy && (
                  <span className="flex items-center gap-1 text-xs font-bold text-red-400 bg-red-500/10 px-2 py-0.5 rounded-full border border-red-500/20">
                    <FlameIcon className="w-3.5 h-3.5" /> Spicy
                  </span>
                )}
              </div>
              <h2 className="text-2xl font-black text-white tracking-tight">{item.title}</h2>
            </div>
            <div className="text-right flex-shrink-0">
              <span className="text-[10px] text-stone-400 uppercase tracking-wider block">Price</span>
              <span className="text-2xl font-black text-amber-400">
                {formatPrice(unitPrice, currency)}
              </span>
            </div>
          </div>

          <p className="text-xs text-stone-300 leading-relaxed">{item.description}</p>

          {/* Size Options */}
          {item.sizes && item.sizes.length > 0 && (
            <div className="space-y-2.5 pt-2">
              <label className="text-xs font-bold text-stone-300 uppercase tracking-wider block">Select Portion Size</label>
              <div className="grid grid-cols-3 gap-2">
                {item.sizes.map((s) => {
                  const isSelected = selectedSize?.id === s.id;
                  const offset = currency === 'PKR' ? s.priceOffsetPKR : s.priceOffsetUSD;
                  return (
                    <button
                      key={s.id}
                      onClick={() => setSelectedSize(s)}
                      className={`py-3 px-3 rounded-2xl text-xs font-bold transition-all text-center border ${
                        isSelected
                          ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white border-amber-400 shadow-md glow-orange-subtle'
                          : 'glass-card text-stone-300 hover:text-white border-white/10'
                      }`}
                    >
                      <span className="block truncate">{s.name}</span>
                      <span className="text-[10px] opacity-75 font-normal block mt-0.5">
                        {offset > 0 ? `+${formatPrice(offset, currency)}` : 'Standard'}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Add-ons Checklist */}
          {item.addOns && item.addOns.length > 0 && (
            <div className="space-y-2.5 pt-2">
              <label className="text-xs font-bold text-stone-300 uppercase tracking-wider block">Extra Gourmet Add-ons</label>
              <div className="space-y-2">
                {item.addOns.map((addon) => {
                  const isChecked = selectedAddOns.some((a) => a.id === addon.id);
                  const addOnPrice = currency === 'PKR' ? addon.pricePKR : addon.priceUSD;
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddOn(addon)}
                      className={`flex items-center justify-between p-3 rounded-2xl glass-card cursor-pointer border transition-all ${
                        isChecked ? 'border-amber-500/60 bg-amber-500/10' : 'border-white/5 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded-lg border flex items-center justify-center transition-colors ${
                            isChecked ? 'bg-amber-500 border-amber-400 text-white' : 'border-white/20 bg-stone-900/60'
                          }`}
                        >
                          {isChecked && <CheckIcon className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                        <span className="text-xs font-semibold text-stone-200">{addon.name}</span>
                      </div>
                      <span className="text-xs font-bold text-amber-300">
                        +{formatPrice(addOnPrice, currency)}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Quantity & Add to Cart Bottom Bar */}
        <div className="pt-6 border-t border-white/10 flex items-center gap-4 mt-6">
          <div className="flex items-center glass-pill rounded-2xl p-1 border border-white/10">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="w-9 h-9 rounded-xl flex items-center justify-center text-stone-300 hover:text-white hover:bg-white/10 active:scale-90 transition-all"
            >
              <MinusIcon className="w-4 h-4" />
            </button>
            <span className="w-10 text-center font-extrabold text-sm">{quantity}</span>
            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="w-9 h-9 rounded-xl flex items-center justify-center text-stone-300 hover:text-white hover:bg-white/10 active:scale-90 transition-all"
            >
              <PlusIcon className="w-4 h-4" />
            </button>
          </div>

          <button
            onClick={handleAddToCart}
            className={`flex-1 py-3.5 px-6 rounded-2xl font-extrabold text-xs sm:text-sm tracking-wide shadow-xl flex items-center justify-between transition-all ${
              addedAnimation
                ? 'bg-emerald-500 text-white'
                : 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white glow-orange active:scale-95'
            }`}
          >
            <span>{addedAnimation ? 'Added to Cart!' : 'Add to Order'}</span>
            <span className="bg-white/20 px-2.5 py-1 rounded-xl text-xs font-black">
              {formatPrice(totalPrice, currency)}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

// --- Component: CartDrawer ---
const CartDrawer = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateCartQuantity,
    currency,
    cartTotals,
    setIsCheckoutOpen,
  } = useFood();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md h-full glass-panel border-l border-white/15 flex flex-col justify-between p-6 overflow-hidden shadow-2xl bg-[#141210]/95">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <ShoppingBagIcon className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">Your Cart</h2>
              <p className="text-xs text-stone-400">
                {cart.length === 0 ? 'Cart is empty' : `${cart.reduce((s, i) => s + i.quantity, 0)} items selected`}
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="w-9 h-9 rounded-full glass-pill flex items-center justify-center text-stone-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <XIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto no-scrollbar py-4 space-y-3.5">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-8 space-y-4">
              <div className="w-20 h-20 rounded-full glass-card flex items-center justify-center text-stone-500">
                <ShoppingBagIcon className="w-10 h-10" />
              </div>
              <p className="text-stone-300 font-medium">Your feast is waiting!</p>
              <p className="text-xs text-stone-500 max-w-xs">
                Browse our gourmet burgers, combos, and sides to start your order.
              </p>
            </div>
          ) : (
            cart.map((item) => {
              const unitPrice = currency === 'PKR' ? item.unitPricePKR : item.unitPriceUSD;
              const lineTotal = currency === 'PKR' ? item.lineTotalPKR : item.lineTotalUSD;

              return (
                <div key={item.cartItemId} className="rounded-2xl glass-card p-3.5 border border-white/10 flex gap-3 relative group">
                  <img
                    src={item.foodItem.imageUrl}
                    alt={item.foodItem.title}
                    className="w-16 h-16 rounded-xl object-cover flex-shrink-0"
                  />

                  <div className="flex-1 min-w-0 pr-6">
                    <h3 className="text-sm font-bold text-white truncate leading-tight">
                      {item.foodItem.title}
                    </h3>

                    <div className="mt-1 flex flex-wrap gap-1 text-[10px]">
                      <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-semibold border border-amber-500/30">
                        {item.customization.selectedSize?.name || 'Regular'}
                      </span>
                      {item.customization.selectedAddOns?.map((addon) => (
                        <span key={addon.id} className="px-1.5 py-0.5 rounded-full bg-stone-800 text-stone-300 border border-white/5">
                          +{addon.name}
                        </span>
                      ))}
                    </div>

                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-sm font-extrabold text-amber-400">
                        {formatPrice(lineTotal, currency)}
                      </span>

                      <div className="flex items-center gap-2 glass-pill rounded-xl px-2 py-1">
                        <button
                          onClick={() => updateCartQuantity(item.cartItemId, -1)}
                          className="text-stone-400 hover:text-white"
                        >
                          <MinusIcon className="w-3.5 h-3.5" />
                        </button>
                        <span className="text-xs font-bold w-4 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateCartQuantity(item.cartItemId, 1)}
                          className="text-stone-400 hover:text-white"
                        >
                          <PlusIcon className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.cartItemId)}
                    className="absolute top-3 right-3 text-stone-500 hover:text-red-400 transition-colors"
                  >
                    <Trash2Icon className="w-4 h-4" />
                  </button>
                </div>
              );
            })
          )}
        </div>

        {/* Footer Checkout Summary */}
        {cart.length > 0 && (
          <div className="pt-4 border-t border-white/10 space-y-3">
            <div className="space-y-1.5 text-xs text-stone-400">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="text-stone-200 font-semibold">{formatPrice(cartTotals.subtotal, currency)}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Fee</span>
                <span className="text-stone-200 font-semibold">{formatPrice(cartTotals.deliveryFee, currency)}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax & Service (8%)</span>
                <span className="text-stone-200 font-semibold">{formatPrice(cartTotals.tax, currency)}</span>
              </div>
              <div className="flex justify-between text-sm font-extrabold text-white pt-2 border-t border-white/10">
                <span>Total Amount</span>
                <span className="text-amber-400">{formatPrice(cartTotals.total, currency)}</span>
              </div>
            </div>

            <button
              onClick={() => {
                setIsCartOpen(false);
                setIsCheckoutOpen(true);
              }}
              className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white font-extrabold text-xs sm:text-sm tracking-wide shadow-xl glow-orange flex items-center justify-center gap-2 active:scale-95 transition-all"
            >
              <span>Proceed to Checkout</span>
              <ArrowRightIcon className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// --- Component: CheckoutModal ---
const CheckoutModal = () => {
  const { isCheckoutOpen, setIsCheckoutOpen, cartTotals, currency, placeOrder, cart } = useFood();

  const [fullName, setFullName] = useState('Alex Harrison');
  const [phone, setPhone] = useState('0300-8472911');
  const [address, setAddress] = useState('Flat 4B, Gulberg Heights, Block L');
  const [city, setCity] = useState('Lahore');
  const [notes, setNotes] = useState('Please ring bell twice and leave with security if unreachable.');
  const [paymentMethod, setPaymentMethod] = useState('easypaisa');
  const [accountNumber, setAccountNumber] = useState('03008472911');
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isCheckoutOpen || cart.length === 0) return null;

  const validate = () => {
    const errs = {};
    if (!fullName.trim()) errs.fullName = 'Full name is required';
    if (!phone.trim()) errs.phone = 'Mobile number is required';
    if (!address.trim()) errs.address = 'Delivery address is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      placeOrder(
        { fullName, phone, deliveryAddress: address, city, deliveryNotes: notes, accountNumber },
        paymentMethod
      );
      setIsSubmitting(false);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200 select-none">
      <div className="relative w-full max-w-lg max-h-[90vh] glass-panel rounded-3xl border border-white/20 p-6 flex flex-col justify-between overflow-y-auto no-scrollbar shadow-2xl bg-[#171412]/95">
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <ShieldCheckIcon className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">Checkout Details</h2>
              <p className="text-xs text-stone-400">Fast 30-min doorstep delivery</p>
            </div>
          </div>
          <button
            onClick={() => setIsCheckoutOpen(false)}
            className="w-8 h-8 rounded-full glass-pill flex items-center justify-center text-stone-400 hover:text-white"
          >
            <XIcon className="w-4 h-4" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 py-4 text-xs">
          <div>
            <label className="font-semibold text-stone-300 block mb-1">Full Name</label>
            <div className="relative">
              <UserIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-500" />
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full pl-10 pr-3 py-2.5 rounded-xl glass-card text-stone-100 border border-white/10 focus:outline-none focus:ring-1 focus:ring-amber-500"
              />
            </div>
            {errors.fullName && <p className="text-red-400 text-[10px] mt-1">{errors.fullName}</p>}
          </div>

          <div>
            <label className="font-semibold text-stone-300 block mb-1">Contact Phone</label>
            <div className="relative">
              <PhoneIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-500" />
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full pl-10 pr-3 py-2.5 rounded-xl glass-card text-stone-100 border border-white/10 focus:outline-none focus:ring-1 focus:ring-amber-500"
              />
            </div>
            {errors.phone && <p className="text-red-400 text-[10px] mt-1">{errors.phone}</p>}
          </div>

          <div>
            <label className="font-semibold text-stone-300 block mb-1">Delivery Address</label>
            <div className="relative">
              <MapPinIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-500" />
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full pl-10 pr-3 py-2.5 rounded-xl glass-card text-stone-100 border border-white/10 focus:outline-none focus:ring-1 focus:ring-amber-500"
              />
            </div>
            {errors.address && <p className="text-red-400 text-[10px] mt-1">{errors.address}</p>}
          </div>

          <div>
            <label className="font-semibold text-stone-300 block mb-1">Payment Method</label>
            <div className="grid grid-cols-2 gap-2">
              {[
                { id: 'easypaisa', label: 'EasyPaisa Wallet' },
                { id: 'jazzcash', label: 'JazzCash Wallet' },
                { id: 'cod', label: 'Cash on Delivery' },
                { id: 'card', label: 'Credit / Debit Card' },
              ].map((m) => (
                <button
                  type="button"
                  key={m.id}
                  onClick={() => setPaymentMethod(m.id)}
                  className={`p-3 rounded-xl border text-left font-semibold transition-all ${
                    paymentMethod === m.id
                      ? 'bg-amber-500/20 border-amber-500 text-amber-300 shadow-md'
                      : 'glass-card border-white/10 text-stone-400 hover:text-white'
                  }`}
                >
                  {m.label}
                </button>
              ))}
            </div>
          </div>

          <div className="p-3.5 rounded-2xl glass-card border border-white/10 flex justify-between items-center text-sm font-bold">
            <span className="text-stone-300">Grand Total</span>
            <span className="text-amber-400 text-base">{formatPrice(cartTotals.total, currency)}</span>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white font-extrabold text-sm tracking-wide shadow-xl glow-orange flex items-center justify-center gap-2 active:scale-95 transition-all disabled:opacity-50"
          >
            {isSubmitting ? 'Confirming Order...' : 'Confirm & Place Order'}
          </button>
        </form>
      </div>
    </div>
  );
};

// --- Component: OrderConfirmationModal ---
const OrderConfirmationModal = () => {
  const { confirmedOrder, setConfirmedOrder } = useFood();

  if (!confirmedOrder) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in zoom-in-95 duration-200 select-none">
      <div className="relative w-full max-w-md max-h-[90vh] glass-panel rounded-3xl border border-white/20 p-6 flex flex-col justify-between overflow-y-auto no-scrollbar shadow-2xl bg-[#171412]/95">
        <button
          onClick={() => setConfirmedOrder(null)}
          className="absolute top-5 right-5 w-8 h-8 rounded-full glass-pill flex items-center justify-center text-stone-400 hover:text-white"
        >
          <XIcon className="w-4 h-4" />
        </button>

        <div className="space-y-5 text-center pt-2">
          <div className="mx-auto w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-500/60 flex items-center justify-center text-emerald-400 shadow-lg shadow-emerald-500/20 animate-bounce">
            <CheckCircle2Icon className="w-8 h-8" />
          </div>

          <div>
            <h2 className="text-xl font-black text-white tracking-tight">Order Confirmed!</h2>
            <p className="text-xs text-stone-400 mt-1">
              Your gourmet food is being prepared with love and fire.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="glass-card rounded-2xl p-3 border border-white/10 text-left">
              <span className="text-[10px] text-stone-400 font-semibold uppercase tracking-wider block">Tracking ID</span>
              <span className="text-sm font-extrabold text-amber-400 font-mono mt-0.5 block">#{confirmedOrder.id}</span>
            </div>
            <div className="glass-card rounded-2xl p-3 border border-white/10 text-left">
              <span className="text-[10px] text-stone-400 font-semibold uppercase tracking-wider block">Est. Delivery</span>
              <span className="text-sm font-extrabold text-emerald-400 flex items-center gap-1 mt-0.5">
                <ClockIcon className="w-3.5 h-3.5" /> {confirmedOrder.estimatedDeliveryMinutes} mins
              </span>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-4 border border-white/10 text-left space-y-2 text-xs text-stone-300">
            <div className="flex justify-between border-b border-white/10 pb-2">
              <span className="text-stone-400">Recipient</span>
              <span className="font-semibold text-white">{confirmedOrder.customer?.fullName}</span>
            </div>
            <div className="flex justify-between border-b border-white/10 pb-2">
              <span className="text-stone-400">Address</span>
              <span className="font-semibold text-white truncate max-w-[200px]">{confirmedOrder.customer?.deliveryAddress}</span>
            </div>
            <div className="flex justify-between pt-1 font-bold text-sm">
              <span className="text-white">Total Paid</span>
              <span className="text-amber-400">{formatPrice(confirmedOrder.total, confirmedOrder.currency)}</span>
            </div>
          </div>

          <button
            onClick={() => setConfirmedOrder(null)}
            className="w-full py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white font-extrabold text-xs tracking-wide shadow-lg glow-orange"
          >
            Back to Delicious Menu
          </button>
        </div>
      </div>
    </div>
  );
};

// --- Component: AdminMenuModal ---
const AdminMenuModal = () => {
  const {
    isAdminOpen,
    setIsAdminOpen,
    menuItems,
    updateMenuItem,
    addMenuItem,
    resetMenu,
    currency,
  } = useFood();

  const [editingItem, setEditingItem] = useState(null);
  const [formTitle, setFormTitle] = useState('');
  const [formCategory, setFormCategory] = useState('burger');
  const [formDescription, setFormDescription] = useState('');
  const [formPriceUSD, setFormPriceUSD] = useState('6.49');
  const [formPricePKR, setFormPricePKR] = useState('450');
  const [formImageUrl, setFormImageUrl] = useState('');

  if (!isAdminOpen) return null;

  const startEdit = (item) => {
    setEditingItem(item);
    setFormTitle(item.title);
    setFormCategory(item.category);
    setFormDescription(item.description);
    setFormPriceUSD(item.basePriceUSD.toString());
    setFormPricePKR(item.basePricePKR.toString());
    setFormImageUrl(item.imageUrl);
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (!formTitle.trim()) return;

    if (editingItem) {
      updateMenuItem({
        ...editingItem,
        title: formTitle,
        category: formCategory,
        description: formDescription,
        basePriceUSD: parseFloat(formPriceUSD) || 5.99,
        basePricePKR: parseFloat(formPricePKR) || 400,
        imageUrl: formImageUrl || editingItem.imageUrl,
      });
      setEditingItem(null);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200 select-none">
      <div className="relative w-full max-w-2xl max-h-[90vh] glass-panel rounded-3xl border border-white/20 p-6 flex flex-col justify-between overflow-y-auto no-scrollbar shadow-2xl bg-[#171412]/95 text-xs text-white">
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <Settings2Icon className="w-5 h-5 text-amber-400" />
            <div>
              <h2 className="text-base font-bold text-white">Admin Menu Manager</h2>
              <p className="text-[11px] text-stone-400">Edit food pricing, names, and images</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={resetMenu}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl glass-pill text-stone-300 hover:text-white hover:bg-white/10"
              title="Reset menu to default"
            >
              <RotateCcwIcon className="w-3.5 h-3.5 text-amber-400" />
              <span>Reset</span>
            </button>
            <button
              onClick={() => setIsAdminOpen(false)}
              className="w-8 h-8 rounded-full glass-pill flex items-center justify-center text-stone-400 hover:text-white"
            >
              <XIcon className="w-4 h-4" />
            </button>
          </div>
        </div>

        {editingItem ? (
          <form onSubmit={handleSave} className="py-4 space-y-3">
            <h3 className="font-bold text-amber-400">Editing: {editingItem.title}</h3>
            <div>
              <label className="block text-stone-400 mb-1">Item Title</label>
              <input
                type="text"
                value={formTitle}
                onChange={(e) => setFormTitle(e.target.value)}
                className="w-full px-3 py-2 rounded-xl glass-card text-stone-100 border border-white/10 focus:outline-none focus:ring-1 focus:ring-amber-500"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-stone-400 mb-1">Price ($ USD)</label>
                <input
                  type="number"
                  step="0.01"
                  value={formPriceUSD}
                  onChange={(e) => setFormPriceUSD(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl glass-card text-stone-100 border border-white/10 focus:outline-none focus:ring-1 focus:ring-amber-500"
                />
              </div>
              <div>
                <label className="block text-stone-400 mb-1">Price (Rs. PKR)</label>
                <input
                  type="number"
                  value={formPricePKR}
                  onChange={(e) => setFormPricePKR(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl glass-card text-stone-100 border border-white/10 focus:outline-none focus:ring-1 focus:ring-amber-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-stone-400 mb-1">Image URL</label>
              <input
                type="text"
                value={formImageUrl}
                onChange={(e) => setFormImageUrl(e.target.value)}
                className="w-full px-3 py-2 rounded-xl glass-card text-stone-100 border border-white/10 focus:outline-none focus:ring-1 focus:ring-amber-500"
              />
            </div>
            <div>
              <label className="block text-stone-400 mb-1">Description</label>
              <textarea
                rows="2"
                value={formDescription}
                onChange={(e) => setFormDescription(e.target.value)}
                className="w-full px-3 py-2 rounded-xl glass-card text-stone-100 border border-white/10 focus:outline-none focus:ring-1 focus:ring-amber-500"
              />
            </div>
            <div className="flex gap-2 pt-2">
              <button
                type="submit"
                className="px-4 py-2 rounded-xl bg-amber-500 text-white font-bold"
              >
                Save Changes
              </button>
              <button
                type="button"
                onClick={() => setEditingItem(null)}
                className="px-4 py-2 rounded-xl glass-pill text-stone-400"
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <div className="py-4 space-y-2 max-h-[60vh] overflow-y-auto no-scrollbar">
            {menuItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-3 rounded-2xl glass-card border border-white/5">
                <div className="flex items-center gap-3">
                  <img src={item.imageUrl} alt={item.title} className="w-12 h-12 rounded-xl object-cover" />
                  <div>
                    <h4 className="font-bold text-white text-sm">{item.title}</h4>
                    <span className="text-amber-400 font-semibold">{formatPrice(currency === 'PKR' ? item.basePricePKR : item.basePriceUSD, currency)}</span>
                  </div>
                </div>
                <button
                  onClick={() => startEdit(item)}
                  className="px-3 py-1.5 rounded-xl glass-pill hover:bg-white/10 text-stone-300 flex items-center gap-1.5"
                >
                  <Edit2Icon className="w-3.5 h-3.5 text-amber-400" />
                  <span>Edit</span>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// --- Component: OffersView ---
const OffersView = () => {
  const { menuItems, openCustomizer } = useFood();

  const offers = [
    {
      id: 'offer-1',
      title: 'Mega Deal 20% OFF',
      subtitle: 'Spicy Burger Combo with crispy fries and chilled beverage.',
      discount: '20% OFF',
      code: 'SPICY20',
      foodItem: menuItems.find((i) => i.id === 'spicy-burger-combo') || menuItems[0],
      expires: 'Ends Midnight',
    },
    {
      id: 'offer-2',
      title: 'Late Night Cheesy Feast',
      subtitle: 'Double Mozzarella on artisan hand-tossed pepperoni pizza.',
      discount: 'FREE DIP',
      code: 'CHEEZ50',
      foodItem: menuItems.find((i) => i.id === 'firehouse-pepperoni-pizza') || menuItems[1],
      expires: 'Today Only',
    },
    {
      id: 'offer-3',
      title: 'Free Delivery Weekend',
      subtitle: 'On all orders above Rs. 1000 or $15 with EasyPaisa/JazzCash.',
      discount: 'FREE SHIP',
      code: 'DELIV0',
      foodItem: menuItems.find((i) => i.id === 'double-beef-burger') || menuItems[2],
      expires: 'Sunday 11:59 PM',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-white space-y-6">
      <div>
        <h2 className="text-2xl font-black text-white flex items-center gap-2">
          <span>Exclusive Offers & Deals</span>
          <span className="text-amber-400">🔥</span>
        </h2>
        <p className="text-xs text-stone-400 mt-1">Special coupons & bundle packages crafted for you</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {offers.map((deal) => (
          <div
            key={deal.id}
            onClick={() => openCustomizer(deal.foodItem)}
            className="rounded-3xl glass-card p-5 border border-white/10 hover:border-amber-500/50 transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 rounded-full text-[10px] font-extrabold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  {deal.discount}
                </span>
                <span className="text-[10px] text-stone-400 flex items-center gap-1">
                  <ClockIcon className="w-3 h-3" /> {deal.expires}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                {deal.title}
              </h3>
              <p className="text-xs text-stone-300 mt-2 line-clamp-2 leading-relaxed">
                {deal.subtitle}
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-amber-400 glass-pill px-2.5 py-1 rounded-lg">
                {deal.code}
              </span>
              <button className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold flex items-center gap-1 shadow-md">
                <span>Claim Deal</span>
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- Component: FavoritesView ---
const FavoritesView = () => {
  const { menuItems, favorites, toggleFavorite, openCustomizer, currency } = useFood();
  const favItems = menuItems.filter((i) => favorites.includes(i.id));

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 text-white space-y-6">
      <div>
        <h2 className="text-2xl font-black text-white flex items-center gap-2">
          <span>Favorites</span>
          <HeartIcon className="w-5 h-5 text-red-500 fill-red-500" />
        </h2>
        <p className="text-xs text-stone-400 mt-1">Your hand-picked gourmet selections</p>
      </div>

      {favItems.length === 0 ? (
        <div className="text-center py-16 space-y-3 glass-card rounded-3xl p-8 border border-white/10">
          <HeartIcon className="w-12 h-12 text-stone-600 mx-auto" />
          <p className="text-stone-300 font-bold text-base">No favorites saved yet</p>
          <p className="text-xs text-stone-500 max-w-sm mx-auto">
            Tap the heart icon on any mouthwatering burger, fries or pizza to save it here!
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {favItems.map((item) => (
            <div
              key={item.id}
              onClick={() => openCustomizer(item)}
              className="relative rounded-3xl glass-card p-4 flex flex-col justify-between cursor-pointer border border-white/10 hover:border-amber-500/50 hover:-translate-y-1 transition-all group shadow-xl"
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFavorite(item.id);
                }}
                className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full glass-pill flex items-center justify-center text-red-500 fill-red-500 shadow-md"
              >
                <HeartIcon className="w-4 h-4 fill-red-500" />
              </button>

              <div className="w-full h-44 rounded-2xl overflow-hidden my-1">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="mt-3">
                <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-stone-400 mt-1 line-clamp-2">{item.description}</p>
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                  <span className="text-base font-extrabold text-amber-400">
                    {formatPrice(currency === 'PKR' ? item.basePricePKR : item.basePriceUSD, currency)}
                  </span>
                  <button className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold flex items-center gap-1 shadow-md">
                    <span>Order</span>
                    <ArrowRightIcon className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// --- Component: WebsiteView (Main Homepage Content) ---
const WebsiteView = () => {
  const {
    menuItems,
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    favorites,
    toggleFavorite,
    openCustomizer,
    currency,
    addToCart,
  } = useFood();

  const categories = [
    { id: 'burger', label: 'Burger' },
    { id: 'pizza', label: 'Pizza' },
    { id: 'chicken', label: 'Chicken' },
    { id: 'fries', label: 'Fries' },
    { id: 'drink', label: 'Drink' },
  ];

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory =
      selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const popularItems = filteredItems.filter((i) => i.isPopular);
  const displayPopular = popularItems.length > 0 ? popularItems : filteredItems.slice(0, 3);
  const promoItem = menuItems.find((i) => i.id === 'spicy-burger-combo') || menuItems[0];

  const handleQuickAdd = (e, item) => {
    e.stopPropagation();
    const defaultSize = item.sizes[0];
    const defaultAddOns = item.addOns?.filter((a) => a.defaultChecked) || [];
    addToCart(item, defaultSize, defaultAddOns, 1);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-white space-y-10">
      {/* Hero & Greeting Section */}
      <div className="flex flex-col lg:flex-row items-stretch justify-between gap-6">
        {/* Left: Welcome & Search */}
        <div className="flex-1 flex flex-col justify-between py-2 space-y-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold glass-pill text-amber-300 border border-amber-500/30 mb-3 shadow-md">
              <span>Hi, Alex</span>
              <span>👋</span>
              <span className="text-stone-400">| Ready for a delicious meal?</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-white">
              Good Food, <br />
              <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200 bg-clip-text text-transparent">
                Good Mood!
              </span>
            </h1>

            <p className="text-sm sm:text-base text-stone-300 max-w-lg mt-3 leading-relaxed">
              Order gourmet flame-grilled burgers, crispy spicy chicken, and stone-baked artisan pizzas
              with real-time customization and fast doorstep delivery.
            </p>
          </div>

          {/* Search Box on Website */}
          <div className="relative max-w-xl pt-2">
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search your favorite burger, pizza, fries, or drink..."
              className="w-full pl-12 pr-12 py-4 rounded-2xl glass-card text-sm text-stone-100 placeholder-stone-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-amber-500/50 shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-white glass-pill px-2 py-1 rounded-lg"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Right: Promotional Banner */}
        <div className="w-full lg:w-[480px] rounded-3xl glass-card border border-white/15 p-6 relative overflow-hidden bg-gradient-to-br from-[#382b22]/80 via-[#261f1c]/90 to-[#181412] shadow-2xl flex flex-col justify-between">
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-orange-500/25 rounded-full blur-3xl pointer-events-none" />

          <div className="flex items-start justify-between gap-3 relative z-10">
            <div className="flex-1 pr-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 mb-3">
                <FlameIcon className="w-3.5 h-3.5 text-amber-400 fill-amber-400" /> Limited Time Offer
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                Spicy Burger <br />
                <span className="text-stone-200">Combo Deal</span>
              </h2>

              <p className="text-xs text-stone-300 mt-2 line-clamp-2">
                Spicy Chicken Burger + Crispy Fries + Ice Cold Drink bundle.
              </p>

              <div className="mt-5 flex items-center gap-3">
                <button
                  onClick={() => openCustomizer(promoItem)}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white text-xs font-bold tracking-wide shadow-lg glow-orange transition-transform active:scale-95 flex items-center gap-2"
                >
                  <span>Order Now</span>
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </button>
                <div className="flex flex-col items-center justify-center w-12 h-12 rounded-full glass-card border border-white/20 text-center leading-tight shadow-lg">
                  <span className="text-xs font-extrabold text-amber-300">20%</span>
                  <span className="text-[8px] font-bold text-stone-300 uppercase tracking-tighter">OFF</span>
                </div>
              </div>
            </div>

            <div
              className="relative w-40 h-36 flex-shrink-0 cursor-pointer group"
              onClick={() => openCustomizer(promoItem)}
            >
              <img
                src={promoItem.imageUrl}
                alt={promoItem.title}
                className="w-full h-full object-cover rounded-2xl drop-shadow-[0_12px_25px_rgba(0,0,0,0.7)] group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Categories Interactive Bar */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-white tracking-tight">Browse Categories</h2>
          <button
            onClick={() => setSelectedCategory('all')}
            className={`text-xs font-semibold px-3 py-1.5 rounded-xl transition-all ${
              selectedCategory === 'all'
                ? 'bg-amber-500 text-white shadow-md'
                : 'text-stone-400 hover:text-white glass-pill'
            }`}
          >
            All Categories
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-3 py-3.5 px-4 rounded-2xl transition-all duration-300 text-left ${
                  isSelected
                    ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg glow-orange scale-[1.02]'
                    : 'glass-card text-stone-400 hover:text-white hover:bg-stone-800/50 border border-white/10'
                }`}
              >
                <CategoryIcon category={cat.id} isSelected={isSelected} className="w-7 h-7 flex-shrink-0" />
                <div className="min-w-0">
                  <span className="block text-sm font-bold truncate leading-tight">
                    {cat.label}
                  </span>
                  <span className="text-[10px] opacity-75">
                    {menuItems.filter((i) => i.category === cat.id).length} items
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Popular Now Section */}
      {selectedCategory === 'all' && searchQuery === '' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold text-white tracking-tight">Popular Now</h2>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                Top Rated
              </span>
            </div>
            <span className="text-xs text-stone-400">Customer Favorites</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {displayPopular.map((item) => {
              const isFav = favorites.includes(item.id);
              const currentPrice = currency === 'PKR' ? item.basePricePKR : item.basePriceUSD;

              return (
                <div
                  key={item.id}
                  onClick={() => openCustomizer(item)}
                  className="relative rounded-3xl glass-card p-4 flex flex-col justify-between cursor-pointer border border-white/10 hover:border-amber-500/50 hover:-translate-y-1 transition-all duration-300 group shadow-xl"
                >
                  {item.isSpicy && (
                    <span className="absolute top-4 left-4 z-10 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-red-500/80 text-white backdrop-blur-md shadow-md">
                      Spicy
                    </span>
                  )}

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(item.id);
                    }}
                    className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full glass-pill flex items-center justify-center transition-transform active:scale-90"
                  >
                    <HeartIcon className={`w-4 h-4 transition-colors ${isFav ? 'text-red-500 fill-red-500' : 'text-stone-300'}`} />
                  </button>

                  <div className="w-full h-44 rounded-2xl overflow-hidden my-1 flex items-center justify-center">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-2xl group-hover:scale-108 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>

                  <div className="mt-3 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-xs text-stone-400 mb-1">
                        <span className="flex items-center gap-1 text-amber-400 font-bold">
                          <StarIcon className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                          {item.rating} ({item.reviewsCount})
                        </span>
                        <span className="capitalize">{item.category}</span>
                      </div>

                      <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-1">
                        {item.title}
                      </h3>

                      <p className="text-xs text-stone-400 mt-1 line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-stone-400 block">From</span>
                        <span className="text-base font-extrabold text-amber-400">
                          {formatPrice(currentPrice, currency)}
                        </span>
                      </div>

                      <button
                        onClick={(e) => handleQuickAdd(e, item)}
                        className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white text-xs font-bold flex items-center gap-1.5 shadow-md glow-orange-subtle active:scale-95 transition-transform"
                      >
                        <PlusIcon className="w-3.5 h-3.5 stroke-[2.5]" />
                        <span>Add</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Complete Food Catalog Grid */}
      <div className="space-y-4 pt-2 pb-12">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white tracking-tight">
            {selectedCategory === 'all'
              ? 'Complete Gourmet Menu'
              : `${categories.find((c) => c.id === selectedCategory)?.label || ''} Delicacies`}
          </h2>
          <span className="text-xs text-stone-400">{filteredItems.length} items available</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filteredItems.map((item) => {
            const isFav = favorites.includes(item.id);
            const currentPrice = currency === 'PKR' ? item.basePricePKR : item.basePriceUSD;

            return (
              <div
                key={item.id}
                onClick={() => openCustomizer(item)}
                className="relative rounded-3xl glass-card p-4 flex flex-col justify-between cursor-pointer border border-white/10 hover:border-amber-500/50 hover:-translate-y-1 transition-all duration-300 group shadow-xl"
              >
                {item.isSpicy && (
                  <span className="absolute top-4 left-4 z-10 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-red-500/80 text-white backdrop-blur-md shadow-md">
                    Spicy
                  </span>
                )}

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(item.id);
                  }}
                  className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full glass-pill flex items-center justify-center transition-transform active:scale-90"
                >
                  <HeartIcon className={`w-4 h-4 transition-colors ${isFav ? 'text-red-500 fill-red-500' : 'text-stone-300'}`} />
                </button>

                <div className="w-full h-44 rounded-2xl overflow-hidden my-1 flex items-center justify-center">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-2xl group-hover:scale-108 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                <div className="mt-3 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-stone-400 mb-1">
                      <span className="flex items-center gap-1 text-amber-400 font-bold">
                        <StarIcon className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        {item.rating} ({item.reviewsCount})
                      </span>
                      <span className="capitalize">{item.category}</span>
                    </div>

                    <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-1">
                      {item.title}
                    </h3>

                    <p className="text-xs text-stone-400 mt-1 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-stone-400 block">From</span>
                      <span className="text-base font-extrabold text-amber-400">
                        {formatPrice(currentPrice, currency)}
                      </span>
                    </div>

                    <button
                      onClick={(e) => handleQuickAdd(e, item)}
                      className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white text-xs font-bold flex items-center gap-1.5 shadow-md glow-orange-subtle active:scale-95 transition-transform"
                    >
                      <PlusIcon className="w-3.5 h-3.5 stroke-[2.5]" />
                      <span>Add</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// --- Component: MainApp ---
const MainApp = () => {
  const {
    currency,
    setCurrency,
    activeTab,
    setActiveTab,
    customizingItem,
    closeCustomizer,
    setIsCartOpen,
    totalCartItemCount,
    favorites,
    setIsAdminOpen,
  } = useFood();

  return (
    <div className="min-h-screen text-stone-100 flex flex-col font-sans selection:bg-amber-500 selection:text-white bg-transparent">
      {/* Top Website Header */}
      <header className="sticky top-0 z-40 w-full glass-panel border-b border-white/10 px-4 sm:px-6 lg:px-8 py-3.5 bg-[#14110f]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Logo / Brand */}
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => setActiveTab('home')}
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg glow-orange text-white font-black text-lg flex-shrink-0">
              <UtensilsCrossed className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-base sm:text-lg tracking-tight bg-gradient-to-r from-white via-amber-100 to-amber-400 bg-clip-text text-transparent">
                  Food Place
                </span>
                <span className="px-2 py-0.5 rounded-full text-[9px] font-extrabold bg-amber-500/20 text-amber-300 border border-amber-500/30 hidden sm:inline-block">
                  Restaurant
                </span>
              </div>
              <p className="text-[10px] text-stone-400 hidden sm:block">
                Premium Dark Mode Food Ordering & Gourmet Meals
              </p>
            </div>
          </div>

          {/* Website Navigation Links */}
          <nav className="hidden md:flex items-center glass-pill rounded-2xl p-1 gap-1 border border-white/10">
            <button
              onClick={() => setActiveTab('home')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'home'
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md glow-orange-subtle'
                  : 'text-stone-400 hover:text-white'
              }`}
            >
              <MenuIcon className="w-3.5 h-3.5" />
              <span>Menu</span>
            </button>

            <button
              onClick={() => setActiveTab('offers')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'offers'
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md glow-orange-subtle'
                  : 'text-stone-400 hover:text-white'
              }`}
            >
              <TagIcon className="w-3.5 h-3.5" />
              <span>Offers & Deals</span>
            </button>

            <button
              onClick={() => setActiveTab('favorite')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'favorite'
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md glow-orange-subtle'
                  : 'text-stone-400 hover:text-white'
              }`}
            >
              <HeartIcon className="w-3.5 h-3.5" />
              <span>Favorites</span>
              {favorites.length > 0 && (
                <span className="px-1.5 py-0.2 rounded-full bg-amber-500/30 text-amber-300 text-[10px]">
                  {favorites.length}
                </span>
              )}
            </button>
          </nav>

          {/* Right Tools: Currency Toggle, Admin Menu, Cart Button */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Currency toggle */}
            <div className="flex items-center glass-pill rounded-xl p-0.5 border border-white/10 text-[11px] font-bold">
              <button
                onClick={() => setCurrency('USD')}
                className={`px-2.5 py-1 rounded-lg transition-colors ${
                  currency === 'USD'
                    ? 'bg-amber-500 text-white shadow-sm'
                    : 'text-stone-400 hover:text-white'
                }`}
              >
                $ USD
              </button>
              <button
                onClick={() => setCurrency('PKR')}
                className={`px-2.5 py-1 rounded-lg transition-colors ${
                  currency === 'PKR'
                    ? 'bg-amber-500 text-white shadow-sm'
                    : 'text-stone-400 hover:text-white'
                }`}
              >
                Rs. PKR
              </button>
            </div>

            {/* Admin Manager */}
            <button
              onClick={() => setIsAdminOpen(true)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl glass-card hover:bg-white/10 text-xs font-semibold text-stone-200 transition-colors border border-white/10"
              title="Admin Menu Manager"
            >
              <Settings2Icon className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline">Admin</span>
            </button>

            {/* Cart Trigger */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white text-xs font-extrabold shadow-lg glow-orange transition-transform active:scale-95"
            >
              <ShoppingBagIcon className="w-4 h-4" />
              <span className="hidden sm:inline">Cart</span>
              <span className="bg-white/25 px-1.5 py-0.5 rounded-md text-[10px]">
                {totalCartItemCount}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Bar */}
        <div className="flex md:hidden items-center justify-around pt-3 mt-2 border-t border-white/5 text-xs">
          <button
            onClick={() => setActiveTab('home')}
            className={`py-1 px-3 rounded-lg font-bold ${
              activeTab === 'home' ? 'text-amber-400 bg-white/5' : 'text-stone-400'
            }`}
          >
            Menu
          </button>
          <button
            onClick={() => setActiveTab('offers')}
            className={`py-1 px-3 rounded-lg font-bold ${
              activeTab === 'offers' ? 'text-amber-400 bg-white/5' : 'text-stone-400'
            }`}
          >
            Offers & Deals
          </button>
          <button
            onClick={() => setActiveTab('favorite')}
            className={`py-1 px-3 rounded-lg font-bold ${
              activeTab === 'favorite' ? 'text-amber-400 bg-white/5' : 'text-stone-400'
            }`}
          >
            Favorites ({favorites.length})
          </button>
        </div>
      </header>

      {/* Main Website Surface */}
      <main className="flex-1 relative overflow-x-hidden min-h-[140vh]">
        {/* Render Tab Content */}
        <div className="relative z-10">
          {activeTab === 'home' && <WebsiteView />}
          {activeTab === 'offers' && <OffersView />}
          {activeTab === 'favorite' && <FavoritesView />}
        </div>

        {/* Customization Modal */}
        {customizingItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200 select-none"
            onClick={closeCustomizer}
          >
            <div
              className="relative w-full max-w-md h-[92vh] max-h-[820px] rounded-[36px] overflow-hidden glass-panel border border-white/20 shadow-2xl bg-[#14110f]"
              onClick={(e) => e.stopPropagation()}
            >
              <CustomizationModal item={customizingItem} onClose={closeCustomizer} />
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="w-full glass-panel border-t border-white/10 py-6 px-4 text-center text-xs text-stone-500 mt-12 bg-[#100d0c]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-stone-200">Food Place</span>
            <span>•</span>
            <span>Gourmet Dark Glassmorphism Food Ordering</span>
          </div>
          <div className="flex items-center gap-4 text-stone-400 text-xs">
            <span>EasyPaisa & JazzCash Supported</span>
            <span>•</span>
            <span>Fast 30 Min Delivery</span>
          </div>
        </div>
      </footer>

      {/* Global Modals & Drawers */}
      <CartDrawer />
      <CheckoutModal />
      <OrderConfirmationModal />
      <AdminMenuModal />
    </div>
  );
};

// Root Component
const App = () => {
  return (
    <FoodProvider>
      <MainApp />
    </FoodProvider>
  );
};

// Mount Application
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}
