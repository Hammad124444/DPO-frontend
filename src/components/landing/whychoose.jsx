import Image from 'next/image';
import {Col, Row, Typography} from "antd";
const { Title } = Typography;
export default function MLandingWhyChoose({detail}) {
    return(
        <Row className="container pt-30">
            <Title className="d-block m-auto">{detail.title}</Title>
            <Title level={3} className="d-block m-auto pt-10">{detail.subTitle}</Title>
            <Col xs={24} sm={24} md={24} lg={12} xl={12} className="pt-40">
                {
                    detail.paragraphs.map((el) => (
                        <div key={el.key}>
                            <p className="font-20 c-green font-bold">{el.title}</p>
                            <p className="font-16">{el.description}</p>
                        </div>
                    ))
                }
            </Col>
            <Col xs={24} sm={24} md={24} lg={12} xl={12} className="pl-20 pt-40">
                <Image  alt="Why Choose Us"
                    src={detail.img} layout="responsive"
                    width={300}
                    height={250}
                />
            </Col>
        </Row>

    )
}