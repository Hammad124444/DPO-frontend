import { Button } from 'antd';

export default function MRoundBtn({ size, type, label }) {
    return(
        <Button shape="round" size={size} type={type}>{ label }</Button>
    );
}