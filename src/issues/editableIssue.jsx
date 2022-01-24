import { Form } from 'antd';
import MRangeDatePicker from "../core/ui-kit/datepicker/rangedatepicker";
import { formLayout } from "../core/data/ui-config";

export default function MEditIssueDetailById() {
    return(
        <Form {...formLayout}>
            <MRangeDatePicker label="Active Period" type="edit"/>
        </Form>
    )
}