
import MLandingOptions from "./options";
import MLandingWhyChoose from "./whychoose";
import MLandingCallUs from "./callus";

import {LandingCards} from "../core/data/landing/landingcards";
import {WhyChooseUs} from "../core/data/landing/chooseus";
import { Divider} from "antd";
import MLandscape from "./landscape";


export default function MLandingContent() {
    return(
        <div className="container-fluid no-padding">
            <MLandscape />
            <MLandingOptions cards={LandingCards}/>
            <Divider />
            <MLandingWhyChoose detail={WhyChooseUs}/>
            <Divider />
            <MLandingCallUs />
        </div>
    )
}
