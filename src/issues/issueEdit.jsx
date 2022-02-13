import { Tabs, Form, Row, Col } from 'antd';
import { useState } from "react";
import MButtonWithIcon from "../core/ui-kit/buttons/iconButton";
import { SaveOutlined } from "@ant-design/icons";
import {existingIssueItems} from "../core/data/issue/existingissueitems";
import {formLayout} from "../core/data/config/ui-config";

const { TabPane } = Tabs;

export default function MEditIssueDetailById({issueId}) {
    const [current, setCurrent] = useState(1);
    const saveAction = () => {
        // setCurrent()
    }
    return(
        <Row className={'container'}>
            <Col xs={24} sm={12} md={8} lg={6} xl={6}>

            </Col>
            <Col xs={24} sm={12} md={16} lg={18} xl={18}>
                <div className={'pt-40 pl-30 card-container'}>
                    <Tabs
                        defaultActiveKey={current}
                        tabPosition="top"
                        size="large"
                        onChange={() => saveAction()}
                        type={'card'}
                    >
                        {
                            existingIssueItems.map((el) => (
                                    <TabPane tab={el.title} key={el.key}>
                                        <div className={'container'}>
                                            <Form {...formLayout}>
                                            {el.contentGenerator({ issueId})}
                                            </Form>
                                        </div>
                                        <div className={'d-block text-center pt-40'}>
                                            <MButtonWithIcon label={'Save Changes'} type={'primary'} size={'large'} icon={<SaveOutlined />}/>
                                        </div>
                                    </TabPane>
                            ))
                        }
                    </Tabs>
                </div>
            </Col>
        </Row>
    )
}