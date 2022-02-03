import {formLayout, rangePickerConfig} from "../../core/data/config/ui-config";
import MRangeDatePicker from "../../core/ui-kit/datepicker/rangedatepicker";
import {Form} from "antd";

export default function MNewIssuePeriod() {
    return(
        <Form {...formLayout}>
            <Form.Item label="Active Period" {...rangePickerConfig}>
                <MRangeDatePicker type="new"/>
            </Form.Item>
        </Form>
    )
}