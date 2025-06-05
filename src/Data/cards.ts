import PngIcons from "@/Icons/pngIcons";
export interface cardsData {
    id: number;
    image: string;
    text1: string;
    text2: string;
    text3: string;
    text4: string;
    desctription: string;
}
export const CardData: cardsData[] = [
    {
        id: 1,
        text1: "EVENTS",
        image: PngIcons.card1 ,
        text2: "Upcoming Events",
        text3: "Host an Event",
        text4: "Event Sponsorship",
        desctription:"Participate in or host fundraising events to support our healthcare initiatives across Africa.",
    },
    {
        id: 2,
        text1: "VOLUNTEER",
        image: PngIcons.card2,
        text2: "Volunteer Opportunities ",
        text3: "Skills-Based Volunteering",
        text4: "Volunteer Application",
        desctription:"Donate your time and skills to help us expand our reach and impact in African communities.",
    },
    {

        id: 3,
        text1: "FUNDRAISE",
        image: PngIcons.card3,
        text2: "Start a Campaign",
        text3: "Fundraising Ideas",
        text4: "Success Stories",
        desctription:"Start your own fundraising campaign to support specific healthcare programs or general operations."
    },
    {

        id: 4,
        text1: "GIVE TODAY",
        image: PngIcons.card4,
        text2: "One-Time Donation",
        text3: "Monthly Giving",
        text4: "Major Gifts",
        desctription:"Make a direct donation to immediately support our ongoing healthcare initiatives and programs."
    },
        {

        id: 5,
        text1: "SHOP TO SUPPORT",
        image: PngIcons.card5,
        text2: "Online Store",
        text3: "Partner Retailers",
        text4: "Gift Cards",
        desctription:"Purchase merchandise where proceeds directly benefit our healthcare programs across Africa."
    },
        {

        id: 6,
        text1: "CORPORATE GIVING",
        image: PngIcons.card6,
        text2: "Corporate Partnerships",
        text3: "Matching Gift Programs",
        text4: "Cause Marketing",
        desctription:"Partner your business with us through sponsorships, matching gifts, or in-kind donations."
    },
        {

        id: 7,
        text1: "HONOR & MEMORIAL",
        image: PngIcons.card7,
        text2: "Honor Gifts",
        text3: "Memorial Gifts",
        text4: "Tribute Notifications",
        desctription:"Make a gift in honor or memory of someone special to create a lasting tribute to their legacy."
    },
    {

        id: 8,
        text1: "LEAVE A LEGACY",
        image: PngIcons.card8,
        text2: "Planned Giving",
        text3: "Bequests",
        text4: "Charitable Trusts",
        desctription:"Include Africa for Health in your estate planning to create a lasting impact for generations."
    },
]