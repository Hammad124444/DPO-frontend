import { Card } from 'antd';
import MPrimaryBtn from "../buttons/primaryBtn";

const { Meta } = Card;

export default function MLandingOptionCard({info}) {

    return (
        <Card
            className="pt-30 mr-20"
            cover={info.icon}
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