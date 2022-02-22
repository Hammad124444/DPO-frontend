import MLayoutWithHeaderAndFooter from "../../layout/layout-headerAndFooter";
import MCPrivacyPolicy from "../../components/staticInfo/privacypolicy";

export default function MPrivacyPolicy() {
    return(
        <MCPrivacyPolicy />        
    )
}

MPrivacyPolicy.getLayout = function getLayout(page) {
    return(
        <MLayoutWithHeaderAndFooter>
            {page}
        </MLayoutWithHeaderAndFooter>
    )
}