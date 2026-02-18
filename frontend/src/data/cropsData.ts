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
    };
    transplant: {
      defaultDate: string;
      image: string;
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
  // --- 1. BASIL ITALIAN (NO headSize - will show 2 columns) ---
  'basil-italian': {
    id: 'basil-italian',
    name: 'Basil Italian',
    heroImage: 'https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture/fresh2/Italian-Basil (1).png',
    productDescription: {
      type: 'Microgreens - Basil Italian',
      weight: '5-10 g per box',
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
      image: 'https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture/fresh2/Rectangle 46.png'
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
    type: 'Bok Choy',
    weight: '150–200g per head',
    shelfLife: '5–7 days (refrigerated)',
    bestBefore: '7 days from the date of harvest',
    description: `Our hydroponic Bok Choy is grown in a climate-controlled vertical farm to produce crisp stems and tender green leaves with a mild, slightly sweet flavor. Suitable for stir-fries, soups, and steaming, harvested at peak freshness.`,
    features: [
      '100% Pesticide-Free',
      'Hydroponically Grown',
      'AI-Monitored Growth',
      'Climate Controlled',
      'Non-GMO',
      'Crisp & Fresh'
    ],
    nutritionalInfo: [
      { nutrient: 'Calories', value: '~13 kcal', per: '100g' },
      { nutrient: 'Protein', value: '~1.5g', per: '100g' },
      { nutrient: 'Fiber', value: '~1.0g', per: '100g' },
      { nutrient: 'Vitamin A', value: '~45% DV', per: '100g' },
      { nutrient: 'Vitamin C', value: '~75% DV', per: '100g' },
      { nutrient: 'Calcium', value: '~10% DV', per: '100g' }
    ],
    storageTips: [
      'Store refrigerated at 2–4°C',
      'Keep in original packaging',
      'Wash just before use',
      'Consume within 5–7 days'
    ],
    image: 'https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture/fresh2/BokChoy/BokchoyDescriptionimage.png'
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
  name: 'Curly Kale',
  heroImage: 'https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture/fresh2/CurlyKale/CurlyKaleMain.png',
  productDescription: {
    type: 'Curly Kale',
    weight: '150–200g per head',
    shelfLife: '5–7 days (refrigerated)',
    bestBefore: '7 days from the date of harvest',
    description: `Our hydroponic Curly Kale is cultivated in a precision-controlled vertical farming system with optimized light intensity, temperature, humidity, and nutrient delivery. The tightly ruffled, deep green leaves offer a robust texture and slightly peppery, earthy flavor. Ideal for salads, smoothies, sautéing, baking as kale chips, and gourmet plating. Grown pesticide-free in water-efficient hydroponic systems, ensuring superior cleanliness, consistency, and year-round premium quality.`,
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