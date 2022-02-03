import { Steps } from 'antd';
import {useState} from "react";
import {steps} from "../core/data/issue/newissueitems";


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
                        steps.map((el) => (
                            <Step key={el.title} title={el.title} description={el.description}/>
                        ))
                    }
                </Steps>
            </div>
            <div className={'ant-col-sm-12 ant-col-md-16 ant-col-lg-18 ant-col-xl-18'}>
                {
                    steps[state].content
                }
            </div>
        </div>
    )
}
