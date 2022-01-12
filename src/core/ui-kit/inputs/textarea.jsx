import { Form, Mentions } from 'antd';
 
export default function MTextArea({label, placeholder}) {
    return(
        <Form.Item label={label}>
            <Mentions autoSize row={4} placeholder={placeholder}></Mentions>
        </Form.Item>
    )
}