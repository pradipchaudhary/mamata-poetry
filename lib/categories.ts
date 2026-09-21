import {
  Heart,
  HeartCrack,
  Leaf,
  Flame,
  Sparkles,
  Bird,
} from "lucide-react";

export const categories = [
  {
    id: "love",
    name: "Love",
    nepali: "प्रेम",
    description: "माया, सम्झना र अधुरो प्रेम",
    icon: Heart,
  },
  {
    id: "heartbreak",
    name: "Heartbreak",
    nepali: "विछोड",
    description: "दूरी, पीडा र मौन सम्झना",
    icon: HeartCrack,
  },
  {
    id: "life",
    name: "Life",
    nepali: "जीवन",
    description: "जीवन, समय र वास्तविकता",
    icon: Leaf,
  },
  {
    id: "motivation",
    name: "Motivation",
    nepali: "प्रेरणा",
    description: "संघर्ष, साहस र निरन्तरता",
    icon: Flame,
  },
  {
    id: "success",
    name: "Success",
    nepali: "सफलता",
    description: "मेहनत, सपना र उपलब्धि",
    icon: Sparkles,
  },
  {
    id: "healing",
    name: "Healing",
    nepali: "उपचार",
    description: "स्वीकार, शान्ति र आत्मसम्मान",
    icon: Bird,
  },
] as const;