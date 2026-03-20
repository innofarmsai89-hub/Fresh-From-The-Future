// src/constants/cropsData.ts

// 1. Define the Shape of your Data (TypeScript Interface)
export interface CropData {
  id: string;
  name: string;
  heroImage: string;
  productDescription: {
    type: string;
    weight: string;
    shelfLife: string;
    bestBefore: string;
    description: string;
    features: string[];
    nutritionalInfo: Array<{ nutrient: string; value: string; per: string }>;
    storageTips: string[];
    image: string;
    mrp?: string;
    brandName?: string;
    batchNumber?: string;
    fssaiNumber?: string;
    packagingDate?: string;
    companyAddress?: string;
    packComposition?: Array<{ item: string; weight: string }>;
    howToUse?: string[];
  };
  liveImpact: {
    score: string;
    carbon: string;
    water: string;
    energy: string;
    health: string;
    image: string;
  };
  milestones: {
    sowing: {
      defaultDate: string;
      seedType: string;
      image: string;
      items?: Array<{ name: string; date: string }>;
    };
    transplant: {
      defaultDate: string;
      image: string;
      items?: Array<{ name: string; date: string }>;
    };
    harvest: {
      defaultDate: string;
      duration: string;
      batchId: string;
      method: string;
      yieldBoxes: string;
      headSize?: string;
      pesticide: string;
    };
  };
  environment: {
    temp: string;
    humidity: string;
    lighting: string;
    nutrients: string;
  };
}

