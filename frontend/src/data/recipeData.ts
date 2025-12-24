// src/data/recipeData.ts
import { StaticImageData } from 'next/image';

export interface Recipe {
  id: string | number;
  slug: string;
  title: string;
  description: string;
  meta: {
    time: string;
    prep: string;
    serves: string;
  };
  // We allow string here so we can use paths like "/images/..."
  image: string | StaticImageData;
  ingredients: string[];
  nutrition: {
    title: string;
    values: string[];
    note: string;
  };
  instructions: string[];
}

export const recipeData: Recipe[] = [
  {
    id: 1,
    slug: 'lettuce-wraps-with-chicken',
    // FIXED: Use string path relative to the public folder
    image: '/images/recipes/Lettuce.png', 
    title: 'Lettuce Wraps with Chicken',
    description: 'Light, crisp lettuce leaves filled with savory chicken and colorful vegetables. These wraps are refreshing, low-carb, and ideal for a quick lunch or healthy appetizer without compromising on flavor.',
    meta: {
      time: '15 MIN',
      prep: 'EASY PREP',
      serves: '2-3 SERVES',
    },
    ingredients: [
      '1 head of butter lettuce or romaine leaves, separated',
      '1 cup cooked shredded chicken',
      '½ cup shredded carrots',
      '½ cup diced cucumber',
      '¼ cup diced bell peppers',
      '2 tbsp hoisin sauce',
      '1 tsp soy sauce',
      '1 tsp sesame oil',
      'Green onions and sesame seeds for garnish',
    ],
    nutrition: {
      title: 'per 2 wraps, approx',
      values: [
        'Calories: 150 kcal',
        'Protein: 12 g',
        'Fat: 5 g',
        'Carbohydrates: 12 g',
        'Fiber: 3 g',
      ],
      note: 'NOTE: NUTRITIONAL VALUES ARE APPROXIMATE AND MAY VARY BASED ON SPECIFIC INGREDIENTS AND PORTION SIZES.',
    },
    instructions: [
      'Begin by carefully separating the lettuce leaves and rinsing them under cold running water to remove any dirt. Gently shake off excess water and pat each leaf dry using a clean kitchen towel or paper towels. Make sure the leaves are completely dry so they remain crisp and sturdy enough to hold the filling. Set them aside on a plate.',
      'In a medium mixing bowl, add the shredded chicken, grated carrots, diced cucumber, and finely chopped bell peppers. Toss the ingredients lightly to distribute the vegetables evenly throughout the chicken. Pour in the hoisin sauce, soy sauce, and sesame oil. Using a spoon or spatula, mix everything together until the chicken and vegetables are well coated and the flavors are evenly combined.',
      'Lay the prepared lettuce leaves flat on a serving platter. Spoon a generous amount of the chicken and vegetable mixture into the center of each leaf, being careful not to overfill. Finish by sprinkling chopped green onions and sesame seeds over the top for added flavor and crunch.',
      'Fold the lettuce leaves gently around the filling and serve immediately as a fresh, light, and flavorful dish.',
    ],
  },
  {
    id: 2,
    slug: 'arugula-lemon-parmesan-salad',
    image: '/images/recipes/Arugula.png',
    title: 'Arugula Lemon Parmesan Salad',
    description: 'A fresh and zesty salad made with peppery arugula, bright lemon dressing, and delicate shavings of Parmesan cheese. This dish is light, refreshing, and ideal for a quick lunch or elegant starter.',
    meta: {
      time: '8 MIN',
      prep: 'EASY PREP',
      serves: '2 SERVES',
    },
    ingredients: [
      '2 cups fresh arugula leaves',
      '2 tbsp olive oil',
      '1 tbsp fresh lemon juice',
      '1 garlic clove, finely minced',
      '2 tbsp shaved Parmesan cheese',
      'Salt and black pepper to taste',
    ],
    nutrition: {
      title: 'per serving approx',
      values: [
        'Calories: 120 kcal',
        'Protein: 4 g',
        'Carbohydrates: 5 g',
        'Fat: 9 g',
        'Fiber: 1.5 g',
      ],
      note: 'NOTE: NUTRITIONAL VALUES ARE APPROXIMATE AND MAY VARY BASED ON SPECIFIC INGREDIENTS AND PORTION SIZES.',
    },
    instructions: [
      'Begin by rinsing the arugula leaves thoroughly under cold running water to remove any dirt or grit. Gently shake off excess water and pat the leaves completely dry using a clean kitchen towel or paper towels. Dry leaves help the dressing cling better and keep the salad fresh and crisp.',
      'Transfer the arugula to a large salad bowl, spreading the leaves loosely to avoid bruising. In a separate small bowl, add the olive oil, freshly squeezed lemon juice, minced garlic, salt, and black pepper. Whisk the ingredients together until the dressing is well combined, smooth, and slightly emulsified.',
      'Drizzle the prepared dressing evenly over the arugula leaves. Using clean hands or salad tongs, toss the salad gently to ensure the leaves are lightly and evenly coated without wilting them. Finish by sprinkling shaved Parmesan cheese over the top for added richness and flavor.',
      'Serve immediately to enjoy the salad at its freshest, with bright citrus notes and a pleasant peppery bite.',
    ],
  },
  {
    id: 3,
    slug: 'garlic-stir-fried-bok-choy',
    image: '/images/recipes/GarlicStir.png',
    title: 'Garlic Stir-Fried Bok Choy',
    description: 'A simple yet flavorful dish where bok choy is quickly stir-fried with garlic for a warm, savory finish. Ready in minutes, this dish is perfect as a healthy side or a light main alongside rice or noodles.',
    meta: {
      time: '7 MIN',
      prep: 'EASY PREP',
      serves: '2-3 SERVES',
    },
    ingredients: [
      '1 lb bok choy, washed and chopped',
      '2 tbsp vegetable oil',
      '3 garlic cloves, minced',
      '1 tsp soy sauce',
      '1/2 tsp sesame oil',
      'Salt and pepper to taste',
      'Optional: red pepper flakes for spice',
    ],
    nutrition: {
      title: 'per 2 wraps, approx',
      values: [
        'Calories: 70 kcal',
        'Protein: 3 g',
        'Fat: 5 g',
        'Carbohydrates: 5 g',
        'Fiber: 2 g',
      ],
      note: 'NOTE: NUTRITIONAL VALUES ARE APPROXIMATE AND MAY VARY BASED ON SPECIFIC INGREDIENTS AND PORTION SIZES.',
    },
    instructions: [
      'Begin by placing a large pan or wok over medium heat and adding the vegetable oil. Allow the oil to heat for a minute until it shimmers slightly, indicating it is ready for cooking.',
      'Add the minced garlic to the hot oil and sauté gently for about 30 seconds, stirring constantly to prevent burning. The garlic should become fragrant and lightly golden, releasing its aroma.',
      'Next, add the chopped bok choy to the pan. Stir-fry the vegetables continuously for 3–4 minutes, ensuring they cook evenly. The leaves will begin to wilt and soften, while the stems should remain slightly crisp, giving the dish a pleasant texture contrast.',
      'Once the bok choy is cooked to the desired tenderness, drizzle in the soy sauce and sesame oil. Season with salt and pepper according to taste. Stir everything well so the bok choy is evenly coated with the seasoning and absorbs the flavors. Remove from heat and serve hot as a simple, flavorful, and nutritious dish.',
    ],
  },
  {
    id: 4,
    slug: 'viola-garden-salad',
    image: '/images/recipes/Viola.png',
    title: 'Viola Garden Salad',
    description: 'A visually stunning salad featuring delicate viola flowers paired with fresh greens and a light honey-lemon dressing. This dish is both elegant and refreshing, adding a floral touch to any meal.',
    meta: {
      time: '10 MIN',
      prep: 'EASY PREP',
      serves: '2-3 SERVES',
    },
    ingredients: [
      '1 cup mixed salad greens',
      '½ cup edible viola (pansy) flowers, gently washed',
      '1 tbsp olive oil',
      '1 tsp honey',
      '1 tsp lemon juice',
      'Salt to taste',
    ],
    nutrition: {
      title: 'per serving approx',
      values: [
        'Calories: 90 kcal',
        'Protein: 2 g',
        'Carbohydrates: 6 g',
        'Fat: 6 g',
        'Fiber: 2 g',
      ],
      note: 'NOTE: NUTRITIONAL VALUES ARE APPROXIMATE AND MAY VARY BASED ON SPECIFIC INGREDIENTS AND PORTION SIZES.',
    },
    instructions: [
      'Begin by gently washing the viola flowers in a bowl of cold water to remove any dirt while keeping the petals intact. Carefully lift them out and place them on a clean kitchen towel or paper towel. Pat them dry very gently, taking care not to bruise or tear the delicate petals. Set them aside.',
      'In a large salad bowl, add the mixed salad greens and spread them evenly to create a fresh base. Arrange the dried viola flowers on top of the greens, spacing them evenly so their natural colors and shapes remain visible.',
      'In a small bowl, combine the olive oil, honey, lemon juice, and a pinch of salt. Whisk the mixture until it becomes smooth and lightly emulsified, creating a balanced dressing with subtle sweetness and acidity.',
      'Just before serving, drizzle the dressing lightly over the salad. Using clean hands or salad tongs, toss the salad very gently to coat the greens while preserving the shape and beauty of the viola flowers. Serve immediately to enjoy the freshness, flavor, and visual appeal of this elegant dish.',
    ],
  },
  {
    id: 5,
    slug: 'kale-caesar-salad',
    image: '/images/recipes/kale.png',
    title: 'Kale Caesar Salad',
    description: 'A fresh and hearty salad made with tender massaged kale, tossed in a tangy Caesar-style dressing and topped with crunchy croutons and Parmesan. It’s a nutritious, filling dish that works perfectly as a light meal or a wholesome side.',
    meta: {
      time: '10 MIN',
      prep: 'EASY PREP',
      serves: '2-3 SERVES',
    },
    ingredients: [
      '1 large bunch of kale, stems removed and leaves chopped',
      '1/2 cup grated Parmesan cheese',
      '1 cup croutons',
      '1/4 cup olive oil',
      '2 tbsp lemon juice',
      '1 tsp Dijon mustard',
      '1 garlic clove, minced',
      'Salt and pepper to taste',
    ],
    nutrition: {
      title: 'per serving, approx. 1 cup',
      values: [
        'Calories: 180 kcal',
        'Protein: 6 g',
        'Fat: 14 g',
        'Carbohydrates: 9 g',
        'Fiber: 2 g',
      ],
      note: 'NOTE: NUTRITIONAL VALUES ARE APPROXIMATE AND MAY VARY BASED ON SPECIFIC INGREDIENTS AND PORTION SIZES.',
    },
    instructions: [
      'Begin by thoroughly washing the kale leaves under cold running water to remove any dirt or grit. Shake off the excess water and pat the leaves completely dry using a clean kitchen towel or salad spinner. Remove the thick stems and chop or tear the leaves into bite-sized pieces. Place the kale in a large mixing bowl, sprinkle a small pinch of salt over the leaves, and gently massage them using your hands for about 1–2 minutes. This step helps soften the kale, reduces bitterness, and makes the leaves more tender and flavorful.',
      'Next, prepare the dressing by taking a small bowl and adding olive oil, freshly squeezed lemon juice, Dijon mustard, and minced garlic. Whisk the ingredients together until the dressing becomes smooth, creamy, and well combined. Taste and adjust seasoning if needed.',
      'Pour the prepared dressing over the massaged kale. Using clean hands or salad tongs, toss the kale thoroughly to ensure every leaf is evenly coated with the dressing. This allows the flavors to absorb into the leaves for a richer taste.',
      'Finally, sprinkle freshly grated Parmesan cheese evenly over the salad, followed by crunchy croutons for texture. Give the salad a light final toss and serve immediately for the best freshness and flavor.',
    ],
  },
  {
    id: 6,
    slug: 'garlic-sauteed-spinach',
    image: '/images/recipes/GarlicStau.png',
    title: 'Garlic Sautéed Spinach',
    description: 'A simple and nourishing dish where fresh spinach is lightly sautéed with garlic and olive oil. It’s quick to prepare, full of natural flavor, and perfect as a healthy side or light meal.',
    meta: {
      time: '5 MIN',
      prep: 'EASY PREP',
      serves: '2 SERVES',
    },
    ingredients: [
      '1 bunch fresh spinach, washed and trimmed',
      '1 tbsp olive oil',
      '2 garlic cloves, minced',
      'Salt to taste',
      'Black pepper to taste',
      'Optional: a squeeze of lemon juice',
    ],
    nutrition: {
      title: 'per serving approx',
      values: [
        'Calories: 80 kcal',
        'Protein: 3 g',
        'Carbohydrates: 4 g',
        'Fat: 5 g',
        'Fiber: 2 g',
      ],
      note: 'NOTE: NUTRITIONAL VALUES ARE APPROXIMATE AND MAY VARY BASED ON SPECIFIC INGREDIENTS AND PORTION SIZES.',
    },
    instructions: [
      'Begin by washing the spinach thoroughly under cold running water to remove any dirt or grit. Shake off the excess water and drain the spinach well using a colander. There is no need to dry it completely, as a little moisture helps with wilting during cooking.',
      'Place a large pan or skillet over medium heat and add the olive oil. Allow the oil to warm for about a minute until it is evenly heated. Add the minced garlic to the pan and sauté gently for around 30 seconds, stirring continuously. The garlic should become fragrant but not browned, as overcooking can make it bitter.',
      'Add the drained spinach to the pan in batches if necessary, gently stirring as it begins to wilt. Continue cooking for 2–3 minutes, stirring occasionally, until all the spinach has softened and reduced in volume. Season with salt and freshly ground black pepper according to taste. For extra brightness, add a light squeeze of fresh lemon juice and mix well to evenly distribute the flavors.',
      'Once cooked, remove from heat and serve immediately while hot as a simple, flavorful, and nutritious dish.',
    ],
  },
];