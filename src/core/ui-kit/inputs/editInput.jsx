import { Form, Input } from 'antd';

export default function MEditInput({label, prefix, placeholder}) {
    return(
        <Form.Item label={label}>
            <Input
            style={{ width: '100%' }}
            placeholder={placeholder}
            id="warning"
            prefix={prefix}
            size='large'
            />
        </Form.Item>
    )
}