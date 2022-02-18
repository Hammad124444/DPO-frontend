import MLayoutWithHeaderAndFooter from "../../layout/layout-headerAndFooter";
import MPTermsOfUse from "../../staticInfo/termsOfUse";

export default function MTermsAndConditions() {
    return(
        <MPTermsOfUse />
    )
}

MTermsAndConditions.getLayout = function getLayout(page) {
    return(
        <MLayoutWithHeaderAndFooter>
            {page}
        </MLayoutWithHeaderAndFooter>
    )
}