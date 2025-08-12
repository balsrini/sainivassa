// Data for the apartments
const apartments = [
    {
        id: 1,
        name: "Luxury Suite",
        description: "Spacious luxury suite with panoramic city views and premium amenities.",
        bedrooms: 2,
        bathrooms: 2,
        area: "1200 sq ft",
        price: "$250 per night",
        amenities: ["Air Conditioning", "King Size Bed", "Mini Bar", "Jacuzzi"],
        image: "images/apartment1.jpg",
        images: [
            "images/apartment1_1.jpg",
            "images/apartment1_2.jpg",
            "images/apartment1_3.jpg",
            "images/apartment1_4.jpg",
            "images/apartment1_5.jpg",
            "images/apartment1_6.jpg",
            "images/apartment1_7.jpg",
            "images/apartment1_8.jpg"
        ],
        longDescription: "Experience luxury living at its finest in our spacious Luxury Suite. This premium accommodation features panoramic city views, high-end furnishings, and all the amenities you need for a comfortable stay. The suite includes a master bedroom with a king-size bed, a second bedroom with twin beds, two full bathrooms with premium fixtures, a fully equipped kitchen, and a spacious living area perfect for relaxation or entertaining guests."
    },
    {
        id: 2,
        name: "Executive Studio",
        description: "Modern studio apartment perfect for business travelers with dedicated workspace.",
        bedrooms: 1,
        bathrooms: 1,
        area: "800 sq ft",
        price: "$180 per night",
        amenities: ["Work Desk", "High-Speed Internet", "Coffee Machine", "Smart TV"],
        image: "images/apartment2.jpg",
        images: [
            "images/apartment2_1.jpg",
            "images/apartment2_2.jpg",
            "images/apartment2_3.jpg",
            "images/apartment2_4.jpg",
            "images/apartment2_5.jpg",
            "images/apartment2_6.jpg",
            "images/apartment2_7.jpg",
            "images/apartment2_8.jpg"
        ],
        longDescription: "Our Executive Studio is designed with the business traveler in mind. This modern apartment features a dedicated workspace with ergonomic chair, high-speed internet, and ample lighting. After a productive day, relax in the comfortable queen-size bed or unwind in the stylish living area. The apartment also includes a fully equipped kitchenette, a bathroom with premium toiletries, and smart home features for your convenience."
    },
    {
        id: 3,
        name: "Family Apartment",
        description: "Comfortable family apartment with separate kids' room and entertainment area.",
        bedrooms: 3,
        bathrooms: 2,
        area: "1500 sq ft",
        price: "$320 per night",
        amenities: ["Kids Play Area", "Full Kitchen", "Washing Machine", "Game Console"],
        image: "images/apartment3.jpg",
        images: [
            "images/apartment3_1.jpg",
            "images/apartment3_2.jpg",
            "images/apartment3_3.jpg",
            "images/apartment3_4.jpg",
            "images/apartment3_5.jpg",
            "images/apartment3_6.jpg",
            "images/apartment3_7.jpg",
            "images/apartment3_8.jpg"
        ],
        longDescription: "Our Family Apartment is the perfect choice for families looking for a comfortable home away from home. This spacious accommodation features three bedrooms, including a master bedroom and a dedicated kids' room with fun decor. The entertainment area includes a game console and family-friendly board games. The apartment also offers a full kitchen for preparing family meals, two bathrooms, and a washing machine for your convenience."
    },
    {
        id: 4,
        name: "Penthouse Suite",
        description: "Exclusive penthouse with private terrace and stunning 360° views of the city.",
        bedrooms: 3,
        bathrooms: 3,
        area: "2000 sq ft",
        price: "$450 per night",
        amenities: ["Private Terrace", "Premium Sound System", "Wine Cooler", "Walk-in Closet"],
        image: "images/apartment4.jpg",
        images: [
            "images/apartment4_1.jpg",
            "images/apartment4_2.jpg",
            "images/apartment4_3.jpg",
            "images/apartment4_4.jpg",
            "images/apartment4_5.jpg",
            "images/apartment4_6.jpg",
            "images/apartment4_7.jpg",
            "images/apartment4_8.jpg"
        ],
        longDescription: "Experience the height of luxury in our exclusive Penthouse Suite. Located on the top floor, this premium accommodation offers stunning 360-degree views of the city through floor-to-ceiling windows. The suite features three elegantly appointed bedrooms, three luxurious bathrooms, a gourmet kitchen, and a spacious living area with a premium sound system. The highlight is the private terrace where you can relax and enjoy the breathtaking skyline."
    },
    {
        id: 5,
        name: "Cozy Studio",
        description: "Compact and cozy studio perfect for solo travelers or couples on a budget.",
        bedrooms: 1,
        bathrooms: 1,
        area: "600 sq ft",
        price: "$120 per night",
        amenities: ["Queen Size Bed", "Kitchenette", "Smart TV", "Work Corner"],
        image: "images/apartment5.jpg",
        images: [
            "images/apartment5_1.jpg",
            "images/apartment5_2.jpg",
            "images/apartment5_3.jpg",
            "images/apartment5_4.jpg",
            "images/apartment5_5.jpg",
            "images/apartment5_6.jpg",
            "images/apartment5_7.jpg",
            "images/apartment5_8.jpg"
        ],
        longDescription: "Our Cozy Studio offers comfort and convenience at an affordable price. Perfect for solo travelers or couples, this compact apartment makes efficient use of space without compromising on amenities. The studio features a comfortable queen-size bed, a well-equipped kitchenette for preparing simple meals, a smart TV for entertainment, and a dedicated work corner. Despite its compact size, the studio feels spacious thanks to its thoughtful layout and design."
    },
    {
        id: 6,
        name: "Garden Apartment",
        description: "Ground floor apartment with private garden access and outdoor seating area.",
        bedrooms: 2,
        bathrooms: 1,
        area: "1100 sq ft",
        price: "$220 per night",
        amenities: ["Private Garden", "BBQ Area", "Outdoor Furniture", "Full Kitchen"],
        image: "images/apartment6.jpg",
        images: [
            "images/apartment6_1.jpg",
            "images/apartment6_2.jpg",
            "images/apartment6_3.jpg",
            "images/apartment6_4.jpg",
            "images/apartment6_5.jpg",
            "images/apartment6_6.jpg",
            "images/apartment6_7.jpg",
            "images/apartment6_8.jpg"
        ],
        longDescription: "Our Garden Apartment offers a unique outdoor living experience in the heart of the city. This ground floor accommodation features direct access to a private garden area with outdoor seating and a BBQ area, perfect for al fresco dining or relaxing in the fresh air. Inside, the apartment offers two comfortable bedrooms, a full bathroom, a well-equipped kitchen, and a cozy living area. Ideal for those who appreciate both indoor and outdoor living spaces."
    },
    {
        id: 7,
        name: "Urban Loft",
        description: "Contemporary loft-style apartment with high ceilings and industrial design elements.",
        bedrooms: 1,
        bathrooms: 1,
        area: "950 sq ft",
        price: "$200 per night",
        amenities: ["High Ceilings", "Designer Furniture", "Bluetooth Speaker System", "Espresso Machine"],
        image: "images/apartment7.jpg",
        images: [
            "images/apartment7_1.jpg",
            "images/apartment7_2.jpg",
            "images/apartment7_3.jpg",
            "images/apartment7_4.jpg",
            "images/apartment7_5.jpg",
            "images/apartment7_6.jpg",
            "images/apartment7_7.jpg",
            "images/apartment7_8.jpg"
        ],
        longDescription: "Step into the stylish Urban Loft, a contemporary apartment featuring high ceilings and industrial design elements that create a spacious, airy feel. This trendy accommodation showcases designer furniture, exposed brick walls, and modern artwork. The loft includes a comfortable sleeping area, a sleek bathroom, a fully equipped kitchen with an espresso machine, and a living area with a Bluetooth speaker system. Perfect for those who appreciate modern design and urban aesthetics."
    },
    {
        id: 8,
        name: "Deluxe Suite",
        description: "Elegant deluxe suite with separate living area and premium furnishings.",
        bedrooms: 1,
        bathrooms: 1,
        area: "1000 sq ft",
        price: "$230 per night",
        amenities: ["Living Room", "Premium Bedding", "Bathtub", "Mini Bar"],
        image: "images/apartment8.jpg",
        images: [
            "images/apartment8_1.jpg",
            "images/apartment8_2.jpg",
            "images/apartment8_3.jpg",
            "images/apartment8_4.jpg",
            "images/apartment8_5.jpg",
            "images/apartment8_6.jpg",
            "images/apartment8_7.jpg",
            "images/apartment8_8.jpg"
        ],
        longDescription: "Our Deluxe Suite offers an elegant retreat with a touch of luxury. This refined accommodation features a separate bedroom with premium bedding and a spacious living area with sophisticated furnishings. The marble bathroom includes a deep soaking bathtub and premium toiletries. The suite also offers a well-stocked mini bar, a coffee maker, and a dining area. Every detail has been carefully considered to create a comfortable and luxurious environment."
    },
    {
        id: 9,
        name: "Skyline View Apartment",
        description: "High-floor apartment offering breathtaking skyline views through floor-to-ceiling windows.",
        bedrooms: 2,
        bathrooms: 2,
        area: "1300 sq ft",
        price: "$280 per night",
        amenities: ["Floor-to-Ceiling Windows", "Balcony", "Fully Equipped Kitchen", "Home Theater System"],
        image: "images/apartment9.jpg",
        images: [
            "images/apartment9_1.jpg",
            "images/apartment9_2.jpg",
            "images/apartment9_3.jpg",
            "images/apartment9_4.jpg",
            "images/apartment9_5.jpg",
            "images/apartment9_6.jpg",
            "images/apartment9_7.jpg",
            "images/apartment9_8.jpg"
        ],
        longDescription: "The Skyline View Apartment offers a spectacular panoramic view of the city through its floor-to-ceiling windows. Located on a high floor, this premium accommodation features two bedrooms, two bathrooms, a fully equipped kitchen, and a spacious living area with a home theater system. Step out onto the private balcony to enjoy the fresh air and breathtaking views. The apartment's modern design and thoughtful amenities ensure a comfortable and memorable stay with an unmatched visual experience."
    }
];

// Made with Bob
