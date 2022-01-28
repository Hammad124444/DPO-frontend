import { Button } from 'antd';

export default function MRoundBtn({ size, type, label, action }) {
    return(
        <Button shape="round" size={size} type={type}
            onClick={action}
        >{ label }</Button>
    );
}