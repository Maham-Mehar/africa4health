import PngIcons from "@/Icons/pngIcons";
export interface updateData {
    id: number;
    image: string;
    title: string;
    description: string;
    category: string;
    date: string;

}
export const cardData: updateData[] = [
    {
        id: 1,
        image: PngIcons.update1,
        title: "Shop To Support",
        description: "Our latest cohort of community health workers completed their training, ready to serve their local communities ",
        category: "education",
        date: "May 30, 2025",
    },
    {
        id: 2,
        image: PngIcons.update2,
        title: "Shop To Support",
        description: "Our latest cohort of community health workers completed their training, ready to serve their local communities ",
        category: "education",
        date: "May 30, 2025",
    },
    {

        id: 3,
        image: PngIcons.update3,
        title: "Shop To Support",
        description: "Our latest cohort of community health workers completed their training, ready to serve their local communities Many areas in Africa still face a shortage of qualified healthcare workers, particularly in rural regions. This program aims to close that gap by providing the tools and knowledge needed to offer better care and improve health outcomes. These new graduates will be vital in providing direct care, promoting health education, and advocating for healthier communities.Many areas in Africa still face a shortage of qualified healthcare workers, particularly in rural regions. This program aims to close that gap by providing the tools and knowledge needed to offer better care and improve health outcomes. These new graduates will be vital in providing direct care, promoting health education, and advocating for healthier communities.Many areas in Africa still face a shortage of qualified healthcare workers, particularly in rural regions. This program aims to close that gap by providing the tools and knowledge needed to offer better care and improve health outcomes. These new graduates will be vital in providing direct care, promoting health education, and advocating for healthier communities. ",
        category: "Healthcare Access",
        date: "May 3, 2025",
    },

]