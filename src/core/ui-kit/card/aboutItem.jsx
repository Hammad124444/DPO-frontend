import {GoldOutlined, BulbOutlined, RadarChartOutlined, GlobalOutlined} from "@ant-design/icons";
import MKNTypography from "../typography/nTypography";

export default function MKAboutItem({ background, info }) {
    let icon;

    if (info.id  == 1) {
        icon = <GoldOutlined className="font-80 c-white"/>
    } else if(info.id == 2) {
        icon = <BulbOutlined className="font-80 c-white" />
    } else {
        icon = <RadarChartOutlined className="font-80 c-white" />
    }

    return(
        <div className={"ant-row mt-30 pv-30 " + background }>
            <div className="ant-col-xs-24 ant-col-sm-12 ant-col-md-8 ant-col-lg-6 ant-col-xl-6 d-flex justify-content-center align-items-center">
                { icon }
            </div>
            <div className="ph-20 ant-col-xs-24 ant-col-sm-12 ant-col-md-16 ant-col-lg-18 ant-col-xl-18">
                <MKNTypography title={info.title} content={info.content} color="c-white"/>
            </div>
        </div>
    )
}