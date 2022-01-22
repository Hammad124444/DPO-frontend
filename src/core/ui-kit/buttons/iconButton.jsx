import { Button } from 'antd';
import {EditOutlined, EyeOutlined} from "@ant-design/icons";

export default function MButtonWithIcon({label, size, type, editable, navigate}) {
    return(
        <>
            {
                editable ? (
                    <Button
                        type={type}
                        size={size}
                        icon={<EditOutlined />}
                        onClick={navigate}
                    >{ label }</Button>
                ) : (
                    <Button
                        type={type}
                        size={size}
                        icon={<EyeOutlined />}
                        onClick={navigate}
                    >{ label }</Button>
                )
            }
        </>
    )
}