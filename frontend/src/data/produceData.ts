// data/produceData.ts

export interface NutritionSpecs {
  calories: string;
  protein: string;
  fiber: string;
  vitaminA: string;
  vitaminK: string;
  folate: string;
}

export interface ProduceItem {
  id: number;
  category: string;
  title: string;
  description: string;
  image: string;
  slug: string;
  nutrition?: NutritionSpecs;
}

// Helper to match the slug generation in your frontend
export const generateSlug = (title: string) => 
  title.toLowerCase()
    .replace(/’/g, '')      // Remove apostrophes
    .replace(/\(/g, '')     // Remove opening parenthesis
    .replace(/\)/g, '')     // Remove closing parenthesis
    .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric chars with hyphen
    .replace(/(^-|-$)+/g, '');   // Remove leading/trailing hyphens

export const produceData: ProduceItem[] = [
  // --- LEAFY GREENS ---
  {
    id: 1,
    category: "LEAFY GREENS",
    title: "Specialty Chef’s Mix (Custom)",
    description: "A wholesome mix of leafy greens combining crunch, color, and refreshing aroma.",
    image: "/images/ourProduce/Lg-mix.png",
    slug: generateSlug("Specialty Chef’s Mix (Custom)"),
    // No specific data for custom mix in images
  },
  {
    id: 2,
    category: "LEAFY GREENS",
    title: "Romaine Lettuce",
    description: "Crisp, sturdy leaves with a mild, refreshing flavor.",
    image: "/images/ourProduce/Lg-romlet.png",
    slug: generateSlug("Romaine Lettuce"),
    nutrition: {
      calories: "17 kcal",
      protein: "1.2g",
      fiber: "2.1g",
      vitaminA: "174% DV",
      vitaminK: "85% DV",
      folate: "34% DV",
    }
  },
  {
    id: 3,
    category: "LEAFY GREENS",
    title: "Kale",
    description: "Nutrient-dense leafy green with a hearty, earthy taste.",
    image: "/images/ourProduce/Lg-kale.png",
    slug: generateSlug("Kale"),
    nutrition: {
      calories: "35 kcal",
      protein: "2.9g",
      fiber: "4.1g",
      vitaminA: "206% DV",
      vitaminK: "684% DV",
      folate: "15% DV",
    }
  },
  {
    id: 4,
    category: "LEAFY GREENS",
    title: "Red Leaf Lettuce",
    description: "Tender leaves with a slightly sweet, delicate flavor.",
    image: "/images/ourProduce/Lg-redleaf.png",
    slug: generateSlug("Red Leaf Lettuce"),
    nutrition: {
      calories: "16 kcal",
      protein: "1.3g",
      fiber: "1.1g",
      vitaminA: "127% DV",
      vitaminK: "209% DV",
      folate: "10% DV",
    }
  },
  {
    id: 5,
    category: "LEAFY GREENS",
    title: "Green Leaf Lettuce",
    description: "Soft, leafy texture with a mild and fresh taste.",
    image: "/images/ourProduce/Lg-greenleaf.png",
    slug: generateSlug("Green Leaf Lettuce"),
    nutrition: {
      calories: "15 kcal",
      protein: "1.4g",
      fiber: "1.3g",
      vitaminA: "90% DV",
      vitaminK: "128% DV",
      folate: "11% DV",
    }
  },
  {
    id: 6,
    category: "LEAFY GREENS",
    title: "Basil",
    description: "Aromatic herb with a sweet, peppery fragrance and vibrant flavor.",
    image: "/images/ourProduce/Lg-basil.png",
    slug: generateSlug("Basil"),
    nutrition: {
      calories: "22 kcal",
      protein: "3.2g",
      fiber: "1.6g",
      vitaminA: "105% DV",
      vitaminK: "414% DV",
      folate: "15% DV",
    }
  },
  {
    id: 7,
    category: "LEAFY GREENS",
    title: "Butter Head Lettuce",
    description: "A soft, tender leafy green with a mild, buttery flavor, perfect for fresh salads and wraps.",
    image: "/images/ourProduce/Lg-butterhead.png",
    slug: generateSlug("Butter Head Lettuce"),
    nutrition: {
      calories: "17 kcal",
      protein: "1.2g",
      fiber: "2.1g",
      vitaminA: "174% DV",
      vitaminK: "85% DV",
      folate: "34% DV",
    }
  },
  {
    id: 8,
    category: "LEAFY GREENS",
    title: "Bok Choy",
    description: "A crisp, nutritious leafy green with juicy stalks and tender leaves, commonly used in stir-fries and soups.",
    image: "/images/ourProduce/Lg-bokChoy.png",
    slug: generateSlug("Bok Choy"),
    nutrition: {
      calories: "13 kcal",
      protein: "1.5g",
      fiber: "1.0g",
      vitaminA: "89% DV",
      vitaminK: "45% DV",
      folate: "17% DV",
    }
  },

  // --- BABY GREENS ---
  {
    id: 9,
    category: "LEAFY GREENS",
    title: "Spinach",
    description: "Soft, nutrient-rich leaves with a mild, earthy flavor.",
    image: "/images/ourProduce/Bg-Spinach.png",
    slug: generateSlug("Spinach"),
    nutrition: {
      calories: "23 kcal",
      protein: "2.9g",
      fiber: "2.2g",
      vitaminA: "56% DV",
      vitaminK: "406% DV",
      folate: "49% DV",
    }
  },
  {
    id: 10,
    category: "LEAFY GREENS",
    title: "Baby Kale",
    description: "Hearty, dark green leaves packed with bold, earthy taste.",
    image: "/images/ourProduce/Bg-babykale.png",
    slug: generateSlug("Baby Kale"),
    nutrition: {
      calories: "33 kcal",
      protein: "3.0g",
      fiber: "2.0g",
      vitaminA: "120% DV",
      vitaminK: "390% DV",
      folate: "13% DV",
    }
  },
  {
    id: 11,
    category: "LEAFY GREENS",
    title: "Sorrel Vein Leaf",
    description: "Bright, tangy leaves with a refreshing, lemony bite.",
    image: "/images/ourProduce/Bg-sorrel.png",
    slug: generateSlug("Sorrel Vein Leaf"),
    nutrition: {
      calories: "22 kcal",
      protein: "3.2g",
      fiber: "1.6g",
      vitaminA: "105% DV",
      vitaminK: "414% DV",
      folate: "15% DV",
    }
  },

  // --- SPECIALTY HERBS & FLOWERS ---
  { 
    id: 12, 
    category: "SPECIALTY HERBS", 
    title: "Thai Basil", 
    description: "A fragrant specialty herb with a spicy, anise-like flavor.", 
    image: "/images/ourProduce/Sp-thaibasil.png", 
    slug: generateSlug("Thai Basil"),
    nutrition: { calories: "30 kcal", protein: "3.0g", fiber: "2.0g", vitaminA: "75% DV", vitaminK: "170% DV", folate: "30% DV" }
  },
  { 
    id: 13, 
    category: "SPECIALTY HERBS", 
    title: "Dill", 
    description: "A delicate specialty herb with feathery leaves and a fresh, slightly tangy flavor.", 
    image: "/images/ourProduce/Sp-Dilli.png", 
    slug: generateSlug("Dill"),
    nutrition: { calories: "28 kcal", protein: "3.0g", fiber: "2.4g", vitaminA: "85% DV", vitaminK: "140% DV", folate: "30% DV" }
  },
  { 
    id: 14, 
    category: "SPECIALTY HERBS", 
    title: "Lemon Balm", 
    description: "A refreshing specialty herb with a gentle lemon aroma.", 
    image: "/images/ourProduce/Sp-lemon.png", 
    slug: generateSlug("Lemon Balm"),
    nutrition: { calories: "29 kcal", protein: "2.8g", fiber: "2.0g", vitaminA: "85% DV", vitaminK: "150% DV", folate: "25% DV" }
  },
  { 
    id: 15, 
    category: "SPECIALTY HERBS", 
    title: "Sorrel", 
    description: "A vibrant specialty herb with tender leaves and a sharp, lemony taste.", 
    image: "/images/ourProduce/Sp-sorrel.png", 
    slug: generateSlug("Sorrel"),
    nutrition: { calories: "30 kcal", protein: "3.0g", fiber: "2.1g", vitaminA: "95% DV", vitaminK: "150% DV", folate: "25% DV" }
  },
  { 
    id: 16, 
    category: "SPECIALTY HERBS", 
    title: "Italian Basil", 
    description: "A classic specialty herb with sweet, aromatic leaves.", 
    image: "/images/ourProduce/Sp-italian.png", 
    slug: generateSlug("Italian Basil"),
    nutrition: { calories: "22 kcal", protein: "3.2g", fiber: "1.6g", vitaminA: "105% DV", vitaminK: "414% DV", folate: "15% DV" } // Using standard basil data
  },
  { 
    id: 17, 
    category: "EDIBLE FLOWERS", 
    title: "Nasturtium", 
    description: "Bright, peppery edible flowers with a spicy, tangy taste.", 
    image: "/images/ourProduce/Ef-nasturtium.png", 
    slug: generateSlug("Nasturtium"),
    nutrition: { calories: "37 kcal", protein: "3.5g", fiber: "2.6g", vitaminA: "130% DV", vitaminK: "180% DV", folate: "35% DV" }
  },
  { 
    id: 18, 
    category: "EDIBLE FLOWERS", 
    title: "Viola", 
    description: "Delicate edible flowers with a mild, slightly sweet flavor.", 
    image: "/images/ourProduce/Ef-viola.png", 
    slug: generateSlug("Viola")
  },
  { 
    id: 19, 
    category: "EDIBLE FLOWERS", 
    title: "Marigold Petals", 
    description: "Colorful edible petals with a slightly citrusy, mildly bitter flavor.", 
    image: "/images/ourProduce/Ef-mari.png", 
    slug: generateSlug("Marigold Petals")
  },
];