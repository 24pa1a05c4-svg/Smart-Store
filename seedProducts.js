const mongoose = require("mongoose");
const dotenv = require("dotenv");

const Product = require("./models/Product");
const Cart=require("./models/Cart");
dotenv.config();


// =====================================================
// 160 PRODUCT SEED DATA
// =====================================================

const products = [

    // =================================================
    // LAPTOPS - 32 PRODUCTS
    // =================================================

    {
        name: "Dell Inspiron 15 13th Gen",
        description: "Powerful everyday laptop with Intel Core i5 processor.",
        category: "Laptops",
        brand: "Dell",
        price: 65000,
        originalPrice: 72000,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
        rating: 4.6,
        stock: 15,
        seller: "Smart Store",
        userId: "ADMIN001"
    },

    {
        name: "HP Pavilion 15",
        description: "Premium laptop suitable for students and professionals.",
        category: "Laptops",
        brand: "HP",
        price: 58000,
        originalPrice: 65000,
        image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed",
        rating: 4.5,
        stock: 12,
        seller: "Smart Store",
        userId: "ADMIN001"
    },

    {
        name: "Lenovo IdeaPad Slim 5",
        description: "Slim and lightweight laptop with excellent performance.",
        category: "Laptops",
        brand: "Lenovo",
        price: 54000,
        originalPrice: 60000,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
        rating: 4.4,
        stock: 20,
        seller: "Tech World",
        userId: "SELLER002"
    },

    {
        name: "ASUS VivoBook 15",
        description: "Stylish laptop with powerful performance for daily work.",
        category: "Laptops",
        brand: "ASUS",
        price: 52000,
        originalPrice: 59000,
        image: "https://images.unsplash.com/photo-1602080858428-57174f9431cf",
        rating: 4.5,
        stock: 18,
        seller: "Tech World",
        userId: "SELLER002"
    },

    {
        name: "Acer Aspire 5",
        description: "Reliable laptop for students and office users.",
        category: "Laptops",
        brand: "Acer",
        price: 48000,
        originalPrice: 55000,
        image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef",
        rating: 4.3,
        stock: 22,
        seller: "Laptop Hub",
        userId: "SELLER007"
    },

    {
        name: "Apple MacBook Air M2",
        description: "Thin and powerful laptop powered by Apple M2 chip.",
        category: "Laptops",
        brand: "Apple",
        price: 89999,
        originalPrice: 99999,
        image: "https://images.unsplash.com/photo-1517336714739-489689fd1ca8",
        rating: 4.9,
        stock: 10,
        seller: "Apple Hub",
        userId: "SELLER003"
    },

    {
        name: "Apple MacBook Air M3",
        description: "Next-generation MacBook Air with Apple M3 performance.",
        category: "Laptops",
        brand: "Apple",
        price: 109999,
        originalPrice: 119999,
        image: "https://images.unsplash.com/photo-1517336714739-489689fd1ca8",
        rating: 4.9,
        stock: 8,
        seller: "Apple Hub",
        userId: "SELLER003"
    },

    {
        name: "HP Victus Gaming Laptop",
        description: "Gaming laptop with powerful graphics and fast display.",
        category: "Laptops",
        brand: "HP",
        price: 78000,
        originalPrice: 90000,
        image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6",
        rating: 4.7,
        stock: 11,
        seller: "Gaming Zone",
        userId: "SELLER005"
    },

    {
        name: "ASUS TUF Gaming F15",
        description: "Durable gaming laptop built for demanding games.",
        category: "Laptops",
        brand: "ASUS",
        price: 82000,
        originalPrice: 95000,
        image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302",
        rating: 4.7,
        stock: 9,
        seller: "Gaming Zone",
        userId: "SELLER005"
    },

    {
        name: "Lenovo Legion 5",
        description: "High-performance gaming laptop with powerful cooling.",
        category: "Laptops",
        brand: "Lenovo",
        price: 95000,
        originalPrice: 110000,
        image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45",
        rating: 4.8,
        stock: 7,
        seller: "Gaming Zone",
        userId: "SELLER005"
    },

    {
        name: "Dell XPS 13",
        description: "Premium compact laptop with stunning display.",
        category: "Laptops",
        brand: "Dell",
        price: 115000,
        originalPrice: 130000,
        image: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68",
        rating: 4.8,
        stock: 6,
        seller: "Dell Store",
        userId: "SELLER008"
    },

    {
        name: "HP Envy 14",
        description: "Premium productivity laptop with elegant design.",
        category: "Laptops",
        brand: "HP",
        price: 85000,
        originalPrice: 95000,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
        rating: 4.6,
        stock: 13,
        seller: "HP Store",
        userId: "SELLER009"
    },

    {
        name: "Acer Nitro V",
        description: "Gaming laptop designed for high-performance gaming.",
        category: "Laptops",
        brand: "Acer",
        price: 72000,
        originalPrice: 82000,
        image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302",
        rating: 4.6,
        stock: 14,
        seller: "Gaming Zone",
        userId: "SELLER005"
    },

    {
        name: "MSI Katana 15",
        description: "Powerful gaming laptop with dedicated graphics.",
        category: "Laptops",
        brand: "MSI",
        price: 88000,
        originalPrice: 99000,
        image: "https://images.unsplash.com/photo-1593642702749-b7d2a804fbcf",
        rating: 4.7,
        stock: 9,
        seller: "Gaming Zone",
        userId: "SELLER005"
    },

    {
        name: "Microsoft Surface Laptop 5",
        description: "Premium Windows laptop with touchscreen display.",
        category: "Laptops",
        brand: "Microsoft",
        price: 92000,
        originalPrice: 105000,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
        rating: 4.6,
        stock: 8,
        seller: "Tech World",
        userId: "SELLER002"
    },

    {
        name: "Samsung Galaxy Book 4",
        description: "Modern lightweight laptop for productivity.",
        category: "Laptops",
        brand: "Samsung",
        price: 76000,
        originalPrice: 85000,
        image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed",
        rating: 4.5,
        stock: 12,
        seller: "Smart Store",
        userId: "ADMIN001"
    },

    {
        name: "Lenovo ThinkPad E14",
        description: "Business laptop designed for professional productivity.",
        category: "Laptops",
        brand: "Lenovo",
        price: 69000,
        originalPrice: 78000,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
        rating: 4.6,
        stock: 17,
        seller: "Tech World",
        userId: "SELLER002"
    },

    {
        name: "Dell Latitude 14",
        description: "Business-class laptop with excellent reliability.",
        category: "Laptops",
        brand: "Dell",
        price: 73000,
        originalPrice: 82000,
        image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed",
        rating: 4.5,
        stock: 14,
        seller: "Dell Store",
        userId: "SELLER008"
    },

    {
        name: "HP 15s",
        description: "Affordable everyday laptop for work and study.",
        category: "Laptops",
        brand: "HP",
        price: 44000,
        originalPrice: 51000,
        image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef",
        rating: 4.2,
        stock: 25,
        seller: "HP Store",
        userId: "SELLER009"
    },

    {
        name: "ASUS ZenBook 14",
        description: "Ultra-thin premium laptop with excellent battery life.",
        category: "Laptops",
        brand: "ASUS",
        price: 88000,
        originalPrice: 99000,
        image: "https://images.unsplash.com/photo-1602080858428-57174f9431cf",
        rating: 4.8,
        stock: 10,
        seller: "Tech World",
        userId: "SELLER002"
    },

    {
        name: "Acer Swift Go 14",
        description: "Portable laptop with a bright high-resolution display.",
        category: "Laptops",
        brand: "Acer",
        price: 68000,
        originalPrice: 76000,
        image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef",
        rating: 4.5,
        stock: 16,
        seller: "Laptop Hub",
        userId: "SELLER007"
    },

    {
        name: "MSI Modern 14",
        description: "Slim productivity laptop for students and professionals.",
        category: "Laptops",
        brand: "MSI",
        price: 59000,
        originalPrice: 68000,
        image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6",
        rating: 4.4,
        stock: 19,
        seller: "Tech World",
        userId: "SELLER002"
    },

    {
        name: "Dell Vostro 15",
        description: "Reliable business laptop with modern performance.",
        category: "Laptops",
        brand: "Dell",
        price: 61000,
        originalPrice: 69000,
        image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed",
        rating: 4.4,
        stock: 18,
        seller: "Dell Store",
        userId: "SELLER008"
    },

    {
        name: "HP EliteBook 840",
        description: "Premium business laptop with professional features.",
        category: "Laptops",
        brand: "HP",
        price: 98000,
        originalPrice: 110000,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
        rating: 4.8,
        stock: 7,
        seller: "HP Store",
        userId: "SELLER009"
    },

    {
        name: "Lenovo Yoga Slim 6",
        description: "Premium slim laptop with excellent portability.",
        category: "Laptops",
        brand: "Lenovo",
        price: 74000,
        originalPrice: 84000,
        image: "https://images.unsplash.com/photo-1602080858428-57174f9431cf",
        rating: 4.6,
        stock: 12,
        seller: "Tech World",
        userId: "SELLER002"
    },

    {
        name: "ASUS ROG Strix G16",
        description: "High-end gaming laptop for serious gamers.",
        category: "Laptops",
        brand: "ASUS",
        price: 145000,
        originalPrice: 160000,
        image: "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9",
        rating: 4.9,
        stock: 5,
        seller: "Gaming Zone",
        userId: "SELLER005"
    },

    {
        name: "Acer Predator Helios Neo",
        description: "Powerful gaming machine with advanced cooling.",
        category: "Laptops",
        brand: "Acer",
        price: 125000,
        originalPrice: 140000,
        image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302",
        rating: 4.8,
        stock: 6,
        seller: "Gaming Zone",
        userId: "SELLER005"
    },

    {
        name: "Dell G15 Gaming",
        description: "Gaming laptop with powerful processor and graphics.",
        category: "Laptops",
        brand: "Dell",
        price: 92000,
        originalPrice: 105000,
        image: "https://images.unsplash.com/photo-1593642702749-b7d2a804fbcf",
        rating: 4.7,
        stock: 8,
        seller: "Gaming Zone",
        userId: "SELLER005"
    },

    {
        name: "HP Omen 16",
        description: "Premium gaming laptop with high refresh rate display.",
        category: "Laptops",
        brand: "HP",
        price: 118000,
        originalPrice: 135000,
        image: "https://images.unsplash.com/photo-1593642532400-2682810df593",
        rating: 4.8,
        stock: 6,
        seller: "Gaming Zone",
        userId: "SELLER005"
    },

    {
        name: "Lenovo LOQ Gaming",
        description: "Affordable high-performance gaming laptop.",
        category: "Laptops",
        brand: "Lenovo",
        price: 89000,
        originalPrice: 99000,
        image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45",
        rating: 4.7,
        stock: 10,
        seller: "Gaming Zone",
        userId: "SELLER005"
    },

    {
        name: "Apple MacBook Pro 14",
        description: "Professional laptop designed for demanding workloads.",
        category: "Laptops",
        brand: "Apple",
        price: 169999,
        originalPrice: 185000,
        image: "https://images.unsplash.com/photo-1517336714739-489689fd1ca8",
        rating: 4.9,
        stock: 5,
        seller: "Apple Hub",
        userId: "SELLER003"
    },


    // =================================================
    // MOBILES - 32 PRODUCTS
    // =================================================

    {
        name: "iPhone 15",
        description: "Apple smartphone with advanced camera and powerful performance.",
        category: "Mobiles",
        brand: "Apple",
        price: 69999,
        originalPrice: 79999,
        image: "https://images.unsplash.com/photo-1591337676887-a217a6970a8a",
        rating: 4.9,
        stock: 18,
        seller: "Apple Hub",
        userId: "SELLER003"
    },

    {
        name: "Samsung Galaxy S24",
        description: "Flagship smartphone with powerful camera and AMOLED display.",
        category: "Mobiles",
        brand: "Samsung",
        price: 74999,
        originalPrice: 84999,
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97",
        rating: 4.8,
        stock: 25,
        seller: "Smart Store",
        userId: "ADMIN001"
    },

    {
        name: "OnePlus 12",
        description: "High-performance Android smartphone with fast charging.",
        category: "Mobiles",
        brand: "OnePlus",
        price: 59999,
        originalPrice: 64999,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
        rating: 4.7,
        stock: 22,
        seller: "Smart Store",
        userId: "ADMIN001"
    },

    {
        name: "Google Pixel 8",
        description: "Smartphone with advanced AI camera features.",
        category: "Mobiles",
        brand: "Google",
        price: 64999,
        originalPrice: 74999,
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97",
        rating: 4.7,
        stock: 16,
        seller: "Tech World",
        userId: "SELLER002"
    },

    {
        name: "Samsung Galaxy A55",
        description: "Premium mid-range smartphone with AMOLED display.",
        category: "Mobiles",
        brand: "Samsung",
        price: 36999,
        originalPrice: 41999,
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97",
        rating: 4.5,
        stock: 30,
        seller: "Smart Store",
        userId: "ADMIN001"
    },

    {
        name: "Samsung Galaxy A35",
        description: "Affordable smartphone with excellent display and camera.",
        category: "Mobiles",
        brand: "Samsung",
        price: 29999,
        originalPrice: 34999,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
        rating: 4.4,
        stock: 35,
        seller: "Smart Store",
        userId: "ADMIN001"
    },

    {
        name: "OnePlus 12R",
        description: "Powerful smartphone with smooth AMOLED display.",
        category: "Mobiles",
        brand: "OnePlus",
        price: 39999,
        originalPrice: 44999,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
        rating: 4.6,
        stock: 28,
        seller: "Smart Store",
        userId: "ADMIN001"
    },

    {
        name: "OnePlus Nord CE 4",
        description: "Affordable 5G smartphone with fast charging.",
        category: "Mobiles",
        brand: "OnePlus",
        price: 24999,
        originalPrice: 27999,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
        rating: 4.4,
        stock: 32,
        seller: "Smart Store",
        userId: "ADMIN001"
    },

    {
        name: "iPhone 15 Pro",
        description: "Premium iPhone with titanium design and Pro camera.",
        category: "Mobiles",
        brand: "Apple",
        price: 129999,
        originalPrice: 139999,
        image: "https://images.unsplash.com/photo-1591337676887-a217a6970a8a",
        rating: 4.9,
        stock: 10,
        seller: "Apple Hub",
        userId: "SELLER003"
    },

    {
        name: "iPhone 15 Pro Max",
        description: "Flagship iPhone with advanced camera system.",
        category: "Mobiles",
        brand: "Apple",
        price: 149999,
        originalPrice: 159999,
        image: "https://images.unsplash.com/photo-1591337676887-a217a6970a8a",
        rating: 4.9,
        stock: 8,
        seller: "Apple Hub",
        userId: "SELLER003"
    },

    {
        name: "iPhone 14",
        description: "Powerful Apple smartphone with excellent camera.",
        category: "Mobiles",
        brand: "Apple",
        price: 59999,
        originalPrice: 69999,
        image: "https://images.unsplash.com/photo-1591337676887-a217a6970a8a",
        rating: 4.7,
        stock: 20,
        seller: "Apple Hub",
        userId: "SELLER003"
    },

    {
        name: "iPhone 14 Plus",
        description: "Large-screen Apple smartphone with long battery life.",
        category: "Mobiles",
        brand: "Apple",
        price: 67999,
        originalPrice: 77999,
        image: "https://images.unsplash.com/photo-1591337676887-a217a6970a8a",
        rating: 4.7,
        stock: 14,
        seller: "Apple Hub",
        userId: "SELLER003"
    },

    {
        name: "Google Pixel 8 Pro",
        description: "Premium Google smartphone with advanced AI photography.",
        category: "Mobiles",
        brand: "Google",
        price: 89999,
        originalPrice: 99999,
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97",
        rating: 4.8,
        stock: 9,
        seller: "Tech World",
        userId: "SELLER002"
    },

    {
        name: "Google Pixel 7a",
        description: "Compact smartphone with excellent camera performance.",
        category: "Mobiles",
        brand: "Google",
        price: 39999,
        originalPrice: 44999,
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97",
        rating: 4.5,
        stock: 18,
        seller: "Tech World",
        userId: "SELLER002"
    },

    {
        name: "Nothing Phone 2",
        description: "Unique smartphone with transparent design and Glyph interface.",
        category: "Mobiles",
        brand: "Nothing",
        price: 44999,
        originalPrice: 49999,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
        rating: 4.6,
        stock: 17,
        seller: "Smart Store",
        userId: "ADMIN001"
    },

    {
        name: "Nothing Phone 2a",
        description: "Stylish affordable smartphone with smooth display.",
        category: "Mobiles",
        brand: "Nothing",
        price: 25999,
        originalPrice: 29999,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
        rating: 4.5,
        stock: 25,
        seller: "Smart Store",
        userId: "ADMIN001"
    },

    {
        name: "Realme GT 6",
        description: "High-performance smartphone with fast charging.",
        category: "Mobiles",
        brand: "Realme",
        price: 39999,
        originalPrice: 44999,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
        rating: 4.5,
        stock: 21,
        seller: "Mobile World",
        userId: "SELLER010"
    },

    {
        name: "Realme 12 Pro",
        description: "Camera-focused smartphone with premium design.",
        category: "Mobiles",
        brand: "Realme",
        price: 29999,
        originalPrice: 33999,
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97",
        rating: 4.4,
        stock: 26,
        seller: "Mobile World",
        userId: "SELLER010"
    },

    {
        name: "Vivo V30",
        description: "Slim smartphone with advanced portrait photography.",
        category: "Mobiles",
        brand: "Vivo",
        price: 33999,
        originalPrice: 37999,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
        rating: 4.5,
        stock: 24,
        seller: "Mobile World",
        userId: "SELLER010"
    },

    {
        name: "Vivo V30 Pro",
        description: "Premium camera smartphone with AMOLED display.",
        category: "Mobiles",
        brand: "Vivo",
        price: 45999,
        originalPrice: 49999,
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97",
        rating: 4.6,
        stock: 16,
        seller: "Mobile World",
        userId: "SELLER010"
    },

    {
        name: "Oppo Reno 11",
        description: "Stylish smartphone with portrait camera system.",
        category: "Mobiles",
        brand: "Oppo",
        price: 32999,
        originalPrice: 36999,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
        rating: 4.4,
        stock: 22,
        seller: "Mobile World",
        userId: "SELLER010"
    },

    {
        name: "Oppo Reno 11 Pro",
        description: "Premium portrait smartphone with fast charging.",
        category: "Mobiles",
        brand: "Oppo",
        price: 39999,
        originalPrice: 44999,
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97",
        rating: 4.5,
        stock: 18,
        seller: "Mobile World",
        userId: "SELLER010"
    },

    {
        name: "Redmi Note 13 Pro",
        description: "Feature-rich smartphone with high-resolution camera.",
        category: "Mobiles",
        brand: "Redmi",
        price: 29999,
        originalPrice: 34999,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
        rating: 4.4,
        stock: 30,
        seller: "Mobile World",
        userId: "SELLER010"
    },

    {
        name: "Redmi Note 13",
        description: "Affordable smartphone with AMOLED display.",
        category: "Mobiles",
        brand: "Redmi",
        price: 18999,
        originalPrice: 21999,
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97",
        rating: 4.3,
        stock: 40,
        seller: "Mobile World",
        userId: "SELLER010"
    },

    {
        name: "Poco X6 Pro",
        description: "Performance-focused smartphone for gaming enthusiasts.",
        category: "Mobiles",
        brand: "Poco",
        price: 26999,
        originalPrice: 29999,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
        rating: 4.6,
        stock: 27,
        seller: "Mobile World",
        userId: "SELLER010"
    },

    {
        name: "Poco F6",
        description: "Powerful gaming smartphone with fast processor.",
        category: "Mobiles",
        brand: "Poco",
        price: 32999,
        originalPrice: 36999,
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97",
        rating: 4.7,
        stock: 20,
        seller: "Mobile World",
        userId: "SELLER010"
    },

    {
        name: "Motorola Edge 50 Pro",
        description: "Premium Motorola smartphone with curved display.",
        category: "Mobiles",
        brand: "Motorola",
        price: 39999,
        originalPrice: 44999,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
        rating: 4.5,
        stock: 19,
        seller: "Mobile World",
        userId: "SELLER010"
    },

    {
        name: "Motorola G84",
        description: "Affordable 5G smartphone with vibrant display.",
        category: "Mobiles",
        brand: "Motorola",
        price: 18999,
        originalPrice: 22999,
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97",
        rating: 4.3,
        stock: 35,
        seller: "Mobile World",
        userId: "SELLER010"
    },

    {
        name: "Samsung Galaxy Z Flip 6",
        description: "Foldable smartphone with compact flip design.",
        category: "Mobiles",
        brand: "Samsung",
        price: 109999,
        originalPrice: 119999,
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97",
        rating: 4.8,
        stock: 8,
        seller: "Smart Store",
        userId: "ADMIN001"
    },

    {
        name: "Samsung Galaxy Z Fold 6",
        description: "Premium foldable smartphone with large inner display.",
        category: "Mobiles",
        brand: "Samsung",
        price: 159999,
        originalPrice: 175000,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
        rating: 4.9,
        stock: 5,
        seller: "Smart Store",
        userId: "ADMIN001"
    },

    {
        name: "OnePlus Open",
        description: "Premium foldable smartphone with large flexible display.",
        category: "Mobiles",
        brand: "OnePlus",
        price: 139999,
        originalPrice: 150000,
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97",
        rating: 4.8,
        stock: 6,
        seller: "Smart Store",
        userId: "ADMIN001"
    },


    // =================================================
    // ACCESSORIES - 32 PRODUCTS
    // =================================================

    {
        name: "Sony Wireless Headphones",
        description: "Premium wireless headphones with noise cancellation.",
        category: "Accessories",
        brand: "Sony",
        price: 8999,
        originalPrice: 11999,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
        rating: 4.7,
        stock: 30,
        seller: "Audio Store",
        userId: "SELLER004"
    },

    {
        name: "Logitech Wireless Mouse",
        description: "Ergonomic wireless mouse for office and gaming.",
        category: "Accessories",
        brand: "Logitech",
        price: 1499,
        originalPrice: 1999,
        image: "https://images.unsplash.com/photo-1527814050087-3793815479db",
        rating: 4.4,
        stock: 50,
        seller: "Smart Store",
        userId: "ADMIN001"
    },

    {
        name: "Redragon Mechanical Keyboard",
        description: "RGB mechanical keyboard designed for gaming.",
        category: "Accessories",
        brand: "Redragon",
        price: 2999,
        originalPrice: 3999,
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
        rating: 4.6,
        stock: 35,
        seller: "Gaming Zone",
        userId: "SELLER005"
    },

    {
        name: "Apple AirPods Pro",
        description: "Premium wireless earbuds with active noise cancellation.",
        category: "Accessories",
        brand: "Apple",
        price: 24999,
        originalPrice: 26999,
        image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1",
        rating: 4.8,
        stock: 25,
        seller: "Apple Hub",
        userId: "SELLER003"
    },

    {
        name: "Apple AirPods 3",
        description: "Wireless earbuds with spatial audio support.",
        category: "Accessories",
        brand: "Apple",
        price: 16999,
        originalPrice: 18999,
        image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1",
        rating: 4.7,
        stock: 30,
        seller: "Apple Hub",
        userId: "SELLER003"
    },

    {
        name: "JBL Tune 760NC",
        description: "Wireless headphones with active noise cancellation.",
        category: "Accessories",
        brand: "JBL",
        price: 5999,
        originalPrice: 7999,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
        rating: 4.5,
        stock: 28,
        seller: "Audio Store",
        userId: "SELLER004"
    },

    {
        name: "JBL Bluetooth Speaker",
        description: "Portable Bluetooth speaker with powerful sound.",
        category: "Accessories",
        brand: "JBL",
        price: 4499,
        originalPrice: 5999,
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1",
        rating: 4.6,
        stock: 32,
        seller: "Audio Store",
        userId: "SELLER004"
    },

    {
        name: "Logitech MX Master 3S",
        description: "Premium ergonomic wireless mouse for productivity.",
        category: "Accessories",
        brand: "Logitech",
        price: 8999,
        originalPrice: 9999,
        image: "https://images.unsplash.com/photo-1527814050087-3793815479db",
        rating: 4.8,
        stock: 20,
        seller: "Smart Store",
        userId: "ADMIN001"
    },

    {
        name: "Logitech K380 Keyboard",
        description: "Compact wireless keyboard for multiple devices.",
        category: "Accessories",
        brand: "Logitech",
        price: 2999,
        originalPrice: 3499,
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
        rating: 4.5,
        stock: 35,
        seller: "Smart Store",
        userId: "ADMIN001"
    },

    {
        name: "Razer DeathAdder Mouse",
        description: "Gaming mouse with accurate optical sensor.",
        category: "Accessories",
        brand: "Razer",
        price: 3999,
        originalPrice: 4999,
        image: "https://images.unsplash.com/photo-1527814050087-3793815479db",
        rating: 4.7,
        stock: 22,
        seller: "Gaming Zone",
        userId: "SELLER005"
    },

    {
        name: "Razer BlackShark Headset",
        description: "Gaming headset with immersive surround sound.",
        category: "Accessories",
        brand: "Razer",
        price: 7999,
        originalPrice: 8999,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
        rating: 4.7,
        stock: 18,
        seller: "Gaming Zone",
        userId: "SELLER005"
    },

    {
        name: "Anker Power Bank 20000mAh",
        description: "High-capacity portable power bank with fast charging.",
        category: "Accessories",
        brand: "Anker",
        price: 2499,
        originalPrice: 2999,
        image: "https://images.unsplash.com/photo-1609592424995-5c1a3c8a1d4f",
        rating: 4.5,
        stock: 40,
        seller: "Tech World",
        userId: "SELLER002"
    },

    {
        name: "Anker USB-C Charger",
        description: "Compact fast charger for phones and laptops.",
        category: "Accessories",
        brand: "Anker",
        price: 1999,
        originalPrice: 2499,
        image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0",
        rating: 4.6,
        stock: 45,
        seller: "Tech World",
        userId: "SELLER002"
    },

    {
        name: "Samsung 45W Charger",
        description: "Super fast charger for compatible Samsung devices.",
        category: "Accessories",
        brand: "Samsung",
        price: 2999,
        originalPrice: 3499,
        image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0",
        rating: 4.6,
        stock: 38,
        seller: "Smart Store",
        userId: "ADMIN001"
    },

    {
        name: "Apple MagSafe Charger",
        description: "Magnetic wireless charger for compatible Apple devices.",
        category: "Accessories",
        brand: "Apple",
        price: 4499,
        originalPrice: 4999,
        image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0",
        rating: 4.5,
        stock: 24,
        seller: "Apple Hub",
        userId: "SELLER003"
    },

    {
        name: "Belkin Wireless Charger",
        description: "Fast wireless charging pad with modern design.",
        category: "Accessories",
        brand: "Belkin",
        price: 2999,
        originalPrice: 3999,
        image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0",
        rating: 4.4,
        stock: 30,
        seller: "Tech World",
        userId: "SELLER002"
    },

    {
        name: "Spigen Phone Case",
        description: "Protective shock-resistant case for smartphones.",
        category: "Accessories",
        brand: "Spigen",
        price: 1499,
        originalPrice: 1999,
        image: "https://images.unsplash.com/photo-1603313011108-4ba2f16f4c2a",
        rating: 4.5,
        stock: 50,
        seller: "Mobile World",
        userId: "SELLER010"
    },

    {
        name: "Tempered Glass Screen Protector",
        description: "High-quality tempered glass screen protection.",
        category: "Accessories",
        brand: "Smart Store",
        price: 499,
        originalPrice: 799,
        image: "https://images.unsplash.com/photo-1603313011108-4ba2f16f4c2a",
        rating: 4.3,
        stock: 100,
        seller: "Smart Store",
        userId: "ADMIN001"
    },

    {
        name: "USB-C Hub 7-in-1",
        description: "Multi-port USB-C hub for laptops and tablets.",
        category: "Accessories",
        brand: "Anker",
        price: 3999,
        originalPrice: 4999,
        image: "https://images.unsplash.com/photo-1625842268584-8f3296236761",
        rating: 4.6,
        stock: 25,
        seller: "Tech World",
        userId: "SELLER002"
    },

    {
        name: "SanDisk 128GB USB Drive",
        description: "Compact high-speed USB storage drive.",
        category: "Accessories",
        brand: "SanDisk",
        price: 999,
        originalPrice: 1299,
        image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7",
        rating: 4.5,
        stock: 60,
        seller: "Tech World",
        userId: "SELLER002"
    },

    {
        name: "Samsung 256GB Memory Card",
        description: "High-speed memory card for cameras and smartphones.",
        category: "Accessories",
        brand: "Samsung",
        price: 1799,
        originalPrice: 2299,
        image: "https://images.unsplash.com/photo-1597225244660-1cd128c64284",
        rating: 4.6,
        stock: 40,
        seller: "Smart Store",
        userId: "ADMIN001"
    },

    {
        name: "Amazon Echo Speaker",
        description: "Smart speaker with voice assistant capabilities.",
        category: "Accessories",
        brand: "Amazon",
        price: 4499,
        originalPrice: 5499,
        image: "https://images.unsplash.com/photo-1543512214-318c7553f230",
        rating: 4.5,
        stock: 20,
        seller: "Smart Store",
        userId: "ADMIN001"
    },

    {
        name: "Google Nest Mini",
        description: "Compact smart speaker for home automation.",
        category: "Accessories",
        brand: "Google",
        price: 3999,
        originalPrice: 4999,
        image: "https://images.unsplash.com/photo-1543512214-318c7553f230",
        rating: 4.5,
        stock: 18,
        seller: "Smart Store",
        userId: "ADMIN001"
    },

    {
        name: "TP-Link WiFi Router",
        description: "High-speed dual-band wireless router.",
        category: "Accessories",
        brand: "TP-Link",
        price: 2499,
        originalPrice: 2999,
        image: "https://images.unsplash.com/photo-1606904825846-647eb07f5be2",
        rating: 4.4,
        stock: 30,
        seller: "Tech World",
        userId: "SELLER002"
    },

    {
        name: "D-Link WiFi Router",
        description: "Reliable wireless router for home connectivity.",
        category: "Accessories",
        brand: "D-Link",
        price: 1999,
        originalPrice: 2499,
        image: "https://images.unsplash.com/photo-1606904825846-647eb07f5be2",
        rating: 4.3,
        stock: 35,
        seller: "Tech World",
        userId: "SELLER002"
    },

    {
        name: "HP Wireless Keyboard Mouse Combo",
        description: "Convenient wireless keyboard and mouse combination.",
        category: "Accessories",
        brand: "HP",
        price: 1999,
        originalPrice: 2499,
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
        rating: 4.4,
        stock: 28,
        seller: "HP Store",
        userId: "SELLER009"
    },

    {
        name: "Microsoft Wireless Mouse",
        description: "Comfortable wireless mouse for daily productivity.",
        category: "Accessories",
        brand: "Microsoft",
        price: 1599,
        originalPrice: 1999,
        image: "https://images.unsplash.com/photo-1527814050087-3793815479db",
        rating: 4.4,
        stock: 35,
        seller: "Tech World",
        userId: "SELLER002"
    },

    {
        name: "Sony Bluetooth Speaker",
        description: "Portable speaker with rich bass and clear audio.",
        category: "Accessories",
        brand: "Sony",
        price: 6999,
        originalPrice: 7999,
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1",
        rating: 4.7,
        stock: 15,
        seller: "Audio Store",
        userId: "SELLER004"
    },

    {
        name: "Bose QuietComfort Headphones",
        description: "Premium noise cancelling wireless headphones.",
        category: "Accessories",
        brand: "Bose",
        price: 29999,
        originalPrice: 34999,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
        rating: 4.9,
        stock: 10,
        seller: "Audio Store",
        userId: "SELLER004"
    },

    {
        name: "Boat Rockerz 450",
        description: "Affordable wireless headphones with powerful bass.",
        category: "Accessories",
        brand: "Boat",
        price: 1499,
        originalPrice: 1999,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
        rating: 4.4,
        stock: 45,
        seller: "Audio Store",
        userId: "SELLER004"
    },

    {
        name: "Boat Airdopes 141",
        description: "Affordable true wireless earbuds with long battery life.",
        category: "Accessories",
        brand: "Boat",
        price: 1299,
        originalPrice: 1799,
        image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1",
        rating: 4.3,
        stock: 55,
        seller: "Audio Store",
        userId: "SELLER004"
    },


    // =================================================
    // SMART WATCHES - 32 PRODUCTS
    // =================================================

    {
        name: "Apple Watch Series 9",
        description: "Advanced smartwatch with fitness and health tracking.",
        category: "Smart Watches",
        brand: "Apple",
        price: 39999,
        originalPrice: 44999,
        image: "https://images.unsplash.com/photo-1546868871-7041f2a55e30",
        rating: 4.8,
        stock: 14,
        seller: "Apple Hub",
        userId: "SELLER003"
    },

    {
        name: "Samsung Galaxy Watch 6",
        description: "Smartwatch with AMOLED display and fitness tracking.",
        category: "Smart Watches",
        brand: "Samsung",
        price: 24999,
        originalPrice: 29999,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
        rating: 4.6,
        stock: 20,
        seller: "Smart Store",
        userId: "ADMIN001"
    },

    {
        name: "Apple Watch Ultra 2",
        description: "Premium rugged smartwatch designed for outdoor adventures.",
        category: "Smart Watches",
        brand: "Apple",
        price: 89999,
        originalPrice: 99999,
        image: "https://images.unsplash.com/photo-1546868871-7041f2a55e30",
        rating: 4.9,
        stock: 7,
        seller: "Apple Hub",
        userId: "SELLER003"
    },

    {
        name: "Samsung Galaxy Watch 7",
        description: "Advanced smartwatch with health and fitness features.",
        category: "Smart Watches",
        brand: "Samsung",
        price: 32999,
        originalPrice: 37999,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
        rating: 4.7,
        stock: 15,
        seller: "Smart Store",
        userId: "ADMIN001"
    },

    {
        name: "Google Pixel Watch 2",
        description: "Smartwatch with Fitbit fitness tracking integration.",
        category: "Smart Watches",
        brand: "Google",
        price: 29999,
        originalPrice: 34999,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
        rating: 4.5,
        stock: 12,
        seller: "Tech World",
        userId: "SELLER002"
    },

    {
        name: "OnePlus Watch 2",
        description: "Premium smartwatch with long battery life.",
        category: "Smart Watches",
        brand: "OnePlus",
        price: 24999,
        originalPrice: 29999,
        image: "https://images.unsplash.com/photo-1546868871-7041f2a55e30",
        rating: 4.6,
        stock: 16,
        seller: "Smart Store",
        userId: "ADMIN001"
    },

    {
        name: "OnePlus Watch",
        description: "Stylish smartwatch for everyday fitness tracking.",
        category: "Smart Watches",
        brand: "OnePlus",
        price: 12999,
        originalPrice: 15999,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
        rating: 4.4,
        stock: 22,
        seller: "Smart Store",
        userId: "ADMIN001"
    },

    {
        name: "Amazfit GTR 4",
        description: "Fitness smartwatch with GPS and long battery life.",
        category: "Smart Watches",
        brand: "Amazfit",
        price: 17999,
        originalPrice: 21999,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
        rating: 4.6,
        stock: 20,
        seller: "Smart Store",
        userId: "ADMIN001"
    },

    {
        name: "Amazfit Balance",
        description: "Advanced fitness smartwatch with health monitoring.",
        category: "Smart Watches",
        brand: "Amazfit",
        price: 22999,
        originalPrice: 26999,
        image: "https://images.unsplash.com/photo-1546868871-7041f2a55e30",
        rating: 4.6,
        stock: 18,
        seller: "Smart Store",
        userId: "ADMIN001"
    },

    {
        name: "Garmin Forerunner 255",
        description: "Advanced GPS running smartwatch for athletes.",
        category: "Smart Watches",
        brand: "Garmin",
        price: 34999,
        originalPrice: 39999,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
        rating: 4.8,
        stock: 9,
        seller: "Fitness Store",
        userId: "SELLER011"
    },

    {
        name: "Garmin Vivoactive 5",
        description: "Fitness smartwatch with health and activity tracking.",
        category: "Smart Watches",
        brand: "Garmin",
        price: 29999,
        originalPrice: 34999,
        image: "https://images.unsplash.com/photo-1546868871-7041f2a55e30",
        rating: 4.7,
        stock: 11,
        seller: "Fitness Store",
        userId: "SELLER011"
    },

    {
        name: "Fitbit Versa 4",
        description: "Fitness smartwatch with activity and sleep tracking.",
        category: "Smart Watches",
        brand: "Fitbit",
        price: 18999,
        originalPrice: 22999,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
        rating: 4.5,
        stock: 17,
        seller: "Fitness Store",
        userId: "SELLER011"
    },

    {
        name: "Fitbit Charge 6",
        description: "Advanced fitness tracker with health monitoring.",
        category: "Smart Watches",
        brand: "Fitbit",
        price: 14999,
        originalPrice: 17999,
        image: "https://images.unsplash.com/photo-1546868871-7041f2a55e30",
        rating: 4.5,
        stock: 20,
        seller: "Fitness Store",
        userId: "SELLER011"
    },

    {
        name: "Noise ColorFit Pro 5",
        description: "Affordable smartwatch with AMOLED display.",
        category: "Smart Watches",
        brand: "Noise",
        price: 3999,
        originalPrice: 5999,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
        rating: 4.3,
        stock: 45,
        seller: "Smart Store",
        userId: "ADMIN001"
    },

    {
        name: "NoiseFit Halo",
        description: "Stylish smartwatch with health monitoring features.",
        category: "Smart Watches",
        brand: "Noise",
        price: 2999,
        originalPrice: 4499,
        image: "https://images.unsplash.com/photo-1546868871-7041f2a55e30",
        rating: 4.2,
        stock: 50,
        seller: "Smart Store",
        userId: "ADMIN001"
    },

    {
        name: "Fire-Boltt Phoenix",
        description: "Affordable smartwatch with calling functionality.",
        category: "Smart Watches",
        brand: "Fire-Boltt",
        price: 2499,
        originalPrice: 3999,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
        rating: 4.2,
        stock: 55,
        seller: "Smart Store",
        userId: "ADMIN001"
    },

    {
        name: "Fire-Boltt Ninja Call Pro",
        description: "Budget smartwatch with Bluetooth calling.",
        category: "Smart Watches",
        brand: "Fire-Boltt",
        price: 1999,
        originalPrice: 2999,
        image: "https://images.unsplash.com/photo-1546868871-7041f2a55e30",
        rating: 4.1,
        stock: 60,
        seller: "Smart Store",
        userId: "ADMIN001"
    },

    {
        name: "boAt Wave Sigma",
        description: "Affordable smartwatch with large display.",
        category: "Smart Watches",
        brand: "boAt",
        price: 1999,
        originalPrice: 2999,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
        rating: 4.2,
        stock: 50,
        seller: "Smart Store",
        userId: "ADMIN001"
    },

    {
        name: "boAt Lunar Connect",
        description: "Smartwatch with Bluetooth calling and fitness tracking.",
        category: "Smart Watches",
        brand: "boAt",
        price: 2999,
        originalPrice: 3999,
        image: "https://images.unsplash.com/photo-1546868871-7041f2a55e30",
        rating: 4.3,
        stock: 40,
        seller: "Smart Store",
        userId: "ADMIN001"
    },

    {
        name: "Fossil Gen 6",
        description: "Premium smartwatch with classic watch design.",
        category: "Smart Watches",
        brand: "Fossil",
        price: 24999,
        originalPrice: 29999,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
        rating: 4.5,
        stock: 10,
        seller: "Smart Store",
        userId: "ADMIN001"
    },

    {
        name: "Fossil Gen 6 Wellness",
        description: "Stylish smartwatch with wellness tracking.",
        category: "Smart Watches",
        brand: "Fossil",
        price: 27999,
        originalPrice: 32999,
        image: "https://images.unsplash.com/photo-1546868871-7041f2a55e30",
        rating: 4.5,
        stock: 9,
        seller: "Smart Store",
        userId: "ADMIN001"
    },

    {
        name: "Huawei Watch GT 4",
        description: "Premium smartwatch with advanced health tracking.",
        category: "Smart Watches",
        brand: "Huawei",
        price: 29999,
        originalPrice: 34999,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
        rating: 4.6,
        stock: 12,
        seller: "Smart Store",
        userId: "ADMIN001"
    },

    {
        name: "Huawei Watch Fit 3",
        description: "Slim fitness smartwatch with bright display.",
        category: "Smart Watches",
        brand: "Huawei",
        price: 12999,
        originalPrice: 15999,
        image: "https://images.unsplash.com/photo-1546868871-7041f2a55e30",
        rating: 4.5,
        stock: 15,
        seller: "Fitness Store",
        userId: "SELLER011"
    },

    {
        name: "Samsung Galaxy Watch FE",
        description: "Affordable Samsung smartwatch with health tracking.",
        category: "Smart Watches",
        brand: "Samsung",
        price: 15999,
        originalPrice: 18999,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
        rating: 4.4,
        stock: 18,
        seller: "Smart Store",
        userId: "ADMIN001"
    },

    {
        name: "Apple Watch SE",
        description: "Affordable Apple Watch with essential fitness features.",
        category: "Smart Watches",
        brand: "Apple",
        price: 29999,
        originalPrice: 34999,
        image: "https://images.unsplash.com/photo-1546868871-7041f2a55e30",
        rating: 4.7,
        stock: 13,
        seller: "Apple Hub",
        userId: "SELLER003"
    },

    {
        name: "Amazfit Bip 5",
        description: "Affordable large-screen smartwatch with calling.",
        category: "Smart Watches",
        brand: "Amazfit",
        price: 5499,
        originalPrice: 6999,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
        rating: 4.3,
        stock: 35,
        seller: "Fitness Store",
        userId: "SELLER011"
    },

    {
        name: "Garmin Instinct 2",
        description: "Rugged GPS smartwatch for outdoor activities.",
        category: "Smart Watches",
        brand: "Garmin",
        price: 29999,
        originalPrice: 34999,
        image: "https://images.unsplash.com/photo-1546868871-7041f2a55e30",
        rating: 4.7,
        stock: 8,
        seller: "Fitness Store",
        userId: "SELLER011"
    },

    {
        name: "NoiseFit Vortex",
        description: "AMOLED smartwatch with health and fitness tracking.",
        category: "Smart Watches",
        brand: "Noise",
        price: 3499,
        originalPrice: 4999,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
        rating: 4.3,
        stock: 45,
        seller: "Smart Store",
        userId: "ADMIN001"
    },

    {
        name: "Fire-Boltt Phoenix Pro",
        description: "Feature-rich smartwatch with Bluetooth calling.",
        category: "Smart Watches",
        brand: "Fire-Boltt",
        price: 2999,
        originalPrice: 3999,
        image: "https://images.unsplash.com/photo-1546868871-7041f2a55e30",
        rating: 4.2,
        stock: 50,
        seller: "Smart Store",
        userId: "ADMIN001"
    },

    {
        name: "Samsung Galaxy Watch Classic",
        description: "Classic-style smartwatch with rotating bezel design.",
        category: "Smart Watches",
        brand: "Samsung",
        price: 34999,
        originalPrice: 39999,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
        rating: 4.7,
        stock: 10,
        seller: "Smart Store",
        userId: "ADMIN001"
    },


    // =================================================
    // HOME APPLIANCES - 32 PRODUCTS
    // =================================================

    {
        name: "Samsung 43 inch Smart TV",
        description: "4K Ultra HD Smart TV with streaming applications.",
        category: "Home Appliances",
        brand: "Samsung",
        price: 39999,
        originalPrice: 46999,
        image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1",
        rating: 4.5,
        stock: 10,
        seller: "Smart Store",
        userId: "ADMIN001"
    },

    /*{
        name: "LG Refrigerator",
        description: "Energy efficient double-door refrigerator.",
        category: "Home Appliances",
        brand: "LG",
        price: 44999,
        originalPrice: 52999,
        image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5",
        rating: 4.6,
        stock: 8,
        seller: "Home Store",
        userId: "SELLER006"
    },*/

    {
        name: "Philips Air Fryer",
        description: "Healthy cooking with rapid air technology.",
        category: "Home Appliances",
        brand: "Philips",
        price: 7999,
        originalPrice: 9999,
        image: "https://images.unsplash.com/photo-1585515320310-259814833e62",
        rating: 4.4,
        stock: 25,
        seller: "Home Store",
        userId: "SELLER006"
    },

    {
        name: "Samsung 55 inch 4K TV",
        description: "Large 4K smart television with vibrant picture quality.",
        category: "Home Appliances",
        brand: "Samsung",
        price: 59999,
        originalPrice: 69999,
        image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1",
        rating: 4.7,
        stock: 7,
        seller: "Smart Store",
        userId: "ADMIN001"
    },

    {
        name: "LG 50 inch Smart TV",
        description: "4K smart TV with immersive entertainment features.",
        category: "Home Appliances",
        brand: "LG",
        price: 45999,
        originalPrice: 54999,
        image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1",
        rating: 4.6,
        stock: 9,
        seller: "Home Store",
        userId: "SELLER006"
    },

    {
        name: "Sony Bravia 55 inch",
        description: "Premium 4K television with cinematic picture quality.",
        category: "Home Appliances",
        brand: "Sony",
        price: 79999,
        originalPrice: 89999,
        image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1",
        rating: 4.8,
        stock: 6,
        seller: "Home Store",
        userId: "SELLER006"
    },

    {
        name: "Whirlpool Double Door Refrigerator",
        description: "Spacious energy-efficient refrigerator.",
        category: "Home Appliances",
        brand: "Whirlpool",
        price: 42999,
        originalPrice: 49999,
        image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5",
        rating: 4.5,
        stock: 10,
        seller: "Home Store",
        userId: "SELLER006"
    },

    {
        name: "Samsung Double Door Refrigerator",
        description: "Modern refrigerator with spacious storage.",
        category: "Home Appliances",
        brand: "Samsung",
        price: 49999,
        originalPrice: 57999,
        image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5",
        rating: 4.6,
        stock: 8,
        seller: "Smart Store",
        userId: "ADMIN001"
    },

    {
        name: "LG Washing Machine 7kg",
        description: "Fully automatic washing machine with multiple wash modes.",
        category: "Home Appliances",
        brand: "LG",
        price: 28999,
        originalPrice: 33999,
        image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1",
        rating: 4.6,
        stock: 12,
        seller: "Home Store",
        userId: "SELLER006"
    },

    {
        name: "Samsung Washing Machine 8kg",
        description: "Fully automatic washing machine with modern features.",
        category: "Home Appliances",
        brand: "Samsung",
        price: 31999,
        originalPrice: 37999,
        image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1",
        rating: 4.6,
        stock: 10,
        seller: "Smart Store",
        userId: "ADMIN001"
    },

    {
        name: "Whirlpool Washing Machine 7.5kg",
        description: "Efficient washing machine designed for daily laundry.",
        category: "Home Appliances",
        brand: "Whirlpool",
        price: 25999,
        originalPrice: 29999,
        image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1",
        rating: 4.4,
        stock: 15,
        seller: "Home Store",
        userId: "SELLER006"
    },

    {
        name: "Philips Mixer Grinder",
        description: "Powerful mixer grinder for everyday kitchen use.",
        category: "Home Appliances",
        brand: "Philips",
        price: 3999,
        originalPrice: 4999,
        image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b",
        rating: 4.5,
        stock: 30,
        seller: "Home Store",
        userId: "SELLER006"
    },

    {
        name: "Prestige Mixer Grinder",
        description: "Durable mixer grinder with powerful motor.",
        category: "Home Appliances",
        brand: "Prestige",
        price: 2999,
        originalPrice: 3999,
        image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b",
        rating: 4.4,
        stock: 35,
        seller: "Home Store",
        userId: "SELLER006"
    },

    {
        name: "Bajaj Microwave Oven",
        description: "Compact microwave oven for convenient cooking.",
        category: "Home Appliances",
        brand: "Bajaj",
        price: 6999,
        originalPrice: 8499,
        image: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078",
        rating: 4.3,
        stock: 20,
        seller: "Home Store",
        userId: "SELLER006"
    },

    {
        name: "LG Microwave Oven",
        description: "Modern microwave oven with multiple cooking modes.",
        category: "Home Appliances",
        brand: "LG",
        price: 10999,
        originalPrice: 12999,
        image: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078",
        rating: 4.5,
        stock: 18,
        seller: "Home Store",
        userId: "SELLER006"
    },

    {
        name: "Samsung Microwave Oven",
        description: "Stylish microwave oven for modern kitchens.",
        category: "Home Appliances",
        brand: "Samsung",
        price: 11999,
        originalPrice: 13999,
        image: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078",
        rating: 4.5,
        stock: 15,
        seller: "Smart Store",
        userId: "ADMIN001"
    },

    {
        name: "Philips Electric Kettle",
        description: "Fast-boiling electric kettle with automatic shutoff.",
        category: "Home Appliances",
        brand: "Philips",
        price: 1499,
        originalPrice: 1999,
        image: "https://images.unsplash.com/photo-1594213114663-d94db9b17195",
        rating: 4.4,
        stock: 40,
        seller: "Home Store",
        userId: "SELLER006"
    },

    {
        name: "Prestige Electric Kettle",
        description: "Affordable electric kettle for hot beverages.",
        category: "Home Appliances",
        brand: "Prestige",
        price: 1199,
        originalPrice: 1599,
        image: "https://images.unsplash.com/photo-1594213114663-d94db9b17195",
        rating: 4.3,
        stock: 45,
        seller: "Home Store",
        userId: "SELLER006"
    },

    {
        name: "Philips Coffee Maker",
        description: "Automatic coffee maker for fresh coffee at home.",
        category: "Home Appliances",
        brand: "Philips",
        price: 5999,
        originalPrice: 6999,
        image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6",
        rating: 4.5,
        stock: 18,
        seller: "Home Store",
        userId: "SELLER006"
    },

    {
        name: "Bajaj Room Heater",
        description: "Compact room heater for comfortable winter heating.",
        category: "Home Appliances",
        brand: "Bajaj",
        price: 2499,
        originalPrice: 2999,
        image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd",
        rating: 4.3,
        stock: 25,
        seller: "Home Store",
        userId: "SELLER006"
    },

    {
        name: "Philips Room Heater",
        description: "Efficient room heater with adjustable temperature.",
        category: "Home Appliances",
        brand: "Philips",
        price: 2999,
        originalPrice: 3999,
        image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd",
        rating: 4.4,
        stock: 20,
        seller: "Home Store",
        userId: "SELLER006"
    },

    {
        name: "Dyson Air Purifier",
        description: "Premium air purifier with advanced filtration.",
        category: "Home Appliances",
        brand: "Dyson",
        price: 49999,
        originalPrice: 54999,
        image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd",
        rating: 4.8,
        stock: 6,
        seller: "Home Store",
        userId: "SELLER006"
    },

    {
        name: "Philips Air Purifier",
        description: "Air purifier designed to improve indoor air quality.",
        category: "Home Appliances",
        brand: "Philips",
        price: 12999,
        originalPrice: 15999,
        image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd",
        rating: 4.5,
        stock: 15,
        seller: "Home Store",
        userId: "SELLER006"
    },

    {
        name: "LG Air Conditioner 1.5 Ton",
        description: "Energy-efficient split air conditioner with cooling technology.",
        category: "Home Appliances",
        brand: "LG",
        price: 42999,
        originalPrice: 48999,
        image: "https://images.unsplash.com/photo-1631545806609-4f9d8d3f1e7a",
        rating: 4.6,
        stock: 8,
        seller: "Home Store",
        userId: "SELLER006"
    },

    {
        name: "Samsung Air Conditioner 1.5 Ton",
        description: "Powerful split AC with fast cooling technology.",
        category: "Home Appliances",
        brand: "Samsung",
        price: 44999,
        originalPrice: 51999,
        image: "https://images.unsplash.com/photo-1631545806609-4f9d8d3f1e7a",
        rating: 4.6,
        stock: 7,
        seller: "Smart Store",
        userId: "ADMIN001"
    },

    {
        name: "Voltas Air Conditioner 1.5 Ton",
        description: "Reliable split air conditioner for home cooling.",
        category: "Home Appliances",
        brand: "Voltas",
        price: 38999,
        originalPrice: 44999,
        image: "https://images.unsplash.com/photo-1631545806609-4f9d8d3f1e7a",
        rating: 4.5,
        stock: 10,
        seller: "Home Store",
        userId: "SELLER006"
    },

    {
        name: "Bajaj Air Cooler",
        description: "Powerful air cooler for efficient room cooling.",
        category: "Home Appliances",
        brand: "Bajaj",
        price: 8999,
        originalPrice: 10999,
        image: "https://images.unsplash.com/photo-1591019479261-1a103585c559",
        rating: 4.3,
        stock: 18,
        seller: "Home Store",
        userId: "SELLER006"
    },

    {
        name: "Symphony Air Cooler",
        description: "Large-capacity air cooler with powerful airflow.",
        category: "Home Appliances",
        brand: "Symphony",
        price: 10999,
        originalPrice: 12999,
        image: "https://images.unsplash.com/photo-1591019479261-1a103585c559",
        rating: 4.4,
        stock: 15,
        seller: "Home Store",
        userId: "SELLER006"
    },

    {
        name: "Kent Water Purifier",
        description: "RO water purifier for clean and safe drinking water.",
        category: "Home Appliances",
        brand: "Kent",
        price: 15999,
        originalPrice: 18999,
        image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d",
        rating: 4.6,
        stock: 12,
        seller: "Home Store",
        userId: "SELLER006"
    },

    {
        name: "Aquaguard Water Purifier",
        description: "Advanced water purifier with multi-stage filtration.",
        category: "Home Appliances",
        brand: "Aquaguard",
        price: 13999,
        originalPrice: 16999,
        image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d",
        rating: 4.5,
        stock: 15,
        seller: "Home Store",
        userId: "SELLER006"
    },

    {
        name: "IFB Dishwasher",
        description: "Modern dishwasher for convenient kitchen cleaning.",
        category: "Home Appliances",
        brand: "IFB",
        price: 39999,
        originalPrice: 44999,
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a",
        rating: 4.5,
        stock: 8,
        seller: "Home Store",
        userId: "SELLER006"
    },

    {
        name: "Bosch Dishwasher",
        description: "Premium dishwasher with efficient cleaning programs.",
        category: "Home Appliances",
        brand: "Bosch",
        price: 49999,
        originalPrice: 55999,
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a",
        rating: 4.7,
        stock: 6,
        seller: "Home Store",
        userId: "SELLER006"
    },
    {
        name: "Lenovo IdeaPad Slim 3",
        description: "Slim everyday laptop designed for students and office productivity.",
        category: "Laptops",
        brand: "Lenovo",
        price: 52999,
        originalPrice: 59999,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
        rating: 4.4,
        stock: 18,
        seller: "Laptop Hub",
        userId: "SELLER007"
    },

    {
        name: "Acer Aspire Lite 15",
        description: "Affordable laptop with reliable performance for daily computing.",
        category: "Laptops",
        brand: "Acer",
        price: 47999,
        originalPrice: 54999,
        image: "https://images.unsplash.com/photo-1517336714739-489689fd1ca8",
        rating: 4.3,
        stock: 24,
        seller: "Laptop Hub",
        userId: "SELLER007"
    },

    {
        name: "ASUS ExpertBook B1",
        description: "Professional business laptop built for office productivity.",
        category: "Laptops",
        brand: "ASUS",
        price: 61999,
        originalPrice: 69999,
        image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed",
        rating: 4.5,
        stock: 15,
        seller: "Tech World",
        userId: "SELLER002"
    },

    {
        name: "Lenovo V15 Business",
        description: "Reliable business notebook with a practical professional design.",
        category: "Laptops",
        brand: "Lenovo",
        price: 55999,
        originalPrice: 62999,
        image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef",
        rating: 4.2,
        stock: 20,
        seller: "Laptop Hub",
        userId: "SELLER007"
    },

    {
        name: "HP Envy x360 14",
        description: "Premium convertible laptop with touchscreen flexibility.",
        category: "Laptops",
        brand: "HP",
        price: 89999,
        originalPrice: 99999,
        image: "https://images.unsplash.com/photo-1602080858428-57174f9431cf",
        rating: 4.7,
        stock: 9,
        seller: "HP Store",
        userId: "SELLER009"
    },

    {
        name: "Acer Nitro V Gaming",
        description: "Gaming laptop designed for smooth gameplay and entertainment.",
        category: "Laptops",
        brand: "Acer",
        price: 87999,
        originalPrice: 97999,
        image: "https://images.unsplash.com/photo-1593642702749-b7d2a804fbcf",
        rating: 4.6,
        stock: 12,
        seller: "Gaming Zone",
        userId: "SELLER005"
    },

    {
        name: "Lenovo Yoga Slim 6",
        description: "Premium lightweight laptop with excellent portability.",
        category: "Laptops",
        brand: "Lenovo",
        price: 79999,
        originalPrice: 89999,
        image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45",
        rating: 4.7,
        stock: 11,
        seller: "Tech World",
        userId: "SELLER002"
    },

    {
        name: "HP ProBook 440 G10",
        description: "Business-focused laptop designed for professional users.",
        category: "Laptops",
        brand: "HP",
        price: 72999,
        originalPrice: 81999,
        image: "https://images.unsplash.com/photo-1593642532400-2682810df593",
        rating: 4.5,
        stock: 14,
        seller: "HP Store",
        userId: "SELLER009"
    },

    {
        name: "Acer Extensa 15",
        description: "Practical everyday notebook for study and office work.",
        category: "Laptops",
        brand: "Acer",
        price: 42999,
        originalPrice: 48999,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
        rating: 4.1,
        stock: 28,
        seller: "Laptop Hub",
        userId: "SELLER007"
    },

    {
        name: "ASUS ROG Strix G16",
        description: "High-performance gaming laptop for demanding applications.",
        category: "Laptops",
        brand: "ASUS",
        price: 129999,
        originalPrice: 144999,
        image: "https://images.unsplash.com/photo-1602080858428-57174f9431cf",
        rating: 4.9,
        stock: 7,
        seller: "Gaming Zone",
        userId: "SELLER005"
    },

    {
        name: "Lenovo ThinkBook 16",
        description: "Professional laptop with a large display for productivity.",
        category: "Laptops",
        brand: "Lenovo",
        price: 74999,
        originalPrice: 83999,
        image: "https://images.unsplash.com/photo-1517336714739-489689fd1ca8",
        rating: 4.6,
        stock: 13,
        seller: "Tech World",
        userId: "SELLER002"
    },

    {
        name: "HP Victus 15 Gaming",
        description: "Gaming notebook with powerful hardware and modern graphics.",
        category: "Laptops",
        brand: "HP",
        price: 94999,
        originalPrice: 104999,
        image: "https://images.unsplash.com/photo-1593642702749-b7d2a804fbcf",
        rating: 4.7,
        stock: 8,
        seller: "Gaming Zone",
        userId: "SELLER005"
    },

    {
        name: "Acer Chromebook Plus",
        description: "Fast and lightweight Chromebook for everyday online tasks.",
        category: "Laptops",
        brand: "Acer",
        price: 38999,
        originalPrice: 44999,
        image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef",
        rating: 4.2,
        stock: 21,
        seller: "Laptop Hub",
        userId: "SELLER007"
    },

    {
        name: "ASUS Vivobook S 14",
        description: "Modern slim laptop with strong performance and portability.",
        category: "Laptops",
        brand: "ASUS",
        price: 83999,
        originalPrice: 92999,
        image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed",
        rating: 4.7,
        stock: 10,
        seller: "Tech World",
        userId: "SELLER002"
    },

    {
        name: "MSI Prestige 16 AI",
        description: "Premium productivity laptop designed for creative professionals.",
        category: "Laptops",
        brand: "MSI",
        price: 109999,
        originalPrice: 124999,
        image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45",
        rating: 4.8,
        stock: 6,
        seller: "Tech World",
        userId: "SELLER002"
    },

    {
        name: "Samsung Galaxy Book4",
        description: "Slim premium notebook with a sharp display and modern design.",
        category: "Laptops",
        brand: "Samsung",
        price: 91999,
        originalPrice: 102999,
        image: "https://images.unsplash.com/photo-1593642532400-2682810df593",
        rating: 4.6,
        stock: 9,
        seller: "Smart Store",
        userId: "ADMIN001"
    },


    // =================================================
    // MOBILES - 16 PRODUCTS
    // =================================================

    {
        name: "iPhone 14 Plus",
        description: "Large-screen Apple smartphone with excellent performance.",
        category: "Mobiles",
        brand: "Apple",
        price: 62999,
        originalPrice: 72999,
        image: "https://images.unsplash.com/photo-1591337676887-a217a6970a8a",
        rating: 4.8,
        stock: 14,
        seller: "Apple Hub",
        userId: "SELLER003"
    },

    {
        name: "Samsung Galaxy S23 FE",
        description: "Premium smartphone with AMOLED display and versatile cameras.",
        category: "Mobiles",
        brand: "Samsung",
        price: 44999,
        originalPrice: 52999,
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97",
        rating: 4.6,
        stock: 22,
        seller: "Smart Store",
        userId: "ADMIN001"
    },

    {
        name: "Google Pixel 8a",
        description: "Compact smartphone with intelligent camera and clean Android experience.",
        category: "Mobiles",
        brand: "Google",
        price: 52999,
        originalPrice: 58999,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
        rating: 4.7,
        stock: 18,
        seller: "Tech World",
        userId: "SELLER002"
    },

    {
        name: "OnePlus Nord 4",
        description: "Powerful mid-range smartphone with fast charging and smooth display.",
        category: "Mobiles",
        brand: "OnePlus",
        price: 29999,
        originalPrice: 34999,
        image: "https://images.unsplash.com/photo-1556656793-08538906a9f8",
        rating: 4.5,
        stock: 26,
        seller: "Mobile World",
        userId: "SELLER010"
    },

    {
        name: "Nothing Phone 2a",
        description: "Stylish smartphone with distinctive design and smooth performance.",
        category: "Mobiles",
        brand: "Nothing",
        price: 24999,
        originalPrice: 28999,
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97",
        rating: 4.4,
        stock: 30,
        seller: "Mobile World",
        userId: "SELLER010"
    },

    {
        name: "Nothing Phone 2",
        description: "Premium smartphone with transparent-inspired modern design.",
        category: "Mobiles",
        brand: "Nothing",
        price: 39999,
        originalPrice: 44999,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
        rating: 4.6,
        stock: 16,
        seller: "Mobile World",
        userId: "SELLER010"
    },

    {
        name: "Realme GT 6",
        description: "Performance-focused smartphone with fast processor and charging.",
        category: "Mobiles",
        brand: "Realme",
        price: 40999,
        originalPrice: 45999,
        image: "https://images.unsplash.com/photo-1591337676887-a217a6970a8a",
        rating: 4.6,
        stock: 19,
        seller: "Mobile World",
        userId: "SELLER010"
    },

    {
        name: "Realme Narzo 70 Pro",
        description: "Feature-rich 5G smartphone with vibrant display.",
        category: "Mobiles",
        brand: "Realme",
        price: 22999,
        originalPrice: 26999,
        image: "https://images.unsplash.com/photo-1556656793-08538906a9f8",
        rating: 4.3,
        stock: 32,
        seller: "Mobile World",
        userId: "SELLER010"
    },

    {
        name: "Vivo X100",
        description: "Premium camera smartphone with powerful performance.",
        category: "Mobiles",
        brand: "Vivo",
        price: 63999,
        originalPrice: 69999,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
        rating: 4.8,
        stock: 12,
        seller: "Mobile World",
        userId: "SELLER010"
    },

    {
        name: "Vivo Y200",
        description: "Affordable 5G smartphone with stylish design and AMOLED display.",
        category: "Mobiles",
        brand: "Vivo",
        price: 21999,
        originalPrice: 24999,
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97",
        rating: 4.3,
        stock: 34,
        seller: "Mobile World",
        userId: "SELLER010"
    },

    {
        name: "Oppo Find X7",
        description: "Premium smartphone with advanced camera technology.",
        category: "Mobiles",
        brand: "Oppo",
        price: 69999,
        originalPrice: 76999,
        image: "https://images.unsplash.com/photo-1591337676887-a217a6970a8a",
        rating: 4.7,
        stock: 10,
        seller: "Mobile World",
        userId: "SELLER010"
    },

    {
        name: "Oppo A79 5G",
        description: "Affordable 5G smartphone with large display and reliable battery.",
        category: "Mobiles",
        brand: "Oppo",
        price: 17999,
        originalPrice: 20999,
        image: "https://images.unsplash.com/photo-1556656793-08538906a9f8",
        rating: 4.2,
        stock: 38,
        seller: "Mobile World",
        userId: "SELLER010"
    },

    {
        name: "Poco X6 Pro",
        description: "High-performance smartphone designed for gaming and entertainment.",
        category: "Mobiles",
        brand: "Poco",
        price: 26999,
        originalPrice: 30999,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
        rating: 4.6,
        stock: 25,
        seller: "Mobile World",
        userId: "SELLER010"
    },

    {
        name: "Redmi Note 13 Pro Plus",
        description: "Premium Redmi smartphone with high-resolution camera.",
        category: "Mobiles",
        brand: "Redmi",
        price: 31999,
        originalPrice: 36999,
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97",
        rating: 4.5,
        stock: 27,
        seller: "Mobile World",
        userId: "SELLER010"
    },

    {
        name: "Motorola Edge 40 Neo",
        description: "Slim 5G smartphone with vibrant display and clean software.",
        category: "Mobiles",
        brand: "Motorola",
        price: 24999,
        originalPrice: 29999,
        image: "https://images.unsplash.com/photo-1556656793-08538906a9f8",
        rating: 4.4,
        stock: 29,
        seller: "Mobile World",
        userId: "SELLER010"
    },

    {
        name: "Samsung Galaxy M55",
        description: "Feature-rich Samsung smartphone with large AMOLED display.",
        category: "Mobiles",
        brand: "Samsung",
        price: 27999,
        originalPrice: 32999,
        image: "https://images.unsplash.com/photo-1591337676887-a217a6970a8a",
        rating: 4.5,
        stock: 31,
        seller: "Smart Store",
        userId: "ADMIN001"
    },


    // =================================================
    // ACCESSORIES - 16 PRODUCTS
    // =================================================

    {
        name: "JBL Tune 770NC",
        description: "Wireless noise-cancelling headphones for music and travel.",
        category: "Accessories",
        brand: "JBL",
        price: 5999,
        originalPrice: 7999,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
        rating: 4.6,
        stock: 25,
        seller: "Smart Store",
        userId: "ADMIN001"
    },

    {
        name: "Anker Soundcore Q20i",
        description: "Comfortable wireless headphones with active noise cancellation.",
        category: "Accessories",
        brand: "Anker",
        price: 4999,
        originalPrice: 6499,
        image: "https://images.unsplash.com/photo-1484704849700-f032a568e944",
        rating: 4.5,
        stock: 20,
        seller: "Smart Store",
        userId: "ADMIN001"
    },

    {
        name: "Logitech MX Master 3S",
        description: "Advanced wireless mouse designed for professional productivity.",
        category: "Accessories",
        brand: "Logitech",
        price: 8499,
        originalPrice: 9999,
        image: "https://images.unsplash.com/photo-1527814050087-3793815479db",
        rating: 4.8,
        stock: 15,
        seller: "Smart Store",
        userId: "ADMIN001"
    },

    {
        name: "Logitech K380 Keyboard",
        description: "Compact wireless keyboard suitable for laptops and tablets.",
        category: "Accessories",
        brand: "Logitech",
        price: 2999,
        originalPrice: 3999,
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
        rating: 4.5,
        stock: 32,
        seller: "Smart Store",
        userId: "ADMIN001"
    },

    {
        name: "Razer DeathAdder Essential",
        description: "Ergonomic gaming mouse with accurate optical tracking.",
        category: "Accessories",
        brand: "Razer",
        price: 2499,
        originalPrice: 3299,
        image: "https://images.unsplash.com/photo-1527814050087-3793815479db",
        rating: 4.6,
        stock: 28,
        seller: "Gaming Zone",
        userId: "SELLER005"
    },

    {
        name: "Razer BlackWidow V3",
        description: "Mechanical gaming keyboard designed for responsive gameplay.",
        category: "Accessories",
        brand: "Razer",
        price: 8999,
        originalPrice: 10999,
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
        rating: 4.7,
        stock: 14,
        seller: "Gaming Zone",
        userId: "SELLER005"
    },

    {
        name: "Belkin 65W USB-C Charger",
        description: "Fast USB-C charger for laptops, tablets and smartphones.",
        category: "Accessories",
        brand: "Belkin",
        price: 3999,
        originalPrice: 4999,
        image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1",
        rating: 4.4,
        stock: 35,
        seller: "Smart Store",
        userId: "ADMIN001"
    },

    {
        name: "Anker PowerCore 20000",
        description: "High-capacity portable power bank for everyday charging.",
        category: "Accessories",
        brand: "Anker",
        price: 2999,
        originalPrice: 3999,
        image: "https://images.unsplash.com/photo-1609592424714-3a0c9d8f9f3e",
        rating: 4.5,
        stock: 30,
        seller: "Smart Store",
        userId: "ADMIN001"
    },

    {
        name: "SanDisk Extreme 1TB SSD",
        description: "Portable high-speed SSD for storing photos, videos and files.",
        category: "Accessories",
        brand: "SanDisk",
        price: 8999,
        originalPrice: 10999,
        image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b",
        rating: 4.8,
        stock: 17,
        seller: "Tech World",
        userId: "SELLER002"
    },

    {
        name: "Kingston DataTraveler 128GB",
        description: "Compact USB flash drive for convenient file storage.",
        category: "Accessories",
        brand: "Kingston",
        price: 899,
        originalPrice: 1299,
        image: "https://images.unsplash.com/photo-1625842268584-8f3296236761",
        rating: 4.3,
        stock: 50,
        seller: "Smart Store",
        userId: "ADMIN001"
    },

    {
        name: "TP-Link WiFi 6 Router",
        description: "High-speed wireless router for reliable home connectivity.",
        category: "Accessories",
        brand: "TP-Link",
        price: 4499,
        originalPrice: 5499,
        image: "https://images.unsplash.com/photo-1606904825846-647eb07f5be2",
        rating: 4.5,
        stock: 22,
        seller: "Tech World",
        userId: "SELLER002"
    },

];


