import { Input } from 'antd';

export default function MEditInput({prefix, placeholder}) {
    return(
            <Input
            style={{ width: '100%' }}
            placeholder={placeholder}
            id="warning"
            prefix={prefix}
            size='large'
            />
    )
}