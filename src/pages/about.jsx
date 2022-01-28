import MLayoutLanding from "../layout/layout-landing";
import MSAbout from "../staticInfo/about";

export default function About() {
    return(
        <MSAbout />
    )
}

About.getLayout = function getLayout(page) {
    return (
        <MLayoutLanding>{page}</MLayoutLanding>
    )
}
