import { Button } from 'antd';

export default function MPrimaryBtn({label, size, type, action}) {
    return(
        <Button type={type}  size={size}
            onClick={action}
        >{ label }</Button>
    );
}