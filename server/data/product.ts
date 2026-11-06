export interface Product {
  slug: string;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
  inStock: boolean;
}

const img = (seed: string) => `https://picsum.photos/seed/${seed}/900/900`;

// Sample product data
export const products: Product[] = [
  {
    slug: "solitaire-diamond-ring",
    name: "Solitaire Diamond Ring",
    price: 1450,
    category: "Rings",
    inStock: true,
    image: img("ring1"),
    description:
      "18k white gold band set with a 0.5ct brilliant-cut diamond. Timeless and hand-finished.",
  },
  {
    slug: "gold-signet-ring",
    name: "Gold Signet Ring",
    price: 390,
    category: "Rings",
    inStock: true,
    image: img("ring2"),
    description:
      "Solid 9k yellow gold signet with a polished oval face, ready for engraving.",
  },
  {
    slug: "pearl-drop-earrings",
    name: "Pearl Drop Earrings",
    price: 220,
    category: "Earrings",
    inStock: true,
    image: img("ear1"),
    description:
      "Freshwater pearls on sterling silver hooks. Light enough for all-day wear.",
  },
  {
    slug: "hoop-earrings-gold",
    name: "Gold Vermeil Hoops",
    price: 95,
    category: "Earrings",
    inStock: true,
    image: img("ear2"),
    description:
      "18k gold vermeil over sterling silver. A modern everyday classic.",
  },
  {
    slug: "sapphire-pendant-necklace",
    name: "Sapphire Pendant Necklace",
    price: 640,
    category: "Necklaces",
    inStock: false,
    image: img("neck1"),
    description: "Oval blue sapphire on a fine 45cm white gold chain.",
  },
  {
    slug: "tennis-bracelet-silver",
    name: "Silver Tennis Bracelet",
    price: 310,
    category: "Bracelets",
    inStock: true,
    image: img("brace1"),
    description:
      "Sterling silver with 40 hand-set cubic zirconia stones and a secure clasp.",
  },
];
