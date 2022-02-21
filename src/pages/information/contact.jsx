import MLayoutWithHeaderAndFooter from "../../layout/layout-headerAndFooter";
import MCContact from "../../staticInfo/contactus";

export default function MPContactUs() {
    return(
        // <MCContact />
        <h1>Hello Contact Us Page</h1>
    )
}

MPContactUs.getLayout = function getLayout(page) {
    return(
        <MLayoutWithHeaderAndFooter>
            { page }
        </MLayoutWithHeaderAndFooter>
    )
}

