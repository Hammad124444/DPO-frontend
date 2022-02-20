import MLayoutWithHeaderAndFooter from "../../layout/layout-headerAndFooter";
import MCContact from "../../staticInfo/contactus";

export default function MPContactUs() {
    return(
        <MCContact />
    )
}

MPContactUs.getLayout = function getLayout(page) {
    return(
        <MLayoutWithHeaderAndFooter>
            { page }
        </MLayoutWithHeaderAndFooter>
    )
}

