import PngIcons from "@/Icons/pngIcons";
export interface updateData {
    id: number;
    image: string;
    text1: string;
    text2: string;
    text3: string;
    text4: string;

}
export const updatedData: updateData[] = [
    {
        id: 1,
        text1: "Education",
        image: PngIcons.update1 ,
        text2: "Our latest cohort of community health workers completed their training, ready to serve their local communities - Learn More",
        text3: "Learn More",
        text4: "May 30, 2025",
    },
    {
        id: 2,
        text1: "Healthcare Access",
        image: PngIcons.update2,
        text2: "Our latest healthcare facility brings essential medical services to over 10,000 residents in the Democratic Republic of Congo - ",
        text3: "Learn More",
        text4: "May 30, 2025",
    },
    {

        id: 3,
        text1: "Healthcare Initiative",
        image: PngIcons.update3,
        text2: "Recent vaccination drive reaches over 5,000 children in remote areas of Côte d'Ivoire, providing essential immunizations - ",
        text3: "Learn More",
        text4: "May 30, 2025",
    },

]