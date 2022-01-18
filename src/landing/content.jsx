import { Card, Button } from 'antd';
import { BulbOutlined, DollarOutlined, RocketOutlined } from '@ant-design/icons';
import MCarousel from "../core/ui-kit/carousel/carousel";
import {carousels} from "../core/data/carousels";
import {LandingCards} from "../core/data/landingcards";
import MPrimaryBtn from "../core/ui-kit/buttons/primaryBtn";

const { Meta } = Card;

export default function MLandingContent() {
    return(
        <div className="container-fluid no-padding">
            <MCarousel carousels={carousels}/>
            <div className="ant-row container pt-30">
                {
                    LandingCards.map((el) => (
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
        </div>

    )
}