// =====================================================
// SEED DATABASE
// =====================================================

const seedProducts = async () => {

    try {

        console.log("🔌 Connecting to MongoDB...");

        await mongoose.connect(process.env.MONGO_URI);

        console.log("✅ MongoDB connected");


        // Remove old products
        await Product.deleteMany({});

        console.log("🗑️ Old products removed");
        // Remove old products
        await Product.deleteMany({});

        // Insert 160 products
        const insertedProducts = await Product.insertMany(products);

        console.log("✅ Products inserted successfully");

        console.log(`📦 Total Products: ${insertedProducts.length}`);


        // Category count
        const categoryCounts = {};

        insertedProducts.forEach(product => {

            if (!categoryCounts[product.category]) {

                categoryCounts[product.category] = 0;

            }

            categoryCounts[product.category]++;

        });


        console.log("\n📊 Products by Category:");

        Object.entries(categoryCounts).forEach(
            ([category, count]) => {

                console.log(`   ${category}: ${count}`);

            }
        );


        console.log("\n🎉 Product seeding completed successfully!");

    } catch (error) {

        console.error("❌ Error seeding products:");
        console.error(error.message);

    } finally {

        await mongoose.connection.close();

        console.log("🔌 MongoDB connection closed");

    }

};


// =====================================================
// RUN
// =====================================================

seedProducts();