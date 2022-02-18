import { Button } from 'antd';

export default function MPrimaryBtn({label, size, type, action, ghost}) {
    return(
        <Button type={type}  size={size}
            onClick={action} ghost={ghost}
        >{ label }</Button>
    );
}