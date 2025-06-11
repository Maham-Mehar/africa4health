import PngIcons from "@/Icons/pngIcons";
export interface ViewData {
    id: number;
    image: string;
    text2: string;
    text3: string;
    text4: string;

}
export const ViewedData: ViewData[] = [
    {
        id: 1,
        image: PngIcons.update1,
        text2: "200 children under the age of 14 have completed their educational journey, gaining essential skills to shape a better tomorrow-",
        text3: "Learn More",
        text4: "May 30, 2025",
    },
    {
        id: 2,
        image: PngIcons.update2,
        text2: "Our latest healthcare facility brings essential medical services to over 10,000 residents in the Democratic Republic of Congo -",
        text3: "Learn More",
        text4: "May 30, 2025",
    },
    {

        id: 3,
        image: PngIcons.update3,
        text2: "Recent vaccination drive reaches over 5,000 children in remote areas of Côte d'Ivoire, providing essential immunizations - ",
        text3: "Learn More",
        text4: "May 30, 2025",
    },

]