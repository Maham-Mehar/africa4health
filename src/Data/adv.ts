import PngIcons from "@/Icons/pngIcons";
export interface advData {
    id: number;
    image: string;
    text: string;
}
export const AdvocateData: advData[] = [
    {
        id: 1,
        image: PngIcons.adv1,
        text: "Our legislative and regulatory priorities represent the best opportunities to help build healthier lives free of cardiovascular disease and stroke.",

    },
    {
        id: 2,
        image: PngIcons.adv2,
        text: "Our efforts in states and communities focus on tobacco control, quality systems of care, healthy eating, active living, and access to care.",

    },
    {

        id: 3,
        image: PngIcons.adv3,
        text: "Find our media contacts, press resources and advocacy news to stay informed and help raise awareness.",

    },

]