"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FiChevronDown, FiChevronUp, FiMapPin } from "react-icons/fi";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ContactSection from "@/components/getInTouch";

  // --- Interfaces ---
  interface Product {
    name: string;
    subTitle: string;
    image: string;
    nutrients: { label: string; value: string }[];
    description: string;
    recipe: {
      title: string;
      text: string;
    };
  }

  interface ProjectData {
    id: string;
    hero: {
      title: string;
      buttonText: string;
      bgImage: string;
    };
    intro: {
      title: string;
      image: string;
      description: string[];
    };
    collectionTitle: string;
    collectionSubTitle: string;
    products: Product[];
    location: {
      text: string;
      link: string;
    };
  }

  // --- Data Constants ---
  const feedbacks = [
    {
      name: "Bricks and Beans",
      image: "https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture/about/feedback-1.png",
      review:
        "Exceptional greens! Noticeably fresher, brighter, and better textured than whatever we've used before.",
    },
    {
      name: "The Big Tree",
      image: "https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture/about/feedback-2.png",
      review:
        "The leaf quality is outstanding. Stays crisp longer, plates beautifully, and tastes incredibly clean.",
    },
    {
      name: "Wine Company",
      image: "https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture/about/feedback-3.png",
      review:
        "These are the freshest, best-tasting greens I've ever received. The traceability is next-level — it shows the whole crop journey and even the environmental impact.",
    },
    {
      name: "Cafe Soul Garden",
      image: "https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture/about/feedback-4.png",
      review:
        "These greens elevate our pizzas, visually stunning and full of freshness that stands out even after baking.",
    },
    {
      name: "Laidback Cafe",
      image: "https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture/about/feedback-5.png",
      review:
        "Excellent freshness and quality - these greens clearly stand above regular suppliers.",
    },
    {
      name: "Le Meridien",
      image: "https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture/about/feedback-6.png",
      review:
        "Consistently superior quality that meets our high standards. Visual appeal and texture that delights our guests.",
    },
  ];

  const faqs = [
    {
      question: "How is the produce grown in your lab?",
      answer:
        "We use hydroponic and advanced precision farming techniques, powered by INNOFarms.AI. Every plant is nurtured under exact nutrient, light, and temperature conditions, ensuring the highest quality and freshness year-round.",
    },
    {
      question: "Are your products safe and pesticide-free?",
      answer:
        "Yes, our controlled environment agriculture ensures that all produce is 100% pesticide-free, protected from pests and pollutants without the use of harmful chemicals.",
    },
    {
      question:
        "Do you supply only to restaurants and hotels, or can individuals order as well?",
      answer:
        "While our primary focus is premium HoReCa partners, we also offer subscription boxes for individual connoisseurs who appreciate chef-grade quality at home.",
    },
    {
      question: "How do you ensure the produce stays fresh after harvest?",
      answer:
        "Our hyper-local model means harvest happens hours before delivery. We use temperature-controlled logistics to maintain the 'living fresh' quality right to your doorstep.",
    },
    {
      question:
        "What makes Fresh From The Future's produce different from regular?",
      answer:
        "Unlike regular produce, ours is AI-optimized for flavor and nutrition. It is cleaner, fresher (harvested same-day), and offers unique chef-curated varieties not found in traditional markets.",
    },
  ];

  const projectsData: ProjectData[] = [
    {
      id: "le-marche",
      hero: {
        title: "Now Available at Le Marche Store",
        buttonText: "Explore Our Produce",
        bgImage: "/images/about/lamarchehero.png",
      },
      intro: {
        title: "Le Marche Now Stocks Our Fresh Hydroponic Greens",
        image: "/images/about/le-marche-products.png",
        description: [
          "Fresh from the Future products are now available at Le Marche store. You can now enjoy our premium hydroponically grown greens, including Salad Mix with Cherry Tomato-Premium Hydroponic, Salad Mix with Microgreens -Premium Hydroponic, Lettuce Mix-Premium Hydroponic, Bokchoy-Premium Hydroponic, Premium Microgreen Mix.",
          "Grown with advanced hydroponic technology to ensure maximum freshness, nutrition, and quality, these products are now ready for you to pick up in-store. Visit Le Marche today and grab yours while they're fresh on the shelves!"
        ]
      },
      collectionTitle: "Our Premium Greens Collection",
      collectionSubTitle: "From our controlled farms to your table — discover freshness in every box.",
      products: [
        {
          name: "SALAD MIX WITH CHERRY TOMATO",
          subTitle: "Nutritional Values per 100g",
          image: "/images/about/salad-mix-cherry-larmache.png",
          nutrients: [
            { label: "Calories", value: "30 kcal" },
            { label: "Protein", value: "2.2 g" },
            { label: "Fiber", value: "2.5 g" },
            { label: "Vitamin A", value: "110% DV" },
            { label: "Folate", value: "20% DV" },
            { label: "Potassium", value: "8% DV" },
            { label: "Vitamin C", value: "40% DV" },
            { label: "Vitamin K", value: "150% DV" },
          ],
          description: "Our Salad Mix With Cherry Tomato – Premium Hydroponic is a vibrant blend of crisp lettuces and nutrient-rich greens, grown under carefully controlled conditions to ensure consistent quality, freshness, and flavor. Each leaf is harvested at the right stage to deliver the perfect balance of texture — from the mild crunch of romaine to the delicate curls of frisée — complemented by tender kale and juicy cherry tomatoes. This thoughtfully balanced mix includes Lollo Bionda, Lollo Rosso, Romaine, Frisée, Kale, Red Vein Sorrel, Swiss Chard, Bok Choy, and Cherry Tomatoes, making it ideal for wholesome salads, healthy bowls, and gourmet plating. Clean, fresh, and ready to use, this mix brings both nutrition and taste to your plate.",
          recipe: {
            title: "HEALTHY, FRESH & QUICK RECIPE",
            text: "Open, rinse if needed, and toss the salad mix with balsamic honey dressing. Enjoy it as is, or add grilled chicken, feta, avocado, nuts, or seeds for a quick, wholesome meal. Best enjoyed fresh for maximum flavor and nutrition."
          }
        },
        {
          name: "BOKCHOY",
          subTitle: "Nutritional Values per 100g",
          image: "/images/about/bokchoy-lamarche.png",
          nutrients: [
            { label: "Vitamin C", value: "50% DV" },
            { label: "Vitamin K", value: "45% DV" },
            { label: "Folate", value: "17% DV" },
            { label: "Calcium", value: "7% DV" },
            { label: "Potassium", value: "6% DV" },
            { label: "Calories", value: "13 kcal" },
            { label: "Protein", value: "1.5 g" },
            { label: "Fiber", value: "1.0 g" },
            { label: "Vitamin A", value: "90% DV" },
          ],
          description: "Our Bok Choy – Premium Hydroponic (1 kg) is grown under carefully controlled conditions to ensure clean, crisp, and nutrient-rich produce. Each plant is cultivated with precision and harvested at peak freshness, resulting in tender stems and vibrant green leaves with a mild, slightly sweet flavor. Bok choy is a versatile leafy green widely used in Asian and continental cuisines. Its crunchy stalks and delicate leaves make it perfect for stir-fries, soups, salads, and sautéed dishes. Fresh, wholesome, and ready to use, this bok choy delivers both great taste and high nutritional value.",
          recipe: {
            title: "HEALTHY, FRESH & QUICK RECIPE",
            text: "The Bok Choy is fresh and crisp. Chop the greens and add them to stir-fries or noodles, or toss them into soups and broths for extra flavor. Sauté with garlic and oil for a quick, tasty side, or enjoy them raw in salads for a satisfying crunch. They can also be steamed or grilled as a healthy accompaniment, added to wraps or rice bowls, and paired perfectly with tofu, chicken, or seafood for a complete, nutritious meal."
          }
        },
        {
          name: "MICROGREEN MIX",
          subTitle: "Nutritional Values per 100g",
          image: "/images/about/microgreens-lamarche.png",
          nutrients: [
            { label: "Vitamin C", value: "60% DV" },
            { label: "Vitamin K", value: "120% DV" },
            { label: "Folate", value: "30% DV" },
            { label: "Iron", value: "12% DV" },
            { label: "Calories", value: "35 kcal" },
            { label: "Protein", value: "3.0 g" },
            { label: "Fiber", value: "2.2 g" },
            { label: "Vitamin A", value: "140% DV" },
            { label: "Calcium", value: "10% DV" },
          ],
          description: "Our Microgreen Mix – Premium Hydroponic (60g) is a vibrant blend of nutrient-dense young greens, carefully grown under controlled conditions to ensure freshness, flavor, and quality. Harvested at an early stage, these microgreens are tender, flavorful, and packed with essential nutrients. This premium mix includes Red Amaranthus, Red Cabbage, and Basil microgreens, offering a beautiful combination of colors and flavors — from the mild sweetness of amaranthus to the subtle peppery notes of red cabbage and the aromatic freshness of basil. Perfect for garnishing, salads, sandwiches, and gourmet dishes, this microgreen mix adds both nutrition and visual appeal to any plate.",
          recipe: {
            title: "HEALTHY, FRESH & QUICK RECIPE",
            text: "Sprinkle the microgreen mix on top of salads to boost flavor and nutrition, or use them as a fresh garnish for soups and main courses. They're perfect for adding a crisp, vibrant touch to sandwiches, wraps, and burgers, or for blending into smoothies and juices. You can also sprinkle them over pasta, pizza, or rice bowls, pair them with eggs or avocado toast, and even use them in gourmet plating to enhance color and texture."
          }
        },
        {
          name: "LETTUCE MIX",
          subTitle: "Nutritional Values per 100g",
          image: "/images/about/lettuce.png",
          nutrients: [
            { label: "Vitamin C", value: "12% DV" },
            { label: "Vitamin K", value: "95% DV" },
            { label: "Folate", value: "28% DV" },
            { label: "Potassium", value: "6% DV" },
            { label: "Calories", value: "18 kcal" },
            { label: "Protein", value: "1.4 g" },
            { label: "Fiber", value: "2.0 g" },
            { label: "Vitamin A", value: "140% DV" },
          ],
          description: "Our Lettuce Mix – Premium Hydroponic (150g) is a fresh and flavorful blend of five carefully selected lettuce varieties, grown under controlled conditions to ensure consistent quality, crispness, and taste. Each leaf is harvested at peak freshness to deliver a perfect balance of textures — from the soft, buttery leaves of butterhead to the crisp bite of romaine and the delicate curls of frisée. This premium mix includes Lollo Bionda, Lollo Rosso, Romaine, Butterhead, and Frisée lettuce, making it ideal for fresh salads, sandwiches, wraps, and gourmet plating. Clean, fresh, and ready to use, this lettuce mix is perfect for everyday healthy meals and fine dining alike.",
          recipe: {
            title: "HEALTHY, FRESH & QUICK RECIPE",
            text: "The lettuce mix is fresh, crisp, and ready to enjoy. These greens are perfect for tossing with a quick honey mustard vinaigrette, making a light and flavorful salad. You can enjoy them as they are, or elevate your meal by adding grilled chicken, paneer, avocado, or a sprinkle of nuts and seeds. Best savored fresh, this lettuce mix delivers maximum taste and nutrition."
          }
        },
        {
          name: "SALAD MIX WITH MICROGREEN",
          subTitle: "Nutritional Values per 100g",
          image: "/images/about/salad-microgreens.png",
          nutrients: [
            { label: "Calories", value: "28 kcal" },
            { label: "Protein", value: "2.4 g" },
            { label: "Fiber", value: "2.6 g" },
            { label: "Vitamin A", value: "120% DV" },
            { label: "Vitamin C", value: "45% DV" },
            { label: "Vitamin K", value: "160% DV" },
            { label: "Folate", value: "22% DV" },
            { label: "Calcium", value: "8% DV" },
            { label: "Iron", value: "10% DV" },
            { label: "Potassium", value: "9% DV" },
          ],
          description: "Our Salad Mix with Microgreens – Premium Hydroponic (150g) is a carefully curated blend of fresh, hydroponically grown lettuces, exotic greens, and vibrant microgreens. Grown in a precision-controlled environment, each leaf is harvested at peak freshness to deliver exceptional taste, texture, and nutrition. This premium mix includes Lollo Bionda, Lollo Rosso, Romaine, Frisée, Kale, Red Vein Sorrel, Swiss Chard, Bok Choy, and a nutrient-rich combination of Red Amaranthus, Red Radish, Red Cabbage, and Basil microgreens. The variety of textures — from crisp romaine to tender microgreens — makes it perfect for gourmet salads, wraps, sandwiches, and fine dining presentations. Fresh, clean, and beyond organic — grown with precision and care for superior quality and consistency.",
          recipe: {
            title: "HEALTHY, FRESH & QUICK RECIPE",
            text: "These Salad Mix with Microgreens are a simple way to enhance both flavor and nutrition in your meals. Open, rinse lightly if you like, and toss the salad mix with Spicy Soya + Sesame dressing. Enjoy it fresh, or level it up with grilled chicken, paneer, avocado, nuts, or seeds. Best eaten fresh for peak taste and nutrition."
          }
        }
      ],
      location: {
        text: "Le Marche - Google maps direction",
        link: "https://www.google.com/maps/place/Le+Marche/@28.4713598,77.0354045,13z/data=!3m1!5s0x390d18b45a1fdced:0x860ae972bd861535!4m6!3m5!1s0x390d18b4588d6807:0xb04b0ea66e7634b1!8m2!3d28.4474099!4d77.0995451!16s%2Fg%2F119t7fx_j?entry=ttu&g_ep=EgoyMDI2MDMyMy4xIKXMDSoASAFQAw%3D%3D",
      }
    },
    {
      id: "soul-foods",
      hero: {
        title: "Now Available at Soul Foods Store",
        buttonText: "Explore Our Produce",
        bgImage: "/images/about/soulfoods.png",
      },
      intro: {
        title: "Soul Foods Now Stocks Our Fresh Hydroponic Greens",
        image: "/images/about/le-marche-products.png",
        description: [
          "Fresh from the Future products are now available at Soul Foods store. You can now enjoy our premium hydroponically grown greens, harvested hours before they reach the shelves.",
          "Our partnership with Soul Foods brings the highest quality, pesticide-free produce to your neighborhood. Visit Soul Foods today and experience the difference of AI-optimized farming!"
        ]
      },
      collectionTitle: "Our Soulful Greens Collection",
      collectionSubTitle: "Nourishing your soul with every leaf — locally grown, globally inspired.",
      products: [
        {
          name: "PREMIUM MICROGREEN MIX",
          subTitle: "Nutritional Values per 100g",
          image: "/images/about/salad-mix-cherry.png",
          nutrients: [
            { label: "Calories", value: "25 kcal" },
            { label: "Protein", value: "3.1 g" },
            { label: "Fiber", value: "1.8 g" },
            { label: "Vitamin A", value: "95% DV" },
            { label: "Folate", value: "15% DV" },
            { label: "Potassium", value: "6% DV" },
            { label: "Vitamin C", value: "60% DV" },
            { label: "Vitamin K", value: "120% DV" },
          ],
          description: "Our Premium Microgreen Mix is a powerhouse of nutrition and flavor. These young seedlings are packed with up to 40 times more nutrients than their mature counterparts. Each variety in the mix is chosen for its specific flavor profile — from peppery radish to nutty sunflower — creating a complex and sophisticated taste experience.",
          recipe: {
            title: "MICROS FOR EVERY MEAL",
            text: "Garnish your favorite dishes, fold them into omelets, or use them as a base for a concentrated nutrient shot. The possibilities are endless with our versatile microgreen mix."
          }
        }
      ],
      location: {
        text: "Soul Foods - Google maps direction",
        link: "https://www.google.com/maps/place/Soul+Foods+Retail+Private+Limited/@28.4158799,77.102038,17z/data=!3m1!4b1!4m6!3m5!1s0x390d21c5b9574771:0x8bc1e10a1d6aee01!8m2!3d28.4158799!4d77.102038!16s%2Fg%2F11x13gt2_q?entry=ttu&g_ep=EgoyMDI2MDMyNC4wIKXMDSoASAFQAw%3D%3D",
      }
    }
  ];

