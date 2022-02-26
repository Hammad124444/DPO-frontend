import { Input } from 'antd';


export default function MTextArea({placeholder}) {
    return(
        <Input.TextArea showCount maxLength={200}  placeholder={placeholder} />
    )
}