import { Mentions } from 'antd';
 
export default function MTextArea({placeholder}) {
    return(
            <Mentions autoSize row={4} placeholder={placeholder}></Mentions>
    )
}