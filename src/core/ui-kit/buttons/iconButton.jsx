import { Button } from 'antd';
import {EditOutlined, EyeOutlined} from "@ant-design/icons";

export default function MButtonWithIcon({label, size, type, editable, action}) {
    return(
        <>
            {
                editable ? (
                    <Button
                        type={type}
                        size={size}
                        icon={<EditOutlined />}
                        onClick={action}
                        ghost={true}
                    >{ label }</Button>
                ) : (
                    <Button
                        type={type}
                        size={size}
                        icon={<EyeOutlined />}
                        onClick={action}
                    >{ label }</Button>
                )
            }
        </>
    )
}