import MSHowItWorks from "../../components/staticInfo/howitworks";
import MLayoutWithHeaderAndFooter from "../../layout/layout-headerAndFooter";

export default function howItWorks() {
    return(
        <MSHowItWorks />
    )
}

howItWorks.getLayout = function getLayout(page) {
    return (
        <MLayoutWithHeaderAndFooter>
            {page}
        </MLayoutWithHeaderAndFooter>
    )
}