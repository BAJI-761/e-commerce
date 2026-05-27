const MACRAME_PRODUCTS = [
    {
        id: 1,
        name: "Luna Boho Wall Hanging",
        price: 129.99,
        originalPrice: 159.99,
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=500&fit=crop&q=80",
        images: [
            "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=500&fit=crop&q=80",
            "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=500&fit=crop&q=80"
        ],
        description: "Handwoven crescent moon design with natural cotton cord",
        longDescription: "This stunning wall hanging features intricate macrame knots in a crescent moon pattern. Made with 100% natural cotton cord and finished with wooden beads.",
        category: "Wall Hangings",
        dimensions: "24\" W x 36\" H",
        materials: "Natural cotton cord, wooden beads",
        rating: 4.8,
        reviews: 124,
        inStock: true,
        stockCount: 15,
        featured: true,
        tags: ["bestseller", "eco-friendly", "boho", "handmade"]
    },
    {
        id: 2,
        name: "Cascade Plant Hanger",
        price: 68.99,
        image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop&q=80",
        images: [
            "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop&q=80"
        ],
        description: "Three-tier hanging planter with adjustable lengths",
        longDescription: "Perfect for creating a green corner in your home. This plant hanger accommodates pots up to 8 inches in diameter.",
        category: "Plant Hangers",
        dimensions: "40\" total length",
        materials: "Jute rope",
        rating: 4.9,
        reviews: 89,
        inStock: true,
        stockCount: 8,
        featured: false,
        tags: ["new-arrival", "plants", "eco-friendly"]
    },
    {
        id: 3,
        name: "Bohemian Door Curtain",
        price: 189.99,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop&q=80",
        images: [
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop&q=80"
        ],
        description: "Intricate doorway curtain with geometric patterns",
        longDescription: "Transform any doorway with this beautiful macrame curtain featuring complex geometric patterns and natural fringe.",
        category: "Curtains",
        dimensions: "36\" W x 72\" H",
        materials: "Cotton rope",
        rating: 4.7,
        reviews: 56,
        inStock: true,
        stockCount: 5,
        featured: true,
        tags: ["limited-edition", "boho", "geometric"]
    },
    {
        id: 4,
        name: "Mini Gallery Set",
        price: 45.99,
        originalPrice: 65.99,
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=500&fit=crop&q=80",
        images: [
            "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=500&fit=crop&q=80"
        ],
        description: "Set of 4 small wall pieces perfect for gallery walls",
        longDescription: "Create a stunning gallery wall with this set of four coordinating mini macrame pieces in different patterns.",
        category: "Wall Hangings",
        dimensions: "Each piece: 6\" W x 8\" H",
        materials: "Natural cotton cord",
        rating: 4.6,
        reviews: 203,
        inStock: true,
        stockCount: 12,
        featured: false,
        tags: ["sale", "bundle", "gallery-wall"]
    },
    {
        id: 5,
        name: "Zen Garden Hanger",
        price: 39.99,
        image: "https://images.unsplash.com/photo-1493798773255-ba0df1331c83?w=500&h=500&fit=crop&q=80",
        images: [
            "https://images.unsplash.com/photo-1493798773255-ba0df1331c83?w=500&h=500&fit=crop&q=80"
        ],
        description: "Minimalist design perfect for succulents and herbs",
        longDescription: "Clean lines and simple knots make this hanger perfect for modern spaces and small plants.",
        category: "Plant Hangers",
        dimensions: "24\" total length",
        materials: "Natural jute",
        rating: 4.8,
        reviews: 167,
        inStock: false,
        stockCount: 0,
        featured: false,
        tags: ["minimalist", "modern", "small-plants"]
    },
    {
        id: 6,
        name: "Sunburst Mirror Frame",
        price: 149.99,
        image: "https://images.unsplash.com/photo-1586769852044-692d6df3490f?w=500&h=500&fit=crop&q=80",
        images: [
            "https://images.unsplash.com/photo-1586769852044-692d6df3490f?w=500&h=500&fit=crop&q=80"
        ],
        description: "Radial design mirror frame with golden accents",
        longDescription: "This stunning mirror features a sunburst macrame frame with metallic gold cord accents. Includes 12-inch round mirror.",
        category: "Mirrors",
        dimensions: "24\" diameter",
        materials: "Cotton cord, gold metallic thread, glass mirror",
        rating: 4.9,
        reviews: 78,
        inStock: true,
        stockCount: 6,
        featured: true,
        tags: ["luxury", "handmade", "mirror", "gold"]
    },
    {
        id: 7,
        name: "Macrame Tote Bag",
        price: 55.99,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop&q=80",
        images: [
            "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop&q=80"
        ],
        description: "Handwoven shopping bag with cotton handles",
        longDescription: "Eco-friendly alternative to plastic bags. Features strong cotton handles and expandable macrame body.",
        category: "Bags",
        dimensions: "14\" W x 16\" H",
        materials: "Cotton cord, cotton handles",
        rating: 4.7,
        reviews: 92,
        inStock: true,
        stockCount: 20,
        featured: false,
        tags: ["eco-friendly", "shopping", "sustainable", "cotton"]
    },
    {
        id: 8,
        name: "Boho Keychain Set",
        price: 12.99,
        image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=500&h=500&fit=crop&q=80",
        images: [
            "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=500&h=500&fit=crop&q=80"
        ],
        description: "Set of 3 mini macrame keychains with tassels",
        longDescription: "Perfect gift set featuring three different macrame patterns with colorful tassels and metal key rings.",
        category: "Keychains",
        dimensions: "Each: 2\" W x 4\" H",
        materials: "Cotton thread, metal rings",
        rating: 4.5,
        reviews: 156,
        inStock: true,
        stockCount: 35,
        featured: false,
        tags: ["gift", "mini", "colorful", "set"]
    }
];

const getProducts = () => MACRAME_PRODUCTS;
const getProductById = (id) => MACRAME_PRODUCTS.find(product => product.id === id);
const getProductsByCategory = (category) => 
    MACRAME_PRODUCTS.filter(product => product.category === category);
const getFeaturedProducts = () => MACRAME_PRODUCTS.filter(product => product.featured);
const getProductsByTag = (tag) => MACRAME_PRODUCTS.filter(product => 
    product.tags && product.tags.includes(tag));
const searchProducts = (query) => MACRAME_PRODUCTS.filter(product =>
    product.name.toLowerCase().includes(query.toLowerCase()) ||
    product.description.toLowerCase().includes(query.toLowerCase()) ||
    product.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
);
