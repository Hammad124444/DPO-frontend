import { Button } from 'antd';


export default function MButtonWithIcon({label, size, type, action, icon, ghost}) {
    return(
        <>
            <Button
                type={type}
                size={size}
                icon={icon}
                onClick={action}
                ghost={ghost}
            >{ label }</Button>
        </>
    )
}