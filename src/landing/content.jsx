
import MLandingOptions from "./options";
import MLandingWhyChoose from "./whychoose";
import MLandingCallUs from "./callus";

import {carousels} from "../core/data/carousels";
import {LandingCards} from "../core/data/landingcards";
import {WhyChooseUs} from "../core/data/landing/chooseus";
import { Divider} from "antd";


export default function MLandingContent() {
    return(
        <div className="container-fluid no-padding">

            <MLandingOptions cards={LandingCards}/>
            <Divider />
            <MLandingWhyChoose detail={WhyChooseUs}/>
            <Divider />
            <MLandingCallUs />
        </div>
    )
}
