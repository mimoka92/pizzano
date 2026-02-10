export const menuData = {
    categories: [
        {
            title: "BURGERS",
            items: [
                { name: "1/4 Pounder", price: "5£", priceNote: "6.50£ with chips" },
                { name: "1/4 Pounder with Cheese", price: "5.50£", priceNote: "7£ with chips" },
                { name: "1/2 Pounder", price: "6£", priceNote: "7.50£ with chips" },
                { name: "1/2 Pounder with Cheese", price: "6.50£", priceNote: "8£ with chips" },
                { name: "Special Burger", price: "6£", priceNote: "7.50£ with chips" },
                { name: "Chicken Fillet Burger", price: "5.50£", priceNote: "7.50£ with chips" },
                { name: "Double Chicken Fillet Burger", price: "6.50£", priceNote: "8£ with chips" },
                { name: "Hawaiian Burger", price: "6£", priceNote: "7.50£ with chips" },
                { name: "Mixed Burger (Chicken & Beef)", price: "7£", priceNote: "8.50£ with chips" },
                { name: "Veggie Burger", price: "5£", priceNote: "6.50£ with chips" },
                { name: "Mega Burger (3/4 lb with Cheese)", price: "7.50£", priceNote: "8.50£ with chips" },
                { name: "Cheese & Bacon Burger", price: "6£", priceNote: "7.50£ with chips" },
                { name: "Cheese, Egg & Bacon ¼", price: "6.50£", priceNote: "8£ with chips" },
                { name: "Fish Burger", price: "5.50£", priceNote: "7£ with chips" },
                { name: "Zinger Burger", price: "6£", priceNote: "7.50£ with chips" },
            ]
        },
        {
            title: "KEBABS",
            items: [
                { name: "Doner Kebab", price: "7.90£", largePrice: "8.90£" },
                { name: "Doner in Bun", price: "6.50£", largePrice: null },
                { name: "Portion Doner Meat", price: "7.50£", largePrice: null },
                { name: "Doner Meat & Chips", price: "8.90£", largePrice: null },
                { name: "Chicken Doner", price: "7.90£", largePrice: "8.90£" },
                { name: "Chicken Doner Meat & Chips", price: "9£", largePrice: null },
                { name: "Mixed Doner Meat & Chips", price: "9.90£", largePrice: null },
            ]
        },
        {
            title: "CHICKEN",
            items: [
                { name: "6 pcs Nuggets", price: "5£", priceNote: "6.50£ with chips" },
                { name: "10 pcs Nuggets", price: "6.50£", priceNote: "7.50£ with chips" },
                { name: "Hot Wings (8 pcs)", price: "7.50£" },
                { name: "BBQ Chicken Wings (8 pcs)", price: "7.50£" },
                { name: "Hot Wings (10 pcs)", price: "-", priceNote: "9.50£ with chips" },
                { name: "Chicken Popcorn", price: "5£" },
                { name: "Chicken Strips (5 pcs)", price: "5£" },
            ]
        },
        {
            title: "WRAPS",
            items: [
                { name: "Doner Wrap", price: "7.50£" },
                { name: "Mexican Doner Wrap", price: "7.50£" },
                { name: "Chicken Doner Wrap", price: "7.90£" },
                { name: "Chicken Strip Wrap", price: "7£" },
                { name: "Mexican Chicken Wrap", price: "7£" },
                { name: "Mixed Doner Wrap", price: "8.90£" },
            ]
        },
        {
            title: "EXTRAS",
            items: [
                // Consolidated Chips Items
                { name: "Chips", price: "3£", largePrice: "3.50£" },
                { name: "Chips & Cheese", price: "3.50£", largePrice: "4£" }, // Calculated from "with cheese" notes
                { name: "Curly Fries", price: "4.50£" },
                { name: "Potato Wedges", price: "4.50£" },
                { name: "Scampi with Chips", price: "7.50£" },
                { name: "Chilli Con Carne With Chips", price: "7.50£" },
                { name: "Mozzarella Cheese Sticks (6pcs)", price: "5.50£" },
                { name: "Onion Rings", price: "4.50£" },
                { name: "Mixed Salad", price: "3£" },
                { name: "Coleslaw", price: "3£" },
                { name: "Curry", price: "2£" },
                { name: "Gravy", price: "2£" },
                { name: "Baked Beans", price: "2£" },
                { name: "Pot of Sauce", price: "0.90£" },
            ]
        },
        {
            title: "DRINKS",
            items: [
                { name: "Can", price: "1.50£" },
                { name: "Water", price: "1.20£" },
                { name: "Bottle (1.5l)", price: "3.50£" },
            ]
        },
        {
            title: "DESERTS",
            items: [
                { name: "Chocolate Fudge Cake", price: "3.50£" },
                { name: "Ben & Jerry’s", price: "6.50£" },
            ]
        }
    ]
};
