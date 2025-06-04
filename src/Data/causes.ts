import PngIcons from "@/Icons/pngIcons";
export type Initiative = {
    id: number;
    title: string;
    stat: string;
    Heading: string;
    description: string;
    image: string;
};

export const initiatives: Initiative[] = [
    {
        id: 1,
        title: "Lower Respiratory Infections",
        stat: "2.5M",
        Heading: "People reached with respiratory care annually.",
        description:
            "Combating respiratory diseases through improved access to vaccines, early detection, and treatment facilities.",
        image: PngIcons.c1,
    },
    {
        id: 2,
        title: "HIV/AIDS",
        stat: "500K+",
        Heading: "Patients supported with HIV care",
        description:
            "Expanding access to testing, antiretroviral therapy, and prevention education to reduce HIV transmission and improve outcomes.",
        image: PngIcons.c2,
    },
    {
        id: 3,
        title: "Malaria",
        stat: "1.2M",
        Heading: "Protective nets distributed",
        description:
            "Implementing comprehensive malaria prevention and treatment programs, including bed net distribution and early intervention.",
        image: PngIcons.c3,
    },
    {
        id: 4,
        title: "Diarrheal Disease",
        stat: "800K",
        Heading: "Children treated annually",
        description:
            "Providing clean water solutions and oral rehydration therapy while improving sanitation infrastructure.",
        image: PngIcons.c4,
    }, {
        id: 5,
        title: "Stroke",
        stat: "150K",
        Heading: "People screened for risk factors",
        description:
            "Developing stroke prevention programs and improving emergency response systems for better outcomes.",
        image: PngIcons.c5,
    }, {
        id: 6,
        title: "Neonatal Conditions",
        stat: "300K",
        Heading: "Newborns receiving care",
        description:
            "Enhancing maternal and newborn care through better facilities and trained healthcare workers.",
        image: PngIcons.c6,
    }, {
        id: 7,
        title: "Tuberculosis",
        stat: "75K",
        Heading: "TB patients treated",
        description:
            "Implementing comprehensive TB detection and treatment programs with community-based care.",
        image: PngIcons.c7,
    }, {
        id: 8,
        title: "Cervical Cancer",
        stat: "100K",
        Heading: "Women screened annually",
        description:
            "Providing screening and treatment services while promoting awareness and prevention.",
        image: PngIcons.c8,
    },
    {
        id: 9,
        title: "Ischemic Heart Disease",
        stat: "200K",
        Heading: "Cardiac screenings performed",
        description:
            "Focusing on prevention through lifestyle changes and improving access to cardiac care.",
        image: PngIcons.c9,
    },
];
