import MLayoutWithHeaderAndFooter from "../../layout/layout-headerAndFooter";

export default function MTermsAndConditions() {
    return(
        <h1>Terms And Conditions</h1>
    )
}

MTermsAndConditions.getLayout = function getLayout(page) {
    return(
        <MLayoutWithHeaderAndFooter>
            {page}
        </MLayoutWithHeaderAndFooter>
    )
}