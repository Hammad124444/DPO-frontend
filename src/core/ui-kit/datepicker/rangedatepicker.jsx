import { Form, DatePicker } from "antd";

const { RangePicker } = DatePicker;

const rangeConfig = {
    rules: [{ type: 'array', required: true, message: 'Please select time!' }],
};
export default function MRangeDatePicker({ label }) {
    return(
        <Form.Item label={label}  {...rangeConfig}>
            <RangePicker renderExtraFooter={() => 'extra footer'} size="large"/>
        </Form.Item>
    )
}