import ContactAbout from "@/component/ContactUs/about"
import ContactUs from "@/component/ContactUs/hero"
import OurCommunity from "@/component/ContactUs/ourCommunity"
import { Fragment } from "react"

const ContactUsPage =()=>{
    return(
<Fragment>
  <ContactUs />
  <ContactAbout />
  <OurCommunity />
</Fragment>
    )
}
export default ContactUsPage