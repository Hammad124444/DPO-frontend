import { Form } from 'antd';
import { fundraiseTypes } from '../../core/data/fundraiseTypes';
import { stableCoins } from '../../core/data/stableCoins';
import MPrimaryBtn from '../../core/ui-kit/buttons/primaryBtn';
import MRangeDatePicker from "../../core/ui-kit/datepicker/rangedatepicker"
import MCheckBoxGroup from '../../core/ui-kit/inputs/checkboxgroup';
import MEditInput from "../../core/ui-kit/inputs/editInput"
import MTextArea from '../../core/ui-kit/inputs/textarea';


const formItemLayout = {
    labelCol: {
        xs: {span: 24},
        sm: {span: 4}
    },
    wrapperCol: {
        xs: {span: 24},
        sm: {span: 8}
    }
}

export default function MCreateIssue() {
    return(
        <Form {...formItemLayout}>
            <MEditInput label="Issue Name" />
            <MTextArea label="Description" placeholder="Description about the issue"/>
            <MRangeDatePicker label="Active Period"/>
            <MEditInput label="Rate per Tier" prefix="$" placeholder="Rate Per Tier"/>
            <MEditInput label="Total ST per Tier" placeholder="Total ST per Tier"/>
            <MEditInput label="Non-accredited Limit USD" prefix="$" />
            <MEditInput label="Minimum investment USD" prefix="$" />
            <MCheckBoxGroup label="Fund-raise Types" options={fundraiseTypes}/>
            <MCheckBoxGroup label="Stable Coins" options={stableCoins}/>
            <MEditInput label="Fund wallet" />
            <MEditInput label="Treasury wallet" />
            <MPrimaryBtn label="Create Issue" size="large" type="primary"/>
        </Form>
    )
}