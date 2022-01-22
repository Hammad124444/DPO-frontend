import { Card } from 'antd';
import {BulbOutlined} from "@ant-design/icons";
import MPrimaryBtn from "../buttons/primaryBtn";

const { Meta } = Card;

export default function MLandingOptionCard({info}) {
    return (
        <Card
            className="pt-30"
            cover={<BulbOutlined style={{ fontSize: '50px'}} />}
            actions={[
                <MPrimaryBtn key={info.id} type="default" label={info.button} size="default"/>
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