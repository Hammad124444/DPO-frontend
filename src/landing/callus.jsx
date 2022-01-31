import MPrimaryBtn from "../core/ui-kit/buttons/primaryBtn";
import {PhoneFilled} from "@ant-design/icons";

export default function MLandingCallUs() {
    return(
        <div className="container pv-30">
            <div className="ant-row">
                <div className="ant-col-xs-24 ant-col-sm-24 ant-col-md-12 ant-col-lg-8 ant-col-xl-8 d-flex justify-content-center align-items-center">
                    <PhoneFilled className="font-80 c-green"/>
                </div>
                <div className="ant-col-xs-24 ant-col-sm-24 ant-col-md-12 ant-col-lg-16 ant-col-xl-16 text-center">
                    <h1 className="font-32">Call Us Today</h1>
                    <h3 className="font-24">We help business raise capital! What are you waiting for ?</h3>
                    <MPrimaryBtn label="Call Now 647-393-8417" size="large" type="primary"/>
                </div>
            </div>
        </div>
    )
}