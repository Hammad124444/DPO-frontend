import MCarousel from "../core/ui-kit/carousel/carousel";
import MLandingOptions from "./options";
import MLandingWhyChoose from "./whychoose";
import MLandingCallUs from "./callus";
import {carousels} from "../core/data/carousels";
import {LandingCards} from "../core/data/landingcards";
import {WhyChooseUs} from "../core/data/landing/chooseus";


export default function MLandingContent() {
    return(
        <div className="container-fluid no-padding">
            <MCarousel carousels={carousels}/>
            <MLandingOptions cards={LandingCards}/>
            <MLandingWhyChoose detail={WhyChooseUs}/>
            <MLandingCallUs />
        </div>
    )
}
