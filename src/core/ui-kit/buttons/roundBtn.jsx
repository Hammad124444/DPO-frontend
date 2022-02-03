import { Button } from 'antd';

export default function MRoundBtn({label, size, type, action, fonts}) {
    return(
        <Button shape="round" type={type}  size={size}
                onClick={action}
        >{ label }</Button>
    );
}