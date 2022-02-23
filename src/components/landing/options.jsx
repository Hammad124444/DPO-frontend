import { Row, Col } from 'antd';
import MLandingOptionCard from "../../core/ui-kit/card/landing_card";

export default function MLandingOptions({cards}) {
    return(
        <Row className="container pt-30">
            {
                cards.map((el) => (
                    <Col key={el.key} xs={24} sm={24} md={8} lg={8} xl={8} className={'mt-30'}>
                        <MLandingOptionCard {...el}/>
                    </Col>
                ))
            }
        </Row>
    )
}