// 2. The Database Object
export const CROPS_DATA: Record<string, CropData> = {
  'salad-mix-microgreens': {
    id: 'salad-mix-microgreens',
    name: 'Salad Mix with Microgreens',
    heroImage: 'https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture/fresh2/SaladMixMicrogreens.png',
    productDescription: {
      type: 'Salad Mix with Microgreens-Premium Hydroponic',
      weight: '150 g',
      shelfLife: '5 to 7 days if stored in 2-3 Degree Celsius temperature',
      bestBefore: '09/03/2026',
      description: 'Our Salad Mix with Microgreens – Premium Hydroponic (150g) is a carefully curated blend of fresh, hydroponically grown lettuces, exotic greens, and vibrant microgreens. Grown in a precision-controlled environment, each leaf is harvested at peak freshness to deliver exceptional taste, texture, and nutrition.\n\nThis premium mix includes Lollo Bionda, Lollo Rosso, Romaine, Frisée, Kale, Red Vein Sorrel, Swiss Chard, Bok Choy, and a nutrient-rich combination of Red Amaranthus, Red Radish, Red Cabbage, and Basil microgreens. The variety of textures — from crisp romaine to tender microgreens — makes it perfect for gourmet salads, wraps, sandwiches, and fine dining presentations.\n\nFresh, clean, and beyond organic — grown with precision and care for superior quality and consistency.',
      features: ['100% Pesticide-Free', 'Hydroponically Grown', 'AI-Monitored Growth', 'Climate Controlled', 'Non-GMO', 'Crisp & Fresh', 'Zero Pesticide & Beyond Organic'],
      nutritionalInfo: [
        { nutrient: 'Calories', value: '28 kcal', per: '100g' },
        { nutrient: 'Protein', value: '2.4 g', per: '100g' },
        { nutrient: 'Fiber', value: '2.6 g', per: '100g' },
        { nutrient: 'Vitamin A', value: '120% DV', per: '100g' },
        { nutrient: 'Vitamin C', value: '45% DV', per: '100g' },
        { nutrient: 'Vitamin K', value: '160% DV', per: '100g' },
        { nutrient: 'Folate', value: '22% DV', per: '100g' },
        { nutrient: 'Calcium', value: '8% DV', per: '100g' },
        { nutrient: 'Iron', value: '10% DV', per: '100g' },
        { nutrient: 'Potassium', value: '9% DV', per: '100g' },
      ],
      storageTips: [
        'Store refrigerated at 2–5°C',
        'Keep sealed in original packaging',
        'Wash before consumption',
        'Do not freeze',
        'Best consumed within 5 days of packing'
      ],
      image: '/images/display-page/Microgreen.jpg',
      mrp: 'Rs.195/-',
      brandName: 'Fresh From The Future',
      batchNumber: 'FFTFSMMG090326',
      fssaiNumber: '10826005000480',
      packagingDate: '09/03/2026',
      companyAddress: 'Fresh From The Future Pvt. Ltd., 4378 P, Sector 23, Palam Vihar, Gurgaon, Haryana-122017',
      packComposition: [
        { item: 'Lollo Bionda Lettuce', weight: '20g' },
        { item: 'Lollo Rosso Lettuce', weight: '25g' },
        { item: 'Romaine Lettuce', weight: '25g' },
        { item: 'Frisée Lettuce', weight: '10g' },
        { item: 'Kale', weight: '20g' },
        { item: 'Red Vein Sorrel', weight: '5g' },
        { item: 'Swiss Chard', weight: '10g' },
        { item: 'Bok Choy', weight: '10g' },
        { item: 'Red Amaranthus Microgreens', weight: '5g' },
        { item: 'Red Radish Microgreens', weight: '5g' },
        { item: 'Red Cabbage Microgreens', weight: '5g' },
        { item: 'Basil Microgreens', weight: '5g' },
      ],
      howToUse: [
        'Toss directly into a bowl for a fresh, ready-to-eat salad',
        'Add olive oil, lemon juice, or your favorite dressing',
        'Use as a base for protein bowls with chicken, tofu, or paneer',
        'Add into wraps, sandwiches, or burgers for extra crunch',
        'Garnish pizzas, pastas, and gourmet dishes',
        'Blend into smoothies for added nutrition',
        'Pair with fruits, nuts, and cheese for a wholesome salad'
      ]
    },
    liveImpact: {
      score: '98.14',
      carbon: '773.17',
      water: '2752.68',
      energy: '1610.76',
      health: '92.6',
      image: '/images/display-page/SaladMixMicrogreens.jpeg'
    },
    milestones: {
      sowing: {
        defaultDate: '10-Jan-26',
        seedType: 'Non GMO',
        image: 'https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture/fresh2/SaladMixMicrogreensSowing.png',
        items: [
          { name: 'Lollo Bionda Lettuce', date: '10-Jan-26' },
          { name: 'Lollo Rosso Lettuce', date: '10-Jan-26' },
          { name: 'Romaine Lettuce', date: '10-Jan-26' },
          { name: 'Frisee Lettuce', date: '10-Jan-26' },
          { name: 'Kale', date: '10-Jan-26' },
          { name: 'Sorrel Vein', date: '10-Jan-26' },
          { name: 'Swiss Chard', date: '10-Jan-26' },
          { name: 'BokChoy', date: '10-Jan-26' },
          { name: 'Microgreen Mix', date: '22-Feb-26' },
        ]
      },
      transplant: {
        defaultDate: '24-Jan-26',
        image: 'https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture/fresh2/SaladMixMicrogreensTransplant.png',
        items: [
          { name: 'Lollo Bionda Lettuce', date: '24-Jan-26' },
          { name: 'Lollo Rosso Lettuce', date: '24-Jan-26' },
          { name: 'Romaine Lettuce', date: '24-Jan-26' },
          { name: 'Frisee Lettuce', date: '24-Jan-26' },
          { name: 'Kale', date: '24-Jan-26' },
          { name: 'Sorrel Vein', date: '24-Jan-26' },
          { name: 'Swiss Chard', date: '24-Jan-26' },
          { name: 'BokChoy', date: '24-Jan-26' },
          { name: 'Microgreen Mix', date: 'N/A' },
        ]
      },
      harvest: {
        defaultDate: '09-Mar-26',
        duration: 'Multiple',
        batchId: 'FFTFSMMG090326',
        method: 'Hand-picked',
        yieldBoxes: 'Standard',
        pesticide: 'None'
      }
    },
    environment: {
      temp: '20–22°C (maintained 24/7)',
      humidity: '55–65% RH',
      lighting: 'Full-spectrum LED',
      nutrients: 'AI-adjusted ECM and pH'
    }
  },
  
  'salad-mix-cherry-tomatoes': {
    id: 'salad-mix-cherry-tomatoes',
    name: 'Salad Mix with Cherry Tomatoes',
    heroImage: 'https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture/fresh2/SaladMixCherryTomatoes.png',
    productDescription: {
      type: 'Salad Mix with Cherry Tomatoes-Premium Hydroponic',
      weight: '150 g',
      shelfLife: '5 to 7 days if stored in 2-3 Degree Celsius temperature',
      bestBefore: '09/03/2026',
      description: 'Our Salad Mix – Premium Hydroponic (150g) is a vibrant blend of crisp lettuces and nutrient-rich greens, grown under carefully controlled conditions to ensure consistent quality, freshness, and flavor. Each leaf is harvested at the right stage to deliver the perfect balance of texture — from the mild crunch of romaine to the delicate curls of frisée — complemented by tender kale and juicy cherry tomatoes.\n\nThis thoughtfully balanced mix includes Lollo Bionda, Lollo Rosso, Romaine, Frisée, Kale, Red Vein Sorrel, Swiss Chard, Bok Choy, and Cherry Tomatoes, making it ideal for wholesome salads, healthy bowls, and gourmet plating. Clean, fresh, and ready to use, this mix brings both nutrition and taste to your plate.',
      features: ['100% Pesticide-Free', 'Hydroponically Grown', 'AI-Monitored Growth', 'Climate Controlled', 'Non-GMO', 'Crisp & Fresh', 'Zero Pesticide & Beyond Organic'],
      nutritionalInfo: [
        { nutrient: 'Calories', value: '30 kcal', per: '100g' },
        { nutrient: 'Protein', value: '2.2 g', per: '100g' },
        { nutrient: 'Fiber', value: '2.5 g', per: '100g' },
        { nutrient: 'Vitamin A', value: '110% DV', per: '100g' },
        { nutrient: 'Vitamin C', value: '40% DV', per: '100g' },
        { nutrient: 'Vitamin K', value: '150% DV', per: '100g' },
        { nutrient: 'Folate', value: '20% DV', per: '100g' },
        { nutrient: 'Potassium', value: '8% DV', per: '100g' },
      ],
      storageTips: [
        'Store in refrigerator at 2–5°C',
        'Keep in original packaging',
        'Wash before consumption',
        'Do not freeze',
        'Best consumed within 4 days of packing'
      ],
      image: '/images/display-page/cherry.jpg',
      mrp: 'Rs.195/-',
      brandName: 'Fresh From The Future',
      batchNumber: 'FFTFSMCT090326',
      fssaiNumber: '10826005000480',
      packagingDate: '09/03/2026',
      companyAddress: 'Fresh From The Future Pvt. Ltd., 4378 P, Sector 23, Palam Vihar, Gurgaon, Haryana-122017',
      packComposition: [
        { item: 'Lollo Bionda Lettuce', weight: '25g' },
        { item: 'Lollo Rosso Lettuce', weight: '25g' },
        { item: 'Romaine Lettuce', weight: '25g' },
        { item: 'Frisée Lettuce', weight: '10g' },
        { item: 'Kale', weight: '20g' },
        { item: 'Red Vein Sorrel Leaves', weight: '6g' },
        { item: 'Swiss Chard', weight: '12g' },
        { item: 'Bok Choy', weight: '10g' },
        { item: 'Cherry Tomatoes', weight: '12g' },
      ],
      howToUse: [
        'Toss directly into a bowl for a quick fresh salad',
        'Add olive oil, lemon juice, or your favorite dressing',
        'Use as a base for grain or protein bowls',
        'Add into wraps, sandwiches, or burgers for extra crunch',
        'Pair with cheese, nuts, or fruits for a gourmet salad',
        'Serve as a side with grilled dishes',
        'Garnish pasta or main course plates'
      ]
    },
    liveImpact: {
      score: '97.8',
      carbon: '773.17',
      water: '2752.68',
      energy: '1610.76',
      health: '92.6',
      image: '/images/display-page/cherry.jpg'
    },
    milestones: {
      sowing: {
        defaultDate: '10-Jan-26',
        seedType: 'Non GMO',
        image: 'https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture/fresh2/SaladMixCherryTomatoesSowing.png',
        items: [
          { name: 'Lollo Bionda Lettuce', date: '10-Jan-26' },
          { name: 'Lollo Rosso Lettuce', date: '10-Jan-26' },
          { name: 'Romaine Lettuce', date: '10-Jan-26' },
          { name: 'Frisee Lettuce', date: '10-Jan-26' },
          { name: 'Kale', date: '10-Jan-26' },
          { name: 'Sorrel Vein', date: '10-Jan-26' },
          { name: 'Swiss Chard', date: '10-Jan-26' },
          { name: 'BokChoy', date: '10-Jan-26' },
          { name: 'Cherry Tomato', date: '28-Dec-25' },
        ]
      },
      transplant: {
        defaultDate: '24-Jan-26',
        image: 'https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture/fresh2/SaladMixCherryTomatoesTransplant.png',
        items: [
          { name: 'Lollo Bionda Lettuce', date: '24-Jan-26' },
          { name: 'Lollo Rosso Lettuce', date: '24-Jan-26' },
          { name: 'Romaine Lettuce', date: '24-Jan-26' },
          { name: 'Frisee Lettuce', date: '24-Jan-26' },
          { name: 'Kale', date: '24-Jan-26' },
          { name: 'Sorrel Vein', date: '24-Jan-26' },
          { name: 'Swiss Chard', date: '24-Jan-26' },
          { name: 'BokChoy', date: '24-Jan-26' },
          { name: 'Cherry Tomato', date: '12-Jan-26' },
        ]
      },
      harvest: {
        defaultDate: '09-Mar-26',
        duration: 'Multiple',
        batchId: 'FFTFSMCT090326',
        method: 'Hand-picked',
        yieldBoxes: 'Standard',
        pesticide: 'None'
      }
    },
    environment: {
      temp: '20–22°C (maintained 24/7)',
      humidity: '55–65% RH',
      lighting: 'Full-spectrum LED',
      nutrients: 'AI-adjusted ECM and pH'
    }
  },

  'lettuce-mix-premium': {
    id: 'lettuce-mix-premium',
    name: 'Lettuce Mix',
    heroImage: 'https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture/fresh2/LettuceMix.png',
    productDescription: {
      type: 'Lettuce Mix -Premium Hydroponic',
      weight: '150 g',
      shelfLife: '5 to 7 days if stored in 2-3 Degree Celsius temperature',
      bestBefore: '09/03/2026',
      description: 'Our Lettuce Mix – Premium Hydroponic (150g) is a fresh and flavorful blend of five carefully selected lettuce varieties, grown under controlled conditions to ensure consistent quality, crispness, and taste. Each leaf is harvested at peak freshness to deliver a perfect balance of textures — from the soft, buttery leaves of butterhead to the crisp bite of romaine and the delicate curls of frisée.\n\nThis premium mix includes Lollo Bionda, Lollo Rosso, Romaine, Butterhead, and Frisée lettuce, making it ideal for fresh salads, sandwiches, wraps, and gourmet plating. Clean, fresh, and ready to use, this lettuce mix is perfect for everyday healthy meals and fine dining alike.',
      features: ['100% Pesticide-Free', 'Hydroponically Grown', 'AI-Monitored Growth', 'Climate Controlled', 'Non-GMO', 'Crisp & Fresh', 'Zero Pesticide & Beyond Organic'],
      nutritionalInfo: [
        { nutrient: 'Calories', value: '18 kcal', per: '100g' },
        { nutrient: 'Protein', value: '1.4 g', per: '100g' },
        { nutrient: 'Fiber', value: '2.0 g', per: '100g' },
        { nutrient: 'Vitamin A', value: '140% DV', per: '100g' },
        { nutrient: 'Vitamin K', value: '95% DV', per: '100g' },
        { nutrient: 'Folate', value: '28% DV', per: '100g' },
        { nutrient: 'Vitamin C', value: '12% DV', per: '100g' },
        { nutrient: 'Potassium', value: '6% DV', per: '100g' },
      ],
      storageTips: [
        'Store in refrigerator at 2–5°C',
        'Keep in original packaging or airtight container',
        'Wash just before consumption',
        'Do not freeze',
        'Best consumed within 4–5 days of packing'
      ],
      image: '/images/display-page/Letuce.png',
      mrp: 'Rs.179/-',
      brandName: 'Fresh From The Future',
      batchNumber: 'FFTFLM090326',
      fssaiNumber: '10826005000480',
      packagingDate: '09/03/2026',
      companyAddress: 'Fresh From The Future Pvt. Ltd., 4378 P, Sector 23, Palam Vihar, Gurgaon, Haryana-122017',
      packComposition: [
        { item: 'Lollo Bionda Lettuce', weight: '30g' },
        { item: 'Lollo Rosso Lettuce', weight: '30g' },
        { item: 'Romaine Lettuce', weight: '30g' },
        { item: 'Butterhead Lettuce', weight: '30g' },
        { item: 'Frisée Lettuce', weight: '30g' },
      ],
      howToUse: [
        'Toss with olive oil, lemon juice, or dressing for a fresh salad',
        'Use as a base for Caesar or green salads',
        'Add into sandwiches, wraps, and burgers',
        'Pair with grilled vegetables, chicken, or paneer',
        'Use as a bed for appetizers and main courses',
        'Mix with fruits, nuts, and cheese for a gourmet salad',
        'Serve as a healthy side with any meal'
      ]
    },
    liveImpact: {
      score: '98.0',
      carbon: '700.00',
      water: '2600.00',
      energy: '1550.00',
      health: '94.0',
      image: '/images/display-page/Letuce.png'
    },
    milestones: {
      sowing: {
        defaultDate: '10-Jan-26',
        seedType: 'Non GMO',
        image: 'https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture/fresh2/LettuceMixSowing.png',
        items: [
          { name: 'Lollo Bionda Lettuce', date: '10-Jan-26' },
          { name: 'Lollo Rosso Lettuce', date: '10-Jan-26' },
          { name: 'Romaine Lettuce', date: '10-Jan-26' },
          { name: 'Frisee Lettuce', date: '10-Jan-26' },
          { name: 'Butter Head', date: '10-Jan-26' },
        ]
      },
      transplant: {
        defaultDate: '24-Jan-26',
        image: 'https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture/fresh2/LettuceMixTransplant.png',
        items: [
          { name: 'Lollo Bionda Lettuce', date: '24-Jan-26' },
          { name: 'Lollo Rosso Lettuce', date: '24-Jan-26' },
          { name: 'Romaine Lettuce', date: '24-Jan-26' },
          { name: 'Frisee Lettuce', date: '24-Jan-26' },
          { name: 'Butterhead', date: '24-Jan-26' },
        ]
      },
      harvest: {
        defaultDate: '09-Mar-26',
        duration: 'Multiple',
        batchId: 'FFTFLM090326',
        method: 'Hand-picked',
        yieldBoxes: 'Standard',
        pesticide: 'None'
      }
    },
    environment: {
      temp: '20–22°C',
      humidity: '55–65% RH',
      lighting: 'Full-spectrum LED',
      nutrients: 'AI-adjusted'
    }
  },

  'microgreen-mix-premium': {
    id: 'microgreen-mix-premium',
    name: 'Microgreen Mix',
    heroImage: 'https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture/fresh2/MicrogreenMix.png',
    productDescription: {
      type: 'Microgreen Mix-Premium Hydroponic',
      weight: '60 g',
      shelfLife: '5 to 7 days if stored in 2-3 Degree Celsius temperature',
      bestBefore: '09/03/2026',
      description: 'Our Microgreen Mix – Premium Hydroponic (60g) is a vibrant blend of nutrient-dense young greens, carefully grown under controlled conditions to ensure freshness, flavor, and quality. Harvested at an early stage, these microgreens are tender, flavorful, and packed with essential nutrients.\n\nThis premium mix includes Red Amaranthus, Red Cabbage, and Basil microgreens, offering a beautiful combination of colors and flavors — from the mild sweetness of amaranthus to the subtle peppery notes of red cabbage and the aromatic freshness of basil. Perfect for garnishing, salads, sandwiches, and gourmet dishes, this microgreen mix adds both nutrition and visual appeal to any plate.',
      features: ['100% Pesticide-Free', 'Hydroponically Grown', 'AI-Monitored Growth', 'Climate Controlled', 'Non-GMO', 'Crisp & Fresh', 'Zero Pesticide'],
      nutritionalInfo: [
        { nutrient: 'Calories', value: '35 kcal', per: '100g' },
        { nutrient: 'Protein', value: '3.0 g', per: '100g' },
        { nutrient: 'Fiber', value: '2.2 g', per: '100g' },
        { nutrient: 'Vitamin A', value: '140% DV', per: '100g' },
        { nutrient: 'Vitamin C', value: '60% DV', per: '100g' },
        { nutrient: 'Vitamin K', value: '120% DV', per: '100g' },
        { nutrient: 'Folate', value: '30% DV', per: '100g' },
        { nutrient: 'Iron', value: '12% DV', per: '100g' },
        { nutrient: 'Calcium', value: '10% DV', per: '100g' },
      ],
      storageTips: [
        'Store in refrigerator at 2–5°C',
        'Keep in original packaging',
        'Do not wash before storing',
        'Wash gently before consumption',
        'Best consumed within 4–5 days of packing'
      ],
      image: '/images/display-page/micro.jpg',
      mrp: 'Rs.225/-',
      brandName: 'Fresh From The Future',
      batchNumber: 'FFTFMGM090326',
      fssaiNumber: '10826005000480',
      packagingDate: '09/03/2026',
      companyAddress: 'Fresh From The Future Pvt. Ltd., 4378 P, Sector 23, Palam Vihar, Gurgaon, Haryana-122017',
      packComposition: [
        { item: 'Red Amaranthus Microgreens', weight: '20g' },
        { item: 'Red Cabbage Microgreens', weight: '20g' },
        { item: 'Basil Microgreens', weight: '20g' },
      ],
      howToUse: [
        'Add on top of salads for extra flavor and nutrition',
        'Use as a garnish for soups and main courses',
        'Add into sandwiches, wraps, and burgers',
        'Mix into smoothies or juices',
        'Sprinkle over pasta, pizza, or rice bowls',
        'Pair with eggs or avocado toast',
        'Use in gourmet plating for color and texture'
      ]
    },
    liveImpact: {
      score: '98.5',
      carbon: '650.00',
      water: '2400.00',
      energy: '1450.00',
      health: '96.0',
      image: '/images/display-page/micro.jpg'
    },
    milestones: {
      sowing: {
        defaultDate: '22-Feb-26',
        seedType: 'Non GMO',
        image: 'https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture/fresh2/MicrogreenMixSowing.png',
        items: [
          { name: 'Microgreen Mix', date: '22-Feb-26' },
        ]
      },
      transplant: {
        defaultDate: 'N/A',
        image: 'https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture/fresh2/MicrogreenMixTransplant.png',
        items: [
          { name: 'Microgreen Mix', date: 'N/A' },
        ]
      },
      harvest: {
        defaultDate: '09-Mar-26',
        duration: '15 days',
        batchId: 'FFTFMGM090326',
        method: 'Hand-picked',
        yieldBoxes: 'Standard',
        pesticide: 'None'
      }
    },
    environment: {
      temp: '20–22°C',
      humidity: '55–65% RH',
      lighting: 'Full-spectrum LED',
      nutrients: 'AI-adjusted'
    }
  },
  // --- 1. BASIL ITALIAN (NO headSize - will show 2 columns) ---
  'basil-italian': {
    id: 'basil-italian',
    name: 'Basil Italian',
    heroImage: 'https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture/fresh2/Italian-Basil (1).png',
    productDescription: {
      type: 'Microgreens - Basil Italian',
      weight: '25-30 g per box',
      shelfLife: '3-4 days (refrigerated)',
      bestBefore: '5 days from the date of harvest',
      description: `Basil is one of the most popular CEA crops due to its continuous harvest potential and high market demand. It responds well to hydroponics with optimal yields under consistent light and warm temperatures, supplying fresh herbs to culinary and medicinal markets. \n\nFrom a buyer's perspective, basil is valued for its vibrant aroma and shelf-ready quality. The assurance of pesticide-free production and reliable year-round harvests makes it a top choice for restaurants, retail chains, and health-conscious consumers.`,
      features: ['100% Pesticide-Free', 'Hydroponically Grown', 'AI-Monitored Growth', 'Climate Controlled', 'Non-GMO', 'Crisp & Fresh'],
      nutritionalInfo: [
        { nutrient: 'Calories', value: '17 kcal', per: '100g' },
        { nutrient: 'Protein', value: '1.2g', per: '100g' },
        { nutrient: 'Fiber', value: '2.1g', per: '100g' },
        { nutrient: 'Vitamin A', value: '174% DV', per: '100g' },
        { nutrient: 'Vitamin K', value: '85% DV', per: '100g' },
        { nutrient: 'Folate', value: '34% DV', per: '100g' },
      ],
      storageTips: [
        'Store in refrigerator at 2-4°C',
        'Keep in original packaging or wrap in damp paper towel',
        'Wash just before consumption',
        'Best consumed within 7-10 days of purchase'
      ],
      image: 'https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture/fresh2/Italian-Basil (11).png'
    },
    liveImpact: {
      score: '98.14',
      carbon: '773.17',
      water: '2752.68',
      energy: '1610.76',
      health: '92.6',
      image: 'https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture/fresh2/Basil-italaina.png'
    },
    milestones: {
      sowing: {
        defaultDate: 'November 14, 2025',
        seedType: 'Non GMO Seeds',
        image: 'https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture/fresh2/Rectangle 46 (1).png'
      },
      transplant: {
        defaultDate: 'November 17, 2025',
        image: 'https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture/fresh2/undefined.png'
      },
      harvest: {
        defaultDate: 'November 29, 2025',
        duration: '15 days from germination to harvest',
        batchId: '740',
        method: 'Hand-picked and quality-checked under AI-guided lighting',
        yieldBoxes: '3',
        // NO headSize - this triggers 2-column layout
        pesticide: 'None'
      }
    },
    environment: {
      temp: '20–22°C (maintained 24/7)',
      humidity: '55–65% RH',
      lighting: 'Full-spectrum LED, 14 hours/day',
      nutrients: 'Automated hydroponic flow with AI-adjusted EC and pH levels'
    }
  },

  // --- 2. LOLLO BIONDA (HAS headSize - will show 4 columns) ---
  'lollo-bionda': {
    id: 'lollo-bionda',
    name: 'Lollo Bionda',
    heroImage: 'https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture/fresh2/lollobionda1.png',
    productDescription: {
      type: 'Lettuce - Lollo Bionda',
      weight: '80-100g per head',
      shelfLife: '7-10 days (refrigerated)',
      bestBefore: '10 days from the date of harvest',
      description: `Lollo Bionda, with its light-green curly leaves, is well-suited to indoor farms aiming for visual diversity in salad mixes. It grows compactly and delivers premium aesthetics for high-end markets. \n\nFor buyers, Lollo Bionda adds vibrancy and texture to salad assortments. Its premium appeal makes it a reliable option for gourmet food retailers and restaurants.`,
      features: ['100% Pesticide-Free', 'Hydroponically Grown', 'AI-Monitored Growth', 'Climate Controlled', 'Non-GMO', 'Crisp & Fresh'],
      nutritionalInfo: [
        { nutrient: 'Calories', value: '17 kcal', per: '100g' },
        { nutrient: 'Protein', value: '1.2g', per: '100g' },
        { nutrient: 'Fiber', value: '2.1g', per: '100g' },
        { nutrient: 'Vitamin A', value: '174% DV', per: '100g' },
        { nutrient: 'Vitamin K', value: '85% DV', per: '100g' },
        { nutrient: 'Folate', value: '34% DV', per: '100g' },
      ],
      storageTips: [
        'Store in refrigerator at 2-4°C',
        'Keep in original packaging or wrap in damp paper towel',
        'Wash just before consumption',
        'Best consumed within 7-10 days of purchase'
      ],
      image: 'https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture/fresh2/image (2).png'
    },
    liveImpact: {
      score: '98.14',
      carbon: '773.17',
      water: '2752.68',
      energy: '1610.76',
      health: '92.6',
      image: 'https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture/fresh2/shared image (4).jpeg'
    },
    milestones: {
      sowing: {
        defaultDate: 'October 07, 2025',
        seedType: 'Non GMO Seeds',
        image: 'https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture/fresh2/Rectangle 46 (1).png'
      },
      transplant: {
        defaultDate: 'October 23, 2025',
        image: 'https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture/fresh2/shared image (3).jpeg'
      },
      harvest: {
        defaultDate: 'November 21, 2025',
        duration: '60 days from germination to harvest',
        batchId: '704',
        method: 'Hand-picked and quality-checked under AI-guided lighting',
        yieldBoxes: '120 kg',
        headSize: '150–180g per head',
        pesticide: 'None'
      }
    },
    environment: {
      temp: '20–22°C (maintained 24/7)',
      humidity: '55–65% RH',
      lighting: 'Full-spectrum LED, 14 hours/day',
      nutrients: 'Automated hydroponic flow with AI-adjusted EC and pH levels'
    }
  },

  // --- 3. LOLLO ROSSO (HAS headSize - will show 4 columns) ---
  'lollo-rosso': {
    id: 'lollo-rosso',
    name: 'Lollo Rosso',
    heroImage: 'https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture/fresh2/3rdlollo.png',
    productDescription: {
      type: 'Lettuce - Lollo Rosso',
      weight: '80-100g per head',
      shelfLife: '7-10 days (refrigerated)',
      bestBefore: '10 days from the date of harvest',
      description: `Our Lollo Rosso, with its frilly, red-tinted leaves, grows efficiently in controlled systems and offers visual appeal for high-end retail and salad mixes. Its compact structure allows dense planting for optimized yield. \n\nChefs and retailers value Lollo Rosso for its unique color and texture, elevating salad presentations. Its consistent appearance and pesticide-free growth make it highly attractive in premium markets.`,
      features: ['100% Pesticide-Free', 'Hydroponically Grown', 'AI-Monitored Growth', 'Climate Controlled', 'Non-GMO', 'Crisp & Fresh'],
      nutritionalInfo: [
        { nutrient: 'Calories', value: '17 kcal', per: '100g' },
        { nutrient: 'Protein', value: '1.2g', per: '100g' },
        { nutrient: 'Fiber', value: '2.1g', per: '100g' },
        { nutrient: 'Vitamin A', value: '174% DV', per: '100g' },
        { nutrient: 'Vitamin K', value: '85% DV', per: '100g' },
        { nutrient: 'Folate', value: '34% DV', per: '100g' },
      ],
      storageTips: [
        'Store in refrigerator at 2-4°C',
        'Keep in original packaging or wrap in damp paper towel',
        'Wash just before consumption',
        'Best consumed within 7-10 days of purchase'
      ],
      image: 'https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture/fresh2/des4.png'
    },
    liveImpact: {
      score: '98.14',
      carbon: '773.17',
      water: '2752.68',
      energy: '1610.76',
      health: '92.6',
      image: 'https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture/fresh2/impactlollo.png'
    },
    milestones: {
      sowing: {
        defaultDate: 'October 07, 2025',
        seedType: 'Non GMO Seeds',
        image: 'https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture/fresh2/Rectangle 46 (1).png'
      },
      transplant: {
        defaultDate: 'October 23, 2025',
        image: 'https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture/fresh2/impactlollo.png'
      },
      harvest: {
        defaultDate: 'November 21, 2025',
        duration: '45 days from germination to harvest',
        batchId: '744',
        method: 'Hand-picked and quality-checked under AI-guided lighting',
        yieldBoxes: '120 kg',
        headSize: '150–180g per head',
        pesticide: 'None'
      }
    },
    environment: {
      temp: '20–22°C (maintained 24/7)',
      humidity: '55–65% RH',
      lighting: 'Full-spectrum LED, 14 hours/day',
      nutrients: 'Automated hydroponic flow with AI-adjusted EC and pH levels'
    }
  },

  // --- 4. LEAFY GREENS ---
  'leafygreens': {
    id: 'leafygreens',
    name: 'Leafy Greens',
    heroImage: 'https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture/fresh2/logo.png',
    productDescription: {
      type: 'Premium Hydroponic Greens',
      weight: 'Var. Box Sizes',
      shelfLife: '7+ Days',
      bestBefore: 'See Label',
      description: 'Our mixed leafy greens are grown in a pristine, climate-controlled environment. Harvested at the peak of freshness, they offer superior crunch, flavor, and nutrition compared to traditional field-grown produce.',
      features: ['Pesticide-Free', 'Hydroponic', 'Non-GMO', 'Ultra-Fresh', 'Sustainable'],
      nutritionalInfo: [
        { nutrient: 'Vitamin A', value: 'High', per: '100g' },
        { nutrient: 'Vitamin K', value: 'High', per: '100g' },
        { nutrient: 'Antioxidants', value: 'Rich', per: '100g' }
      ],
      storageTips: ['Keep Refrigerated at 2-4°C', 'Wash before use', 'Seal bag tightly'],
      image: 'https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture/fresh2/logo.png'
    },
    liveImpact: {
      score: '96.5',
      carbon: '600.0',
      water: '2500.0',
      energy: '1500.0',
      health: '95.0',
      image: 'https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture/fresh2/logo.png'
    },
    milestones: {
      sowing: {
        defaultDate: 'Continuous Cycle',
        seedType: 'Premium Mix',
        image: 'https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture/fresh2/logo.png'
      },
      transplant: {
        defaultDate: 'Week 2-3',
        image: 'https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture/fresh2/logo.png'
      },
      harvest: {
        defaultDate: 'Daily Harvest',
        duration: '35-45 days',
        batchId: 'MIX-STD',
        method: 'Hand-picked',
        yieldBoxes: 'Standard',
        headSize: 'Mixed sizes',
        pesticide: 'None'
      }
    },
    environment: {
      temp: '20-22°C',
      humidity: '60%',
      lighting: 'Full Spectrum LED',
      nutrients: 'Standard Hydroponic'
    }
  },

  // --- 5. ROMAINE LETTUCE (HAS headSize - will show 4 columns) ---
  'romaine-lettuce': {
    id: 'romaine-lettuce',
    name: 'Romaine Lettuce',
    heroImage: 'https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture/fresh/Rectangle_leafy.png',
    productDescription: {
      type: 'Fresh Romaine Lettuce',
      weight: '150-180g per head',
      shelfLife: '7-10 days (refrigerated)',
      bestBefore: '10 days from the date of harvest',
      description: 'Our Romaine Lettuce is grown in a state-of-the-art AI-powered vertical farm, ensuring optimal growing conditions 24/7. Each head is carefully monitored from seed to harvest, resulting in crisp, fresh lettuce with superior taste and nutritional value. Perfect for salads, sandwiches, and wraps.',
      features: [
        '100% Pesticide-Free',
        'Hydroponically Grown',
        'AI-Monitored Growth',
        'Climate Controlled',
        'Non-GMO',
        'Crisp & Fresh'
      ],
      nutritionalInfo: [
        { nutrient: 'Calories', value: '17 kcal', per: '100g' },
        { nutrient: 'Protein', value: '1.2g', per: '100g' },
        { nutrient: 'Fiber', value: '2.1g', per: '100g' },
        { nutrient: 'Vitamin A', value: '174% DV', per: '100g' },
        { nutrient: 'Vitamin K', value: '85% DV', per: '100g' },
        { nutrient: 'Folate', value: '34% DV', per: '100g' },
      ],
      storageTips: [
        'Store in refrigerator at 2-4°C',
        'Keep in original packaging or wrap in damp paper towel',
        'Wash just before consumption',
        'Best consumed within 7-10 days of purchase'
      ],
      image: 'https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture/fresh2/Rectangle 46.png',
      mrp: 'Rs.179/-',
      brandName: 'Fresh From The Future',
      batchNumber: 'FFTFSMMD090326',
      fssaiNumber: '10826005000480',
      packagingDate: '09/03/2026',
      companyAddress: 'Fresh From The Future Pvt. Ltd., 4378 P, Sector 23, Palam Vihar, Gurgaon, Haryana-122017',
  
    },
    liveImpact: {
      score: '98.14',
      carbon: '773.17',
      water: '2752.68',
      energy: '1610.76',
      health: '92.6',
      image: 'https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture/fresh2/Rectangle 46 (3).png'
    },
    milestones: {
      sowing: {
        defaultDate: 'October 07, 2025',
        seedType: 'Non GMO Seeds',
        image: 'https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture/fresh2/Rectangle 46 (1).png'
      },
      transplant: {
        defaultDate: 'October 22, 2025',
        image: 'https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture/fresh2/Gemini_Generated_Image_pzp2d4pzp2d4pzp2.png'
      },
      harvest: {
        defaultDate: 'December 06, 2025',
        duration: '60 days from germination to harvest',
        batchId: '701',
        method: 'Hand-picked and quality-checked under AI-guided lighting',
        yieldBoxes: '120 kg',
        headSize: '150–180g per head',
        pesticide: 'None'
      }
    },
    environment: {
      temp: '20–22°C (maintained 24/7)',
      humidity: '55–65% RH',
      lighting: 'Full-spectrum LED, 14 hours/day',
      nutrients: 'Automated hydroponic flow with AI-adjusted EC and pH levels'
    }
  },

  // --- 6. BABY SPINACH (GENERAL) ---
  'baby-spinach': {
    id: 'baby-spinach',
    name: 'Baby Spinach',
    heroImage: 'https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture/fresh2/Spinach.png',

    productDescription: {
      type: 'Spinach - General (Baby)',
      weight: '80–100g per box',
      shelfLife: '7–10 days (refrigerated)',
      bestBefore: '10 days from the date of harvest',
      description: `Our hydroponic baby spinach is grown in a controlled-environment vertical farm with precise control of light, temperature, humidity, and nutrients. Harvested young, the leaves are tender, vibrant, and mildly sweet—perfect for salads, smoothies, and everyday cooking.

Naturally low in calories, it is rich in iron, fiber, and essential vitamins A, C, K, and folate. Clean, pesticide-free, and sustainably grown with higher nutrient retention and reduced water use.`,
      features: [
        '100% Pesticide-Free',
        'Hydroponically Grown',
        'AI-Monitored Growth',
        'Climate Controlled',
        'Non-GMO',
        'Tender & Fresh'
      ],
      nutritionalInfo: [
        { nutrient: 'Calories', value: '23 kcal', per: '100g' },
        { nutrient: 'Protein', value: '2.9g', per: '100g' },
        { nutrient: 'Fiber', value: '2.2g', per: '100g' },
        { nutrient: 'Vitamin A', value: '188% DV', per: '100g' },
        { nutrient: 'Vitamin K', value: '~460% DV', per: '100g' },
        { nutrient: 'Folate', value: '~49% DV', per: '100g' }
      ],
      storageTips: [
        'Store in refrigerator at 2–4°C',
        'Keep in original packaging',
        'Wash just before use',
        'Consume within 7–10 days'
      ],

      // ✅ Description image (WEBP)
      image: 'https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture/fresh2/Babyspinach1.webp'
    },

    liveImpact: {
      score: '97.8',
      carbon: '710.45',
      water: '2650.30',
      energy: '1580.20',
      health: '94.3',

      // ✅ Live impact image (WEBP)
      image: 'https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture/fresh2/babyspinachliveimpact.webp'
    },

    milestones: {
      sowing: {
        defaultDate: 'October 10, 2025',
        seedType: 'Non GMO Seeds',
        image: 'https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture/fresh2/Rectangle 46 (1).png'
      },
      transplant: {
        defaultDate: 'October 20, 2025',
        image: 'https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture/fresh2/Gemini_Generated_Image_pzp2d4pzp2d4pzp2.png'
      },
      harvest: {
        defaultDate: 'November 15, 2025',
        duration: '30–35 days from germination to harvest',
        batchId: 'SPN-701',
        method: 'Hand-harvested and quality-checked under AI-guided lighting',
        yieldBoxes: '100 kg',
        headSize: 'Baby leaf size',
        pesticide: 'None'
      }
    },

    environment: {
      temp: '18–22°C (maintained 24/7)',
      humidity: '55–65% RH',
      lighting: 'Full-spectrum LED, 14 hours/day',
      nutrients: 'Automated hydroponic flow with AI-adjusted EC and pH levels'
    }
  },

  'butterhead-lettuce': {
    id: 'butterhead-lettuce',
    name: 'Butterhead Lettuce',

    heroImage: 'https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture/fresh2/butterheadmainpage.jpg',

    productDescription: {
      type: 'Lettuce - Butterhead',
      weight: '120–150g per head',
      shelfLife: '7–10 days (refrigerated)',
      bestBefore: '10 days from the date of harvest',
      description: `Our hydroponic Butterhead lettuce is cultivated in a controlled-environment vertical farm with precise regulation of light, temperature, humidity, and nutrient delivery. The soft, rounded leaves form a loose head with a buttery texture and mild, slightly sweet flavor.

Ideal for fresh salads, wraps, and gourmet plating, Butterhead lettuce is grown pesticide-free using water-efficient hydroponic systems, ensuring consistent quality, cleanliness, and superior freshness.`,
      features: [
        '100% Pesticide-Free',
        'Hydroponically Grown',
        'AI-Monitored Growth',
        'Climate Controlled',
        'Non-GMO',
        'Soft & Buttery Texture'
      ],
      nutritionalInfo: [
        { nutrient: 'Calories', value: '~13 kcal', per: '100g' },
        { nutrient: 'Protein', value: '~1.4g', per: '100g' },
        { nutrient: 'Fiber', value: '~1.1g', per: '100g' },
        { nutrient: 'Vitamin A', value: '~148% DV', per: '100g' },
        { nutrient: 'Vitamin K', value: '~30% DV', per: '100g' },
        { nutrient: 'Folate', value: '~18% DV', per: '100g' }
      ],
      storageTips: [
        'Store refrigerated at 2–4°C',
        'Keep in original packaging',
        'Wash just before use',
        'Consume within 7–10 days'
      ],
      image: 'https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture/fresh2/Butterheaddescription.webp'
    },

    liveImpact: {
      score: '97.9',
      carbon: '720.50',
      water: '2680.40',
      energy: '1595.30',
      health: '93.8',
      image: 'https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture/fresh2/ButterheadLiveImpactimage.jpg'
    },

    milestones: {
      sowing: {
        defaultDate: 'October 08, 2025',
        seedType: 'Non GMO Seeds',
        image: 'https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture/fresh2/Rectangle 46 (1).png'
      },
      transplant: {
        defaultDate: 'October 22, 2025',
        image: 'https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture/fresh2/Gemini_Generated_Image_pzp2d4pzp2d4pzp2.png'
      },
      harvest: {
        defaultDate: 'December 05, 2025',
        duration: '55–60 days from germination to harvest',
        batchId: 'BTH-701',
        method: 'Hand-harvested and quality-checked under AI-guided lighting',
        yieldBoxes: '110 kg',
        headSize: '120–150g per head',
        pesticide: 'None'
      }
    },

    environment: {
      temp: '18–22°C (maintained 24/7)',
      humidity: '55–65% RH',
      lighting: 'Full-spectrum LED, 14 hours/day',
      nutrients: 'AI-controlled hydroponic nutrient flow'
    }
  },

  'frisee-lettuce': {
    id: 'frisee-lettuce',
    name: 'Frisée Lettuce',

    heroImage: 'https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture/fresh2/FriseeLettuceMainpage.jpg',

    productDescription: {
      type: 'Lettuce - Frisée',
      weight: '80–100g per head',
      shelfLife: '7–10 days (refrigerated)',
      bestBefore: '10 days from the date of harvest',
      description: `Our hydroponic Frisée lettuce is cultivated in a controlled-environment system to produce crisp, finely curled leaves with a mildly bitter and refreshing taste. Harvested young for optimal texture, it is ideal for fresh salads and premium culinary applications.

Grown pesticide-free under carefully regulated conditions, Frisée delivers consistent quality, excellent crunch, and superior freshness.`,
      features: [
        '100% Pesticide-Free',
        'Hydroponically Grown',
        'AI-Monitored Growth',
        'Climate Controlled',
        'Non-GMO',
        'Crisp & Curly Texture'
      ],
      nutritionalInfo: [
        { nutrient: 'Calories', value: '~17 kcal', per: '100g' },
        { nutrient: 'Protein', value: '~1.3g', per: '100g' },
        { nutrient: 'Fiber', value: '~3.1g', per: '100g' },
        { nutrient: 'Vitamin A', value: '~72% DV', per: '100g' },
        { nutrient: 'Vitamin K', value: '~230% DV', per: '100g' },
        { nutrient: 'Folate', value: '~35% DV', per: '100g' }
      ],
      storageTips: [
        'Store refrigerated at 2–4°C',
        'Keep leaves dry before storage',
        'Wash just before consumption',
        'Consume within 7–10 days'
      ],
      image: 'https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture/fresh2/FriseeDescription.webp'
    },

    liveImpact: {
      score: '98.2',
      carbon: '705.80',
      water: '2625.10',
      energy: '1570.60',
      health: '94.5',
      image: 'https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture/fresh2/FriseelettuceLiveimpactimage.jpg'
    },

    milestones: {
      sowing: {
        defaultDate: 'October 10, 2025',
        seedType: 'Non GMO Seeds',
        image: 'https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture/fresh2/Rectangle 46 (1).png'
      },
      transplant: {
        defaultDate: 'October 24, 2025',
        image: 'https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture/fresh2/Gemini_Generated_Image_pzp2d4pzp2d4pzp2.png'
      },
      harvest: {
        defaultDate: 'November 30, 2025',
        duration: '45–50 days from germination to harvest',
        batchId: 'FRS-703',
        method: 'Hand-harvested and quality-checked under AI-guided lighting',
        yieldBoxes: '95 kg',
        headSize: '80–100g per head',
        pesticide: 'None'
      }
    },

    environment: {
      temp: '18–22°C (maintained 24/7)',
      humidity: '55–65% RH',
      lighting: 'Full-spectrum LED, 14 hours/day',
      nutrients: 'AI-controlled hydroponic nutrient delivery'
    }
  },

  'swiss-chard': {
    id: 'swiss-chard',
    name: 'Swiss Chard',
    heroImage: 'https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture/fresh2/SwissChard/SwissChardMainPage.png',
    productDescription: {
      type: 'Swiss Chard',
      weight: '100–150g per bunch',
      shelfLife: '5–7 days (refrigerated)',
      bestBefore: '7 days from the date of harvest',
      description: `Our hydroponic Swiss chard is grown under controlled-environment conditions to deliver vibrant, tender leaves with colorful stems and a mild, earthy flavor. Harvested at optimal maturity, it is suitable for sautéing, steaming, and fresh mixes. Free from soil contamination and pesticides, offering high nutrient density with efficient water use.`,
      features: [
        '100% Pesticide-Free',
        'Hydroponically Grown',
        'AI-Monitored Growth',
        'Climate Controlled',
        'Non-GMO',
        'Vibrant & Tender'
      ],
      nutritionalInfo: [
        { nutrient: 'Calories', value: '~19 kcal', per: '100g' },
        { nutrient: 'Protein', value: '~1.8g', per: '100g' },
        { nutrient: 'Fiber', value: '~1.6g', per: '100g' },
        { nutrient: 'Vitamin A', value: '~122% DV', per: '100g' },
        { nutrient: 'Vitamin K', value: '~830% DV', per: '100g' },
        { nutrient: 'Vitamin C', value: '~30% DV', per: '100g' }
      ],
      storageTips: [
        'Store refrigerated at 2–4°C',
        'Keep in original packaging',
        'Wash just before use',
        'Consume within 5–7 days'
      ],
      image: 'https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture/fresh2/SwissChard/SwissChardDescriptionImage.png'
    },
    liveImpact: {
      score: '97.5',
      carbon: '715.20',
      water: '2700.50',
      energy: '1600.40',
      health: '93.2',
      image: 'https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture/fresh2/SwissChard/SwissChardLiveImapact.png'
    },
    milestones: {
      sowing: {
        defaultDate: 'October 12, 2025',
        seedType: 'Non GMO Seeds',
        image: 'https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture/fresh2/Rectangle 46 (1).png'
      },
      transplant: {
        defaultDate: 'October 26, 2025',
        image: 'https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture/fresh2/Gemini_Generated_Image_pzp2d4pzp2d4pzp2.png'
      },
      harvest: {
        defaultDate: 'December 10, 2025',
        duration: '50–55 days from germination to harvest',
        batchId: 'SWC-701',
        method: 'Hand-harvested and quality-checked under AI-guided lighting',
        yieldBoxes: '105 kg',
        headSize: '100–150g per bunch',
        pesticide: 'None'
      }
    },
    environment: {
      temp: '18–22°C (maintained 24/7)',
      humidity: '55–65% RH',
      lighting: 'Full-spectrum LED, 14 hours/day',
      nutrients: 'AI-controlled hydroponic nutrient delivery'
    }
  },

  'baby-sorrel-vein': {
    id: 'baby-sorrel-vein',
    name: 'Baby Sorrel Vein',
    heroImage: 'https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture/fresh2/BabySorrelVein/SorrelVeinMainPageImage.jpg',
    productDescription: {
      type: 'Baby Sorrel Vein',
      weight: '50–80g per pack',
      shelfLife: '3–5 days (refrigerated)',
      bestBefore: '5 days from the date of harvest',
      description: `Our hydroponic baby sorrel vein is cultivated in a precision-controlled vertical farming system to preserve its delicate structure and tangy, lemon-like flavor. Harvested young for maximum tenderness, it is widely used in salads, garnishes, and fine dining applications.`,
      features: [
        '100% Pesticide-Free',
        'Hydroponically Grown',
        'AI-Monitored Growth',
        'Climate Controlled',
        'Non-GMO',
        'Delicate & Tangy'
      ],
      nutritionalInfo: [
        { nutrient: 'Calories', value: '~22 kcal', per: '100g' },
        { nutrient: 'Protein', value: '~2.0g', per: '100g' },
        { nutrient: 'Fiber', value: '~2.3g', per: '100g' },
        { nutrient: 'Vitamin C', value: '~80% DV', per: '100g' },
        { nutrient: 'Vitamin A', value: '~50% DV', per: '100g' },
        { nutrient: 'Iron', value: '~15% DV', per: '100g' }
      ],
      storageTips: [
        'Store refrigerated at 2–4°C',
        'Keep in original packaging',
        'Handle gently to preserve delicate leaves',
        'Consume within 3–5 days'
      ],
      image: 'https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture/fresh2/BabySorrelVein/SorrelDescriptionImage.png'
    },
    liveImpact: {
      score: '96.8',
      carbon: '680.30',
      water: '2580.60',
      energy: '1520.80',
      health: '92.4',
      image: 'https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture/fresh2/BabySorrelVein/BabySorrelLiveImpact.png'
    },
    milestones: {
      sowing: {
        defaultDate: 'October 15, 2025',
        seedType: 'Non GMO Seeds',
        image: 'https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture/fresh2/Rectangle 46 (1).png'
      },
      transplant: {
        defaultDate: 'October 28, 2025',
        image: 'https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture/fresh2/Gemini_Generated_Image_pzp2d4pzp2d4pzp2.png'
      },
      harvest: {
        defaultDate: 'November 20, 2025',
        duration: '30–35 days from germination to harvest',
        batchId: 'BSV-702',
        method: 'Hand-harvested and quality-checked under AI-guided lighting',
        yieldBoxes: '85 kg',
        headSize: '50–80g per pack',
        pesticide: 'None'
      }
    },
    environment: {
      temp: '18–22°C (maintained 24/7)',
      humidity: '55–65% RH',
      lighting: 'Full-spectrum LED, 14 hours/day',
      nutrients: 'AI-controlled hydroponic nutrient delivery'
    }
  },

  'bok-choy': {
    id: 'bok-choy',
    name: 'Bok Choy',
    heroImage: 'https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture/fresh2/BokChoy/BokchoyMainPage.png',
    productDescription: {
      type: 'BokChoy -Premium Hydroponic',
      weight: '300 g',
      shelfLife: '5 to 7 days if stored in 2-3 Degree Celsius temperature',
      bestBefore: '09/03/2026',
      description: 'Our Bok Choy – Premium Hydroponic (1 kg) is grown under carefully controlled conditions to ensure clean, crisp, and nutrient-rich produce. Each plant is cultivated with precision and harvested at peak freshness, resulting in tender stems and vibrant green leaves with a mild, slightly sweet flavor.\n\nBok choy is a versatile leafy green widely used in Asian and continental cuisines. Its crunchy stalks and delicate leaves make it perfect for stir-fries, soups, salads, and sautéed dishes. Fresh, wholesome, and ready to use, this bok choy delivers both great taste and high nutritional value.',
      features: ['100% Pesticide-Free', 'Hydroponically Grown', 'AI-Monitored Growth', 'Climate Controlled', 'Non-GMO', 'Crisp & Fresh', 'Zero Pesticide & Beyond Organic'],
      nutritionalInfo: [
        { nutrient: 'Calories', value: '13 kcal', per: '100g' },
        { nutrient: 'Protein', value: '1.5 g', per: '100g' },
        { nutrient: 'Fiber', value: '1.0 g', per: '100g' },
        { nutrient: 'Vitamin A', value: '90% DV', per: '100g' },
        { nutrient: 'Vitamin C', value: '50% DV', per: '100g' },
        { nutrient: 'Vitamin K', value: '45% DV', per: '100g' },
        { nutrient: 'Folate', value: '17% DV', per: '100g' },
        { nutrient: 'Calcium', value: '7% DV', per: '100g' },
        { nutrient: 'Potassium', value: '6% DV', per: '100g' },
      ],
      storageTips: [
        'Store in refrigerator at 2–5°C',
        'Keep in perforated or breathable packaging',
        'Do not wash before storing',
        'Wash before consumption',
        'Best consumed within 5–5 days of purchase'
      ],
      image: 'https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture/fresh2/BokChoy/BokchoyDescriptionimage.png',
      mrp: 'Rs.235/-',
      brandName: 'Fresh From The Future',
      batchNumber: 'FFTFBC090326',
      fssaiNumber: '10826005000480',
      packagingDate: '09/03/2026',
      companyAddress: 'Fresh From The Future Pvt. Ltd., 4378 P, Sector 23, Palam Vihar, Gurgaon, Haryana-122017',
      howToUse: [
        'Chop and add to stir-fries and noodles',
        'Use in soups and broths',
        'Sauté with garlic and olive oil as a side dish',
        'Add to salads for extra crunch',
        'Steam or grill for a healthy side',
        'Use in wraps or rice bowls',
        'Pair with tofu, chicken, or seafood'
      ]
    },
    liveImpact: {
      score: '97.3',
      carbon: '710.60',
      water: '2650.20',
      energy: '1585.50',
      health: '93.5',
      image: 'https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture/fresh2/BokChoy/BokchoyLiveImpactimage.jpg'
    },
    milestones: {
      sowing: {
        defaultDate: 'October 11, 2025',
        seedType: 'Non GMO Seeds',
        image: 'https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture/fresh2/Rectangle 46 (1).png'
      },
      transplant: {
        defaultDate: 'October 25, 2025',
        image: 'https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture/fresh2/Gemini_Generated_Image_pzp2d4pzp2d4pzp2.png'
      },
      harvest: {
        defaultDate: 'December 08, 2025',
        duration: '48–52 days from germination to harvest',
        batchId: 'BKC-701',
        method: 'Hand-harvested and quality-checked under AI-guided lighting',
        yieldBoxes: '110 kg',
        headSize: '150–200g per head',
        pesticide: 'None'
      }
    },
    environment: {
      temp: '18–22°C (maintained 24/7)',
      humidity: '55–65% RH',
      lighting: 'Full-spectrum LED, 14 hours/day',
      nutrients: 'AI-controlled hydroponic nutrient delivery'
    }
  },

  'curly-kale': {
    id: 'curly-kale',
    name: 'Kale',
    heroImage: 'https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture/fresh2/CurlyKale/CurlyKaleMain.png',
    productDescription: {
      type: 'Kale',
      weight: '100g per pack',
      shelfLife: '5–7 days (refrigerated)',
      bestBefore: '7 days from the date of harvest',
      description: `Our hydroponic Kale is cultivated in a precision-controlled vertical farming system with optimized light intensity, temperature, humidity, and nutrient delivery. The tightly ruffled, deep green leaves offer a robust texture and slightly peppery, earthy flavor. Ideal for salads, smoothies, sautéing, baking as kale chips, and gourmet plating. Grown pesticide-free in water-efficient hydroponic systems, ensuring superior cleanliness, consistency, and year-round premium quality.`,
      features: [
        '100% Pesticide-Free',
        'Hydroponically Grown',
        'AI-Monitored Growth',
        'Climate Controlled',
        'Non-GMO',
        'Crisp & Fresh'
      ],
      nutritionalInfo: [
        { nutrient: 'Calories', value: '~35 kcal', per: '100g' },
        { nutrient: 'Protein', value: '~2.9 g', per: '100g' },
        { nutrient: 'Fiber', value: '~4.1 g', per: '100g' },
        { nutrient: 'Vitamin A', value: '~200% DV', per: '100g' },
        { nutrient: 'Vitamin K', value: '~650% DV', per: '100g' },
        { nutrient: 'Vitamin C', value: '~120% DV', per: '100g' },
        { nutrient: 'Calcium', value: '~15% DV', per: '100g' }
      ],
      storageTips: [
        'Store refrigerated at 2–4°C',
        'Keep in original packaging',
        'Wash just before use',
        'Consume within 5–7 days'
      ],
      image: 'https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture/fresh2/CurlyKale/CurlyKaleDescription.png'
    },
    liveImpact: {
      score: '97.3',
      carbon: '710.60',
      water: '2650.20',
      energy: '1585.50',
      health: '93.5',
      image: 'https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture/fresh2/CurlyKale/CurlyKaleImpact.png'
    },
    milestones: {
      sowing: {
        defaultDate: 'October 11, 2025',
        seedType: 'Non GMO Seeds',
        image: 'https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture/fresh2/Rectangle 46 (1).png'
      },
      transplant: {
        defaultDate: 'October 25, 2025',
        image: 'https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture/fresh2/Gemini_Generated_Image_pzp2d4pzp2d4pzp2.png'
      },
      harvest: {
        defaultDate: 'December 08, 2025',
        duration: '48–52 days from germination to harvest',
        batchId: 'BKC-701',
        method: 'Hand-harvested and quality-checked under AI-guided lighting',
        yieldBoxes: '110 kg',
        headSize: '150–200g per head',
        pesticide: 'None'
      }
    },
    environment: {
      temp: '18–22°C (maintained 24/7)',
      humidity: '55–65% RH',
      lighting: 'Full-spectrum LED, 14 hours/day',
      nutrients: 'AI-controlled hydroponic nutrient delivery'
    }
  },

  // --- DEFAULT FALLBACK ---
  'default': {
    id: 'default',
    name: 'Fresh From The Future',
    heroImage: 'https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture/fresh2/logo.png',
    productDescription: {
      type: 'Premium Vertical Farm Produce',
      weight: 'Varies by Pack',
      shelfLife: '5-7 Days (Refrigerated)',
      bestBefore: 'See Packaging Date',
      description: 'Experience the future of farming with our precision-grown produce. Cultivated in a controlled, pesticide-free environment using advanced hydroponics and AI monitoring to ensure peak nutrition and flavor in every bite.',
      features: ['100% Pesticide-Free', 'Hyper-Local', 'Sustainable', 'Smart-Farmed', 'Clean Greens'],
      nutritionalInfo: [
        { nutrient: 'Quality', value: 'Premium', per: 'Serving' },
        { nutrient: 'Pesticides', value: '0%', per: 'Batch' },
        { nutrient: 'Freshness', value: '100%', per: 'Harvest' }
      ],
      storageTips: ['Refrigerate immediately', 'Wash before consumption', 'Keep container closed'],
      image: 'https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture/fresh2/logo.png'
    },
    liveImpact: {
      score: '96.00',
      carbon: '550.00',
      water: '2600.00',
      energy: '1550.00',
      health: '95.0',
      image: 'https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture/fresh2/logo.png'
    },
    milestones: {
      sowing: {
        defaultDate: 'Weekly Cycle',
        seedType: 'Premium Non-GMO',
        image: 'https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture/fresh2/logo.png'
      },
      transplant: {
        defaultDate: 'Growth Stage',
        image: 'https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture/fresh2/logo.png'
      },
      harvest: {
        defaultDate: 'Daily',
        duration: 'Variable',
        batchId: 'GENERIC-BATCH',
        method: 'AI-Guided Selection',
        yieldBoxes: 'Standard',
        headSize: 'Varies by crop',
        pesticide: 'None'
      }
    },
    environment: {
      temp: '20-24°C',
      humidity: '55-65%',
      lighting: 'Full Spectrum LED',
      nutrients: 'Precision Hydroponics'
    }
  },
};