import MLayoutLanding from "../../layout/layout-landing";
import MSAbout from "../../staticInfo/about";
import MLandingCallUs from "../../landing/callus";

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
