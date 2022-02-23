import {Checkbox} from "antd";

export default function MKCheckBox(props) {
    return(
        <Checkbox onChange={props.action}>
            { props.label }
        </Checkbox>
    )
}