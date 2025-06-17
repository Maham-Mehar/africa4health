import GetInvolved from "@/component/getInvolved/heroinvolved";
import ParticipentData from "@/component/getInvolved/participent";
import Advocate from "@/component/getInvolved/advocate";
import SliderSection from "@/component/getInvolved/slider";
import OurCommunity from "@/component/viewAll/community";

const Getinvolved =()=>{
    return(
        <>
        <GetInvolved />
        <ParticipentData />
        <SliderSection />
        <Advocate />
        <OurCommunity />
        </>
    )
}
export default Getinvolved;