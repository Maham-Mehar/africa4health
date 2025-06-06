import NewsUpdates from "@/component/viewAll/viewhero"
import Updates from "@/component/viewAll/cards"
import { Fragment } from "react"
import OurCommunity from "@/component/viewAll/community"
const ViewAll = () => {
    return (
        <Fragment>
            <NewsUpdates />
            <Updates />
            <OurCommunity />
        </Fragment>

    )
}
export default ViewAll