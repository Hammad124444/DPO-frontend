import MLayoutWithHeaderAndFooter from "../../layout/layout-headerAndFooter";

export default function MPrivacyPolicy() {
    return(
        <h1>Privacy Policy</h1>
    )
}

MPrivacyPolicy.getLayout = function getLayout(page) {
    return(
        <MLayoutWithHeaderAndFooter>
            {page}
        </MLayoutWithHeaderAndFooter>
    )
}