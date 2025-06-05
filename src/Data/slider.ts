import PngIcons from "@/Icons/pngIcons";

// Define the type for each participant
export type sliderData = {
  id: number;
  image: string;
  text: string;
};

// Apply the type to the data array
export const SliderData: sliderData[] = [
  {
    id: 1,
    image: PngIcons.s1,
    text: "Your donation helps save lives by supporting research, education, and healthcare access initiatives.",
  },
  {
    id: 2,
    image: PngIcons.s2,
    text: "A memorial or tribute is a meaningful way to celebrate someone special in your life.",
  },
  {
    id: 3,
    image: PngIcons.s3,
    text: "Become a monthly supporter today and help save lives all year long with consistent support.",
  },
  {
    id: 4,
    image: PngIcons.s4,
    text: "Fight heart disease and stroke by planning your gift through wills, trusts and estate giving.",
  },
];
