import {Col, Form, Row, Typography} from "antd";

const { Title } = Typography;


export default function MCRegisterCompany() {
    return(
        <Row className="container">
            <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                Representative Picture Here
            </Col>
            <Col xs={24} sm={24} md={12} lg={16} xl={16}>
                <Title className={'c-green'}>List Your Company</Title>
                <Title level={3}>
                    Please complete the following information to create your Account and List on the Direct Private Offers Funding Portal.
                </Title>
                <p>Register Your Company</p>
                <Form
                    layout={'vertical'}
                >

                </Form>
            </Col>
        </Row>
    )
}