export default function AboutUs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeProductIndex, setActiveProductIndex] = useState<{ [key: string]: number }>({
    "le-marche": 0,
    "soul-foods": 0,
  });

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const glassStyle = {
    background: `radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(165, 239, 255, 0.2) 0%, rgba(110, 191, 244, 0.045) 77.08%, rgba(70, 144, 213, 0) 100%)`,
    backdropFilter: "blur(40px)",
    WebkitBackdropFilter: "blur(40px)",
    backgroundBlendMode: "overlay, normal",
    border: "1px solid rgba(255, 255, 255, 0.2)",
  };

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveProductIndex((prev) => {
        const newState = { ...prev };
        projectsData.forEach((project) => {
          const currentIndex = prev[project.id] || 0;
          newState[project.id] = (currentIndex + 1) % project.products.length;
        });
        return newState;
      });
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  const nextProduct = (projectId: string, max: number) => {
    setActiveProductIndex((prev) => ({
      ...prev,
      [projectId]: (prev[projectId] + 1) % max,
    }));
  };

  const prevProduct = (projectId: string, max: number) => {
    setActiveProductIndex((prev) => ({
      ...prev,
      [projectId]: (prev[projectId] - 1 + max) % max,
    }));
  };

  return (
    <main className="w-full overflow-x-hidden bg-white">
      {/* --- 1. Hero Section --- */}
      <section className="relative w-full h-[500px] md:h-[600px] flex flex-col items-center justify-center overflow-hidden gap-8">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture/about/about-bg.png"
            alt="About Us Leafy Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Glass Container */}
        <div
          className="relative z-10 w-[90%] max-w-[1277px] min-h-[180px] rounded-[30px] flex flex-col items-center justify-center text-center px-6 py-10"
          style={{
            background: `radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(165, 239, 255, 0.2) 0%, rgba(110, 191, 244, 0.0447917) 77.08%, rgba(70, 144, 213, 0) 100%)`,
            backdropFilter: "blur(40px)",
            WebkitBackdropFilter: "blur(40px)",
            backgroundBlendMode: "overlay, normal",
            border: "1px solid rgba(255, 255, 255, 0.2)",
          }}
        >
          <h1 className="font-spartan font-bold text-[36px] md:text-[48px] leading-[54px] text-white mb-2 drop-shadow-md">
            About Us
          </h1>
          <h2 className="font-spartan font-bold text-[20px] md:text-[32px] leading-[1.4] text-[#DCBC88] drop-shadow-sm">
            The Future of Farming, Delivered Fresh
          </h2>
        </div>

        {/* Button */}
        <Link
          href="/our-produces"
          className="relative z-10 bg-white text-[#3D550C] font-outfit font-medium text-[16px] md:text-[18px] px-8 py-3 rounded-full hover:bg-gray-100 transition-colors shadow-lg"
        >
          Explore Our Produce
        </Link>
      </section>

      {/* --- 2. Main Content (About & Pod) --- */}
      {/* --- 2. Main Content (About & Pod) --- */}
      <section className="w-full bg-white py-16 lg:py-24">
        {/* Container for Part A and Part B */}
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[100px] flex flex-col gap-12 lg:gap-0">
          
          {/* Part A: About Fresh From The Future */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="flex flex-col order-2 lg:order-1 max-w-[654px]">
              <h2 className="font-spartan font-bold text-[40px] lg:text-[54px] leading-[1.1] lg:leading-[60px] text-[#3D550C] mb-8">
                About <br className="hidden lg:block" />
                Fresh From The Future
              </h2>
              <div className="font-spartan font-normal text-[18px] lg:text-[20px] leading-[34px] text-[#1E1E1E] space-y-8 max-w-[621px]">
                <p>
                  Fresh From The Future is a premium HoReCa produce brand
                  offering beyond-organic hydroponic leafy greens, microgreens,
                  and edible flowers. Powered by INNOFarms.AI, our produce is
                  grown in a fully controlled, AI-enabled, and traceable
                  environment that ensures unmatched purity, consistency, and
                  freshness.
                </p>
                <p>
                  Designed on advanced Singapore and UAE precision farming
                  models, our state-of-the-art facility in Gurugram enables us
                  to deliver hyper-local, hyper-fresh, and completely
                  pesticide-free produce.
                </p>
                <p>
                  Every leaf is cultivated with precision, sustainability, and
                  transparency—crafted to meet the highest standards of chefs,
                  restaurants, and culinary professionals.
                </p>
              </div>
            </div>
            {/* UPDATED: Height reduced to 600px to tighten space */}
            <div className="relative w-full h-[400px] lg:h-[600px] rounded-[30px] overflow-hidden shadow-xl order-1 lg:order-2">
              <Image
                src="https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture/about/about-2.png"
                alt="Chef Plating Fresh Greens"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Part B: The INNOGrowPod */}
         {/* Part B: The INNOGrowPod */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Image & Caption */}
            <div className="flex flex-col order-1">
              {/* UPDATED: Height reduced from 1000px to 750px to remove top whitespace */}
              <div className="relative w-full h-[500px] lg:h-[750px]">
                <Image
                  src="https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture/about/about-3.png"
                  alt="INNOGrowPod AI Farming Unit"
                  fill
                  className="object-contain scale-125" 
                  priority
                />
              </div>
              {/* Adjusted caption position slightly */}
              <div className="text-center w-full px-4 mt-8">
                <h4 className="font-spartan font-bold text-[20px] leading-[34px] text-[#1E1E1E] mb-1">
                  Nespresso of Vertical Farming
                </h4>
                <p className="font-spartan font-normal text-[16px] lg:text-[20px] leading-[34px] text-[#1E1E1E] opacity-80">
                  — elegant, smart, traceable, and profitable.
                </p>
              </div>
            </div>

            {/* Right Column: Text Content */}
            <div className="flex flex-col order-2 max-w-[621px]">
              <h2 className="font-spartan font-bold text-[40px] lg:text-[54px] leading-[1.1] lg:leading-[60px] text-[#3D550C] mb-8">
                The INNOGrowPod™
              </h2>
              <div className="font-spartan font-normal text-[18px] lg:text-[20px] leading-[34px] text-[#1E1E1E] space-y-6">
                <p>
                  We provide the INNOGrowPod™, an AI-powered on-site farming
                  unit for premium kitchens, enabling chefs to grow fresh,
                  high-quality produce directly in their restaurants.
                </p>
                <p>
                  This ensures superior flavor, sustainability, and control over
                  ingredients from seed to plate. These pods are available in
                  varied sizes from mini to max.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- 3. AI Precision Lab Section --- */}
      <section className="w-full bg-white py-20 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[100px]">
          <div className="text-center mb-16">
            <h2 className="font-spartan font-bold text-[40px] lg:text-[54px] leading-[1.1] text-[#3D550C] mb-4">
              Inside Our AI-Powered Precision Lab
            </h2>
            <p className="font-spartan font-normal text-[18px] lg:text-[20px] leading-[34px] text-[#1E1E1E]">
              AI-driven precision growing for unmatched freshness and purity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="relative w-full h-[300px] lg:h-[400px] rounded-[30px] overflow-hidden shadow-lg group">
              <Image
                src="https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture/about/inside-1.png"
                alt="Glass Lab"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="relative w-full h-[300px] lg:h-[400px] rounded-[30px] overflow-hidden shadow-lg group">
              <Image
                src="https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture/about/inside-2.png"
                alt="Top Down Greens"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="relative w-full h-[300px] lg:h-[400px] rounded-[30px] overflow-hidden shadow-lg group">
              <Image
                src="https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture/about/inside-3.png"
                alt="Grow Shelves"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          <div className="font-spartan font-normal text-[20px] leading-[34px] text-[#1E1E1E] space-y-8 text-center md:text-left">
            <p>
              Our produce is grown with absolute precision in a fully
              controlled, AI-driven environment that operates 24/7. Inside our
              state-of-the-art lab, every leaf and microgreen is nurtured under
              strict monitoring to ensure unmatched freshness, purity, and
              beyond-organic quality.
            </p>
            <p>
              Free from pesticides and external contaminants, our controlled
              ecosystem allows us to maintain perfect conditions
              year-round—delivering consistently superior, hyper-fresh produce
              crafted to meet the highest standards of chefs and HoReCa
              professionals.
            </p>
          </div>
        </div>
      </section>

      {/* --- 4. Feedback Section --- */}
      <section className="w-full bg-white py-20 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[100px]">
          <div className="text-center mb-16">
            <h2 className="font-spartan font-bold text-[40px] lg:text-[54px] leading-[1.1] text-[#3D550C] mb-4">
              Feedback from Visionary Chefs
            </h2>
            <p className="font-spartan font-normal text-[18px] lg:text-[20px] leading-[34px] text-[#1E1E1E]">
              Hear how chefs praise our innovative flavors and inspiring
              service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {feedbacks.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="relative w-full aspect-[393/208] rounded-[10px] overflow-hidden mb-6 shadow-md group cursor-default">
                  <Image
                    src={item.image}
                    alt={`${item.name} Feedback`}
                    fill
                    className="object-cover transition-transform duration-1000 ease-in-out group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0 bg-[#DCBC88] bg-opacity-95 flex items-center justify-center p-6 
                                          opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out"
                  >
                    <p
                      className="font-spartan font-normal text-[18px] leading-[34px] tracking-normal text-[#1E1E1E] text-center 
                                            translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ease-out delay-100"
                    >
                      {item.review}
                    </p>
                  </div>
                </div>
                <h3 className="font-spartan font-bold text-[24px] lg:text-[30px] leading-[34px] text-[#3D550C] text-center">
                  {item.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

    
      {/* --- 6. Le Marche & Soul Foods Sections --- */}
      {projectsData.map((project: ProjectData) => (
        <div key={project.id} className="w-full">


          {/* Intro Section */}
          <section className="w-full bg-white py-20">
            <div className="max-w-[1440px] mx-auto px-6 text-center">
              <h2 className="font-spartan font-bold text-[40px] lg:text-[72px] leading-[1.1] text-[#3D550C] mb-12">
                {project.intro.title}
              </h2>
              <div className="relative w-full max-w-[1000px] mx-auto aspect-[16/9] mb-12">
                <Image
                  src={project.intro.image}
                  alt={project.id}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="max-w-[1100px] mx-auto text-center font-spartan font-normal text-[18px] lg:text-[22px] leading-[1.6] text-[#1E1E1E] space-y-6">
                {project.intro.description.map((p: string, idx: number) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>
          </section>

          {/* Premium Collection Carousel */}
          <section id={`${project.id}-collection`} className="w-full bg-[#FCF8F1] py-24">
            <div className="max-w-[1440px] mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="font-spartan font-bold text-[40px] lg:text-[64px] leading-[1.1] text-[#3D550C] mb-4">
                  {project.collectionTitle}
                </h2>
                <p className="font-spartan font-normal text-[18px] lg:text-[24px] text-[#1E1E1E] opacity-70">
                  {project.collectionSubTitle}
                </p>
              </div>

              <div className="relative group/arrows max-w-[1240px] mx-auto">
                {/* Navigation Arrows */}
                <button 
                  onClick={() => prevProduct(project.id, project.products.length)}
                  className="absolute top-1/2 -translate-y-1/2 -left-4 lg:-left-20 z-20 text-[#3D550C] hover:text-[#B6E33B] transition-colors p-2 md:opacity-0 group-hover/arrows:opacity-100"
                >
                  <BsArrowLeftCircle size={48} />
                </button>
                <button 
                  onClick={() => nextProduct(project.id, project.products.length)}
                  className="absolute top-1/2 -translate-y-1/2 -right-4 lg:-right-20 z-20 text-[#3D550C] hover:text-[#B6E33B] transition-colors p-2 md:opacity-0 group-hover/arrows:opacity-100"
                >
                  <BsArrowRightCircle size={48} />
                </button>

                {project.products.map((product: Product, pIdx: number) => (
                  <div 
                    key={pIdx}
                    className={`${activeProductIndex[project.id] === pIdx ? "block" : "hidden"} transition-opacity duration-500`}
                  >
                    <h3 className="text-center font-spartan font-bold text-[36px] lg:text-[56px] text-[#1E1E1E] mb-12 tracking-wide uppercase">
                      {product.name}
                    </h3>
                    
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24 mb-16">
                      {/* Left Nutrients */}
                      <div className="flex flex-col gap-6 w-full lg:w-auto order-2 lg:order-1">
                        {product.nutrients.slice(0, 4).map((n: { label: string; value: string }, i: number) => (
                          <div key={i} className="flex items-center justify-end gap-4">
                            <span className="font-spartan font-normal text-[20px] lg:text-[28px] text-[#1E1E1E]">{n.label}: {n.value}</span>
                            <div className="w-6 h-6 rounded-full bg-[#B6E33B]" />
                          </div>
                        ))}
                      </div>

                      {/* Center Product Image */}
                      <div className="relative w-full max-w-[700px] aspect-square order-1 lg:order-2">
                         <div className="absolute inset-0 bg-[#E8D8C3] rounded-full opacity-20 blur-3xl" />
                         <Image 
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-contain drop-shadow-2xl translate-y-[-10px]"
                         />
                      </div>

                      {/* Right Nutrients */}
                      <div className="flex flex-col gap-6 w-full lg:w-auto order-3">
                        {product.nutrients.slice(4).map((n: { label: string; value: string }, i: number) => (
                          <div key={i} className="flex items-center gap-4">
                            <div className="w-6 h-6 rounded-full bg-[#B6E33B]" />
                            <span className="font-spartan font-normal text-[20px] lg:text-[28px] text-[#1E1E1E]">{n.label}: {n.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="max-w-[1200px] mx-auto text-center font-spartan font-normal text-[18px] lg:text-[20px] leading-[1.8] text-[#1E1E1E] opacity-80 mb-16 px-4">
                      {product.description}
                    </div>

                    <div className="max-w-[1200px] mx-auto bg-[#E6F3CC] rounded-[20px] p-8 lg:p-12 text-center shadow-sm">
                      <h4 className="font-spartan font-bold text-[24px] lg:text-[32px] text-[#1E1E1E] mb-4">
                        {product.recipe.title}
                      </h4>
                      <p className="font-spartan font-normal text-[18px] lg:text-[22px] leading-[1.6] text-[#1E1E1E]">
                        {product.recipe.text}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Navigation Dots */}
                {project.products.length > 1 && (
                  <div className="flex justify-center gap-4 mt-12">
                    {project.products.map((_: Product, dotIdx: number) => (
                      <button
                        key={dotIdx}
                        onClick={() => setActiveProductIndex(prev => ({ ...prev, [project.id]: dotIdx }))}
                        className={`w-3 h-3 rounded-full transition-all ${
                          activeProductIndex[project.id] === dotIdx ? "bg-[#3D550C] w-8" : "bg-[#D1D5DB]"
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Location Banner */}
          <section className="w-full py-16 px-6">
            <div className="max-w-[1440px] mx-auto">
              <a 
                href={project.location.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-between bg-[url('/images/about/maps.png')] bg-cover bg-center rounded-[30px] p-6 lg:p-10 overflow-hidden"
              >
                <div className="absolute inset-0 bg-[#3D550C] opacity-40 group-hover:opacity-50 transition-opacity" />
                <div className="relative z-10 w-20 h-20 lg:w-32 lg:h-32 bg-[#DCBC88] rounded-full flex items-center justify-center text-[#1E1E1E] shadow-2xl group-hover:scale-110 transition-transform">
                  <FiMapPin size={40} className="lg:hidden" />
                  <FiMapPin size={60} className="hidden lg:block" />
                </div>
                <div className="relative z-10 flex-grow mx-6 lg:mx-12">
                   <div className="bg-white rounded-full py-4 lg:py-8 px-12 lg:px-24 shadow-xl">
                      <span className="font-spartan font-bold text-[24px] lg:text-[48px] text-[#3D550C] border-b-4 border-[#3D550C] leading-none group-hover:text-[#1E1E1E] transition-colors">
                        {project.location.text}
                      </span>
                   </div>
                </div>
              </a>
            </div>
          </section>
        </div>
      ))}

      {/* --- 7. FAQ Section --- */}
      <section className="w-full bg-white py-20 lg:py-24">
        <div className="max-w-[1258px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-spartan font-bold text-[40px] lg:text-[54px] leading-[1.1] text-[#3D550C] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="font-spartan font-normal text-[18px] lg:text-[20px] leading-[34px] text-[#1E1E1E]">
              Quick insights into how our AI-driven, pesticide-free farming
              works.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  onClick={() => toggleFAQ(index)}
                  className={`
                              rounded-[10px] cursor-pointer transition-all duration-300 overflow-hidden
                              ${
                                isOpen
                                  ? "bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
                                  : "bg-[#DCBC88] hover:bg-[#d4b075]"
                              }
                          `}
                >
                  <div className="flex items-center justify-between px-8 py-6 lg:h-[90px]">
                    <h3 className="font-outfit font-medium text-[18px] lg:text-[24px] leading-[30px] text-[#1E1E1E]">
                      {index + 1}. {faq.question}
                    </h3>
                    <div className="shrink-0 ml-4">
                      {isOpen ? (
                        <FiChevronUp className="w-7 h-7 text-[#1E1E1E]" />
                      ) : (
                        <FiChevronDown className="w-7 h-7 text-[#1E1E1E]" />
                      )}
                    </div>
                  </div>

                  <div
                    className={`px-8 overflow-hidden transition-all duration-500 ease-in-out ${
                      isOpen
                        ? "max-h-[300px] opacity-100 pb-8"
                        : "max-h-0 opacity-0 pb-0"
                    }`}
                  >
                    <div className="border-t border-[#DCBC88] mb-6 w-full opacity-30"></div>
                    
                    {/* CHANGED: Reduced text size (text-[16px] lg:text-[20px]) */}
                    <p className="font-outfit font-normal text-[16px] lg:text-[20px] leading-[30px] text-[#313638]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- 6. Contact Form Section --- */}
      <ContactSection />
    </main>
  );
}