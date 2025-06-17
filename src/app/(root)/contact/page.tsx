import ContactAbout from "@/component/ContactUs/about"
import ContactUs from "@/component/ContactUs/hero"
// import OurCommunity from "@/component/viewAll/community"
import { Fragment } from "react"

const ContactUsPage = () => {
  return (
    <Fragment>
      <ContactUs />
      <ContactAbout />
      {/* <OurCommunity /> */}
    </Fragment>
  )
}
export default ContactUsPage