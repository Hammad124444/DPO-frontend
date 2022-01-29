import {GoldOutlined, BulbOutlined, RadarChartOutlined, GlobalOutlined} from "@ant-design/icons";
import MKNTypography from "../typography/nTypography";

export default function MKAboutItem({ background, info }) {
    let icon;
    switch (info.id) {
        case 1:
            icon = <GoldOutlined />
        case 2:
            icon = <BulbOutlined />
        case 3:
            icon = <RadarChartOutlined />
    }
    return(
        <div className="ant-row pt-30">
            <div className="ant-col-xs-24 ant-col-sm-12 ant-col-md-8 ant-col-lg-6 ant-col-xl-6">
                { icon }
            </div>
            <div className="ant-col-xs-24 ant-col-sm-12 ant-col-md-16 ant-col-lg-18 ant-col-xl-18">
                {info.id}
                <MKNTypography title={info.title} content={info.content} />
            </div>
        </div>
    )
}