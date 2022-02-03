import { Card } from 'antd';
import {BulbOutlined, GoldOutlined, RadarChartOutlined} from "@ant-design/icons";
import MPrimaryBtn from "../buttons/primaryBtn";

const { Meta } = Card;

export default function MLandingOptionCard({info}) {
    let icon;
    if (info.id  == 1) {
        icon = <GoldOutlined className="font-80 c-green"/>
    } else if(info.id == 2) {
        icon = <BulbOutlined className="font-80 c-green" />
    } else {
        icon = <RadarChartOutlined className="font-80 c-green" />
    }

    return (
        <Card
            className="pt-30 mr-20"
            cover={icon}
            actions={[
                <MPrimaryBtn size="large" ghost key={info.id} type="danger" label={info.button} />
            ]}
        >
            <Meta
                className="text-center"
                title={info.title}
                description={info.description}
            />
        </Card>
    )
}