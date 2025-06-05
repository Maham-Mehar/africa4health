import PngIcons from "@/Icons/pngIcons";
export interface participentData {
    id: number;
    image: string;
    text: string;
}
export const ParticipentsData: participentData[] = [
    {
        id: 1,
        image: PngIcons.participent1,
        text: "Find volunteer opportunities that fit your time and talent to help fight heart disease and stroke.",

    },
    {
        id: 2,
        image: PngIcons.participent2,
        text: "Our online fundraising tool can help you customize an event that's right for you.",

    },
    {

        id: 3,
        image: PngIcons.participent3,
        text: "Add us to your workplace giving program, sponsor an event or conduct your own fundraiser.",

    },

]