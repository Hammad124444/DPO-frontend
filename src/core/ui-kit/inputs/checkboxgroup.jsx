import { Form, Checkbox } from 'antd';

export default function MCheckBoxGroup({label, options}) {
    const onChange = (checkedValues) => {
        console.log('checked = ', checkedValues);
    }
    return(
        <Form.Item label={label}>
            <Checkbox.Group options={options} 
             onChange={onChange} />
        </Form.Item>
    )
}