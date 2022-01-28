import MSContact from "../staticInfo/contact";
import MLayoutLanding from "../layout/layout-landing";

export default function Contact() {
    return(
        <MSContact />
    )
}

Contact.getLayout = function getLayout(page) {
    return (
        <MLayoutLanding>{page}</MLayoutLanding>
    )
}