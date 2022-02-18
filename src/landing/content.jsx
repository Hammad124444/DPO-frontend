
import MLandingOptions from "./options";
import MLandingWhyChoose from "./whychoose";
import MLandingCallUs from "./callus";

import {LandingCards} from "../core/data/landing/landingcards";
import {WhyChooseUs} from "../core/data/landing/chooseus";
import { Divider} from "antd";
import MLandscape from "./landscape";
import MKDrawer from "../core/ui-kit/drawer/drawer";
import {AcknowledgeData} from '../core/data/config/Acknowledge';
import { useEffect, useState } from "react";


export default function MLandingContent() {
    const [drawerVisible, setDrawerVisible] = useState();
    useEffect(() => {
        const checkStatus = localStorage.getItem('acknowledged');
        setDrawerVisible(!checkStatus);
    }, [])

    const onAcknowledgeClick = () => {
        localStorage.setItem('acknowledged', true);
    } 

    return(
        <div className="container-fluid no-padding">
            <MLandscape />
            <MLandingOptions cards={LandingCards}/>
            <Divider />
            <MLandingWhyChoose detail={WhyChooseUs}/>
            <Divider />
            <MLandingCallUs />
            <MKDrawer visible={drawerVisible} action={onAcknowledgeClick} {...AcknowledgeData}/>
        </div>
    )
}
