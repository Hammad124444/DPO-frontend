import { Tabs } from 'antd';
import {steps} from "../core/data/issue/newissueitems";
import {useState} from "react";
import MButtonWithIcon from "../core/ui-kit/buttons/iconButton";
import {SaveOutlined} from "@ant-design/icons";

const { TabPane } = Tabs;

export default function MEditIssueDetailById() {
    const [current, setCurrent] = useState(1);
    const saveAction = () => {
        // setCurrent()
    }
    return(
        <div className={'pt-40 pl-30 card-container'}>
            <Tabs
                defaultActiveKey={current}
                tabPosition="left"
                size="large"
                style={{ minHeight: '100vh' }}
                onChange={() => saveAction()}
            >
                {
                    steps.map((el, index) => (
                        <TabPane tab={el.title} key={index + 1}>
                            <div className={'container'}>
                                {el.content}
                            </div>
                            <div className={'d-block text-center pt-40'}>
                                <MButtonWithIcon label={'Save Changes'} type={'primary'} size={'large'} icon={<SaveOutlined />}/>
                            </div>
                        </TabPane>
                    ))
                }
            </Tabs>
        </div>
    )
}