import { Card } from 'antd';
import MPrimaryBtn from "../buttons/primaryBtn";

const { Meta } = Card;

export default function MLandingOptionCard(props) {

    return (
        <Card
            className="pt-30 mr-20 option"
            cover={ props.icon }
            actions={[
                <MPrimaryBtn key={'actionKey'} size="large" type="primary" label={ props.button } />
            ]}
        >
            <Meta
                className="text-center"
                title={ props.title }
                description={ props.description }
            />
        </Card>
    )
}