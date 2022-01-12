import { Button } from 'antd';

export default function MPrimaryBtn({label}) {
    return(
        <Button type="primary"  size='large' success>{ label }</Button>
    );
}