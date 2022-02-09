import { Tabs, Form } from 'antd';
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
        <div className={'container ant-row'}>
            <div className={'ant-col-xs-24 ant-col-sm-12 ant-col-md-8 ant-col-lg-6 ant-col-xl-6'}>

            </div>
            <div className={'ant-col-xs-24 ant-col-sm-12 ant-col-md-16 ant-col-lg-18 ant-col-xl-18'}>
                <div className={'pt-40 pl-30 card-container'}>
                    <Tabs
                        defaultActiveKey={current}
                        tabPosition="top"
                        size="large"
                        onChange={() => saveAction()}
                        type={'card'}
                    >
                        {
                            existingIssueItems.map((el, index) => (
                                    <TabPane tab={el.title} key={index + 1}>
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
            </div>
        </div>
    )
}