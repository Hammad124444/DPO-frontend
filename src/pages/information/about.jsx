import MLayoutLanding from "../../layout/layout-landing";
import MSAbout from "../../components/staticInfo/about";
import MLandingCallUs from "../../components/landing/callus";

export default function About() {
    return(
        <>
            <MSAbout />
            <MLandingCallUs />
        </>
    )
}

About.getLayout = function getLayout(page) {
    return (
        <MLayoutLanding>{page}</MLayoutLanding>
    )
}
