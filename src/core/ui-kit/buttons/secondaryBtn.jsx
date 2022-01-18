import { Button } from 'antd';

export default function MSecondaryBtn({ size, type, label }) {
    return(
        <Button size={size} type={type} danger>{ label }</Button>
    );
}