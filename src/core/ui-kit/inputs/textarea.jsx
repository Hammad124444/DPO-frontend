import { Input } from 'antd';

const { TextArea } = Input;
export default function MTextArea({placeholder}) {
    return(
        <TextArea rows={4} placeholder={placeholder} />
    )
}