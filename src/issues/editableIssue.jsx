import { Form } from 'antd';
import MRangeDatePicker from "../core/ui-kit/datepicker/rangedatepicker";

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 4 }
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 8 }
    }
}

export default function MEditableIssue() {
    return(
        <Form {...formItemLayout}>
            <MRangeDatePicker label="Active Period" type="edit"/>

        </Form>
    )
}