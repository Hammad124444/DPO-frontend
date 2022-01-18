import { Button } from 'antd';

export default function MPrimaryBtn({label, size, type}) {
    return(
        <Button type={type}  size={size}>{ label }</Button>
    );
}