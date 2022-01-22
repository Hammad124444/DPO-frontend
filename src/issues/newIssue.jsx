import { Form } from 'antd';
// constants
import {fundraiseTypes} from "../core/data/fundraiseTypes";
import {stableCoins} from "../core/data/stableCoins";
import {formLayout, rangePickerConfig} from "../core/data/ui-config";
// components
import MPrimaryBtn from "../core/ui-kit/buttons/primaryBtn";
import MRangeDatePicker from "../core/ui-kit/datepicker/rangedatepicker";
import MCheckBoxGroup from "../core/ui-kit/inputs/checkboxgroup";
import MTextArea from "../core/ui-kit/inputs/textarea";
import MEditInput from "../core/ui-kit/inputs/editInput";


export default function MIssueCreate() {
    return(
        <Form {...formLayout}>
            <Form.Item label="Issue Name">
                <MEditInput  placeholder="Issue Name"/>
            </Form.Item>
            <Form.Item label="Description">
                <MTextArea placeholder="Description about the issue"/>
            </Form.Item>
            <Form.Item label="Active Period" {...rangePickerConfig}>
                <MRangeDatePicker type="new"/>
            </Form.Item>
            <Form.Item  label="Rate per Tier">
                <MEditInput prefix="$" placeholder="Rate Per Tier"/>
            </Form.Item>
            <Form.Item label="Total ST per Tier">
                <MEditInput placeholder="Total ST per Tier"/>
            </Form.Item>
            <Form.Item label="Non-accredited Limit USD">
                <MEditInput prefix="$" />
            </Form.Item>
            <Form.Item label="Minimum investment USD">
                <MEditInput prefix="$" />
            </Form.Item>
            <Form.Item label="Fund-raise Types">
                <MCheckBoxGroup options={fundraiseTypes}/>
            </Form.Item>
            <Form.Item  label="Stable Coins">
                <MCheckBoxGroup options={stableCoins}/>
            </Form.Item>
            <Form.Item label="Fund wallet">
                <MEditInput placeholder="Fund Wallet Address"/>
            </Form.Item>
            <Form.Item label="Treasury wallet">
                <MEditInput placeholder="Treasury Wallet Address"/>
            </Form.Item>
            <MPrimaryBtn label="Create Issue" size="large" type="primary"/>
        </Form>
    )
}