// src/Data/initiativesData.ts
import PngIcons from "@/Icons/pngIcons";

export type Initiative = {
  id: number;
  title?: string;
  description?: string;
  image?: string;
};

export const initiatives: Initiative[] = [
  {
    id: 1,
    title: "Healthcare Access",
    description:
      "Expanding access to quality healthcare services in underserved communities across Africa, with a focus on Côte d'Ivoire and Democratic Republic of Congo.",
  },
  { id: 2, image: PngIcons.f1 },
  { id: 3, image: PngIcons.f2 },
  {
    id: 4,
    title: "Community Empowerment",
    description:
      "Training and empowering local healthcare workers to provide sustainable, culturally-sensitive care in their communities.",
  },
  {
    id: 5,
    title: "Education & Prevention",
    description:
      "Promoting health education and awareness to reduce the burden of preventable diseases.",
  },
  { id: 6, image: PngIcons.f3 },
  { id: 7, image: PngIcons.f4 },
  {
    id: 8,
    title: "Education & Prevention",
    description:
      "Promoting health education and awareness to reduce the burden of preventable diseases.",
  },
];
