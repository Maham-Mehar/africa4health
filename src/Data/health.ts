import PngIcons from "@/Icons/pngIcons";

export interface HealthItem {
  id: number;
  title: string;
  text: string;
  image: string;
}

export const healthData: HealthItem[] = [
  {
    id: 1,
    title: "Women's Health Initiatives",
    text: "Comprehensive programs addressing the unique health challenges faced by women across Africa.",
    image: PngIcons.c10,
  },
  {
    id: 2,
    title: "Men's Health Initiatives",
    text: "Targeted programs addressing specific health challenges affecting men in African communities.",
    image: PngIcons.c11,
  },
  {
    id: 3,
    title: "Children's Health Initiatives",
    text: "Specialized programs ensuring healthy development and care for Africa's youngest population.",
    image: PngIcons.c12,
  },
  // …add more entries as needed
];
