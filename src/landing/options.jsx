import { Card } from 'antd';

import { BulbOutlined } from "@ant-design/icons";
import MPrimaryBtn from "../core/ui-kit/buttons/primaryBtn";

const { Meta } = Card;

export default function MLandingOptions({cards}) {
    return(
        <div className="ant-row container pt-30">
            {
                cards.map((el) => (
                    <div key={el.id} className="ant-col-8 ant-col-sm-8 ant-col-xs-24">
                        <Card
                            className="pt-30"
                            cover={<BulbOutlined style={{ fontSize: '50px'}} />}
                            actions={[
                                <MPrimaryBtn key={el.id} type="default" label={el.button} size="default"/>
                            ]}
                        >
                            <Meta
                                className="text-center"
                                title={el.title}
                                description={el.description}
                            />
                        </Card>
                    </div>
                ))
            }
        </div>
    )
}