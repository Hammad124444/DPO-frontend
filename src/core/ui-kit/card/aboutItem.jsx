import { Col, Row } from "antd";
import MKNTypography from "../typography/nTypography";

export default function MKAboutItem({ background, info }) {

    return(
        <Row className={"mt-30 pv-30 " + background }>
            <Col xs={24} sm={12} md={8} lg={6}  xl={6}
            className="ant-col-xs-24 ant-col-sm-12 ant-col-md-8 ant-col-lg-6 ant-col-xl-6 d-flex justify-content-center align-items-center">
                { info.icon }
            </Col>
            <Col xs={24} sm={12} md={16} lg={18}  xl={18}
             className="ph-20 ant-col-xs-24 ant-col-sm-12 ant-col-md-16 ant-col-lg-18 ant-col-xl-18">
                <MKNTypography title={info.title} content={info.content} color="c-white"/>
            </Col>
        </Row>
    )
}