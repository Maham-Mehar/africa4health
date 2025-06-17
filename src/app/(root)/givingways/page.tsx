import Cards from "@/component/GivingWays/cards";
import SupportSection from "@/component/GivingWays/support";
import FAQSection from "@/component/GivingWays/FAQ";
import WaysSection from "@/component/GivingWays/hero";
import OurCommunity from "@/component/GivingWays/todaysImpact";
const GivingWay =()=>{
    return(
        <>
        <WaysSection />
        <Cards /> 
        <SupportSection />
        <FAQSection />
        <OurCommunity />
        </>
    )
}
export default GivingWay;