import {Form, Steps } from 'antd';
import {useState} from "react";
import { newIsuseSteps } from "../core/data/issue/newissueitems";
import {formLayout} from "../core/data/config/ui-config";
import MButtonWithIcon from "../core/ui-kit/buttons/iconButton";
import {SwapLeftOutlined, SwapRightOutlined, SaveOutlined} from "@ant-design/icons";


const { Step } = Steps;
export default function MIssueCreate() {
    const [state, setState] = useState(0);
    const stepChange = (current) => {
        console.log(current);
        setState(current)
    }

    return(
        <div className={'container ant-row pt-30'}>
            <div className={'ant-col-sm-12 ant-col-md-8 ant-col-lg-6 ant-col-xl-6'}>
                <Steps direction="vertical" current={state} onChange={stepChange}>
                    {
                        newIsuseSteps.map((el) => (
                            <Step key={el.key} title={el.title} description={el.description}/>
                        ))
                    }
                </Steps>
            </div>
            <div className={'ant-col-sm-12 ant-col-md-16 ant-col-lg-18 ant-col-xl-18 d-flex flex-column justify-content-center align-items-center'}>
                <Form {...formLayout}>
                    {
                        newIsuseSteps[state].content
                    }
                    <div className={'d-block text-center mt-50'}>
                        {
                            state > 0 && (
                                <MButtonWithIcon label={'Previous'} action={() => setState(state - 1)} className={'mr-30'}
                                    type={'primary'} size={'large'} icon={<SwapLeftOutlined />}
                                />
                            )
                        }
                        {
                            state < newIsuseSteps.length - 1 && (
                                <MButtonWithIcon label={'Next'} action={() => setState(state + 1)}
                                                 type={'primary'} size={'large'} icon={<SwapRightOutlined />}
                                />
                            )
                        }
                        {
                            state == newIsuseSteps.length - 1 && (
                                <MButtonWithIcon label={'Submit'}
                                    type={'danger'} size={'large'} icon={<SaveOutlined />}
                                />
                            )
                        }
                    </div>
                </Form>
            </div>
        </div>
    )
}